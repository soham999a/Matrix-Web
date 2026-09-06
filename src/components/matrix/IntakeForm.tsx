"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMemo, useState } from "react";

const intakeSchema = z.object({
  industry: z.string().min(2, "Please name your industry"),
  companyName: z.string().min(2, "Please name your company"),
  companySize: z.string(),
  geography: z.string(),
  stack: z.string(),
  problem: z
    .string()
    .min(20, "Please describe your biggest operational problem (min 20 characters)"),
  useCase: z.string(),
  dataAvailability: z.enum(
    ["", "Limited / siloed", "Moderate / some structure", "High / well-structured"],
    {
      errorMap: () => ({ message: "Please select data availability" }),
    },
  ),
  timeline: z.enum(
    [
      "",
      "Immediate (0-3 months)",
      "Short-term (3-6 months)",
      "Medium-term (6-12 months)",
      "Long-term (12+ months)",
    ],
    { errorMap: () => ({ message: "Please select a decision timeline" }) },
  ),
  budget: z.enum(["", "< 50k", "50k - 200k", "200k - 1M", "1M+"], {
    errorMap: () => ({ message: "Please select a project scale / budget" }),
  }),
  decisionMaker: z.string(),
});

type IntakeFormData = z.infer<typeof intakeSchema>;

const interestOptions = [
  "AI Analytics",
  "SaaS",
  "Agentic",
  "Consulting",
  "Digital Products",
] as const;

const sizeWeight = {
  "1-10": 0,
  "11-50": 1,
  "51-200": 2,
  "201-1000": 3,
  "1000+": 4,
};

const dataWeight = {
  "Limited / siloed": 1,
  "Moderate / some structure": 2,
  "High / well-structured": 3,
};

const budgetWeight = {
  "< 50k": 1,
  "50k - 200k": 2,
  "200k - 1M": 3,
  "1M+": 4,
};

const timelineWeight = {
  "Immediate (0-3 months)": 4,
  "Short-term (3-6 months)": 3,
  "Medium-term (6-12 months)": 2,
  "Long-term (12+ months)": 1,
};

function computeAssessment(d: IntakeFormData, interests: string[]) {
  const size = sizeWeight[d.companySize as keyof typeof sizeWeight] ?? 0;
  const data = dataWeight[d.dataAvailability as keyof typeof dataWeight] ?? 0;
  const budget = budgetWeight[d.budget as keyof typeof budgetWeight] ?? 0;
  const timeline = timelineWeight[d.timeline as keyof typeof timelineWeight] ?? 0;
  const interest = Math.min(interests.length, 3);
  const problem = d.problem.length >= 40 ? 2 : d.problem.length >= 20 ? 1 : 0;
  const total = [4, 3, 4, 4, 3, 2];
  const raw = size + data + budget + timeline + interest + problem;
  const max = total.reduce((a, b) => a + b, 0);
  const readinessScore = Math.round((raw / max) * 100);

  const intervention =
    d.budget === "1M+"
      ? "Embedded platform build · Intelligence product"
      : d.budget === "200k - 1M"
        ? "Architecture engagement · pilots first"
        : d.budget === "50k - 200k"
          ? "Architecture discovery · 3-6 months"
          : "Consulting · discovery engagement";

  const path =
    d.timeline === "Immediate (0-3 months)"
      ? "Expedited intake → pilot within 60 days"
      : d.timeline === "Short-term (3-6 months)"
        ? "Diagnostic sprint → architecture this half"
        : d.timeline === "Medium-term (6-12 months)"
          ? "Quarterly engagement planning"
          : "Staged roadmap · Long-term build";

  return { readinessScore, intervention, path };
}

export function IntakeForm() {
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [assessment, setAssessment] = useState<ReturnType<typeof computeAssessment> | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IntakeFormData>({
    resolver: zodResolver(intakeSchema),
  });

  const toggleInterest = (v: string) =>
    setInterests((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]));

  const payload = useMemo(
    () => (d: IntakeFormData) => ({
      fields: {
        industry: d.industry,
        companyName: d.companyName,
        companySize: d.companySize || "Not provided",
        geography: d.geography || "Not provided",
        stack: d.stack || "Not provided",
        problem: d.problem,
        useCase: d.useCase || "Not provided",
        dataAvailability: d.dataAvailability || "Not provided",
        timeline: d.timeline || "Not provided",
        budget: d.budget || "Not provided",
        decisionMaker: d.decisionMaker || "Not provided",
        interests,
      },
      assessment: computeAssessment(d, interests),
    }),
    [interests],
  );

  const onSubmit = async (d: IntakeFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const body = payload(d);
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Intake gateway error");
      setAssessment(body.assessment);
      setIsSubmitted(true);
      reset();
      setInterests([]);
    } catch (err) {
      setSubmitError(
        err instanceof Error && err.message === "Intake gateway error"
          ? "The intake gateway is not configured yet. Write to system@matrka.net directly."
          : "Something went wrong sending your assessment. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted && assessment) {
    return (
      <div className="border border-border p-8 md:p-12">
        <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-gold">
          MATRIX · Intelligence Assessment
        </div>
        <div className="font-display text-3xl md:text-5xl tracking-tight mt-6 mb-8">
          Assessment received.
        </div>

        <div className="grid grid-cols-12 gap-px bg-border border border-border">
          <div className="col-span-12 md:col-span-4 bg-background p-6">
            <p className="eyebrow !text-muted-foreground mb-3">Intelligence Readiness Score</p>
            <p className="font-display text-5xl tracking-tight">
              {assessment.readinessScore}
              <span className="text-2xl text-muted-foreground">/100</span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 bg-background p-6">
            <p className="eyebrow !text-muted-foreground mb-3">Recommended Intervention</p>
            <p className="font-display text-2xl leading-tight tracking-tight">
              {assessment.intervention}
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 bg-background p-6">
            <p className="eyebrow !text-muted-foreground mb-3">Implementation Path</p>
            <p className="font-display text-2xl leading-tight tracking-tight">{assessment.path}</p>
          </div>
        </div>

        <p className="mt-7 text-muted-foreground leading-relaxed max-w-lg">
          Your assessment has been recorded and a correspondence is on its way to the studio. A
          Matrix advisor will respond within a few working days.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-8 font-mono text-[10px] tracking-[0.28em] uppercase border-b border-gold pb-1 hover:text-gold transition-colors"
        >
          Submit another assessment →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div>
        <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-gold">
          MATRIX · Intelligence Assessment
        </p>
        <p className="eyebrow !text-muted-foreground mt-2">
          Adaptive Intelligence Allocation · Market Intelligence Intake
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6 sm:gap-8">
        <div className="col-span-12 md:col-span-6">
          <FieldLabel htmlFor="industry" required>
            Industry
          </FieldLabel>
          <input
            id="industry"
            type="text"
            {...register("industry")}
            className="field-line"
            placeholder="Financial services, manufacturing, education…"
          />
          <FieldError message={errors.industry?.message} />
        </div>

        <div className="col-span-12 md:col-span-6">
          <FieldLabel htmlFor="companyName" required>
            Company name
          </FieldLabel>
          <input
            id="companyName"
            type="text"
            {...register("companyName")}
            className="field-line"
            placeholder="Your organisation"
          />
          <FieldError message={errors.companyName?.message} />
        </div>

        <div className="col-span-12 md:col-span-6">
          <FieldLabel htmlFor="companySize">Company size</FieldLabel>
          <select
            id="companySize"
            {...register("companySize")}
            className="field-line appearance-none cursor-pointer"
          >
            <option value="" className="bg-background text-foreground">
              Select range
            </option>
            {["1-10", "11-50", "51-200", "201-1000", "1000+"].map((o) => (
              <option key={o} value={o} className="bg-background text-foreground">
                {o}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-12 md:col-span-6">
          <FieldLabel htmlFor="geography">Geography</FieldLabel>
          <input
            id="geography"
            type="text"
            {...register("geography")}
            className="field-line"
            placeholder="Country / region of operations"
          />
        </div>

        <div className="col-span-12">
          <FieldLabel htmlFor="stack">Current systems / technology stack</FieldLabel>
          <input
            id="stack"
            type="text"
            {...register("stack")}
            className="field-line"
            placeholder="ERP, CRM, data warehouse, in-flight automation…"
          />
        </div>

        <div className="col-span-12">
          <FieldLabel htmlFor="problem" required>
            Biggest operational problem
          </FieldLabel>
          <textarea
            id="problem"
            {...register("problem")}
            rows={4}
            className="field-line resize-none"
            placeholder="Describe the operational pain you are trying to solve…"
          />
          <FieldError message={errors.problem?.message} />
        </div>

        <div className="col-span-12">
          <FieldLabel htmlFor="useCase">Desired AI use case</FieldLabel>
          <input
            id="useCase"
            type="text"
            {...register("useCase")}
            className="field-line"
            placeholder="Forecasting, decision support, agentic workflows, analytics…"
          />
        </div>

        <div className="col-span-12 md:col-span-4">
          <FieldLabel htmlFor="dataAvailability">Data availability</FieldLabel>
          <select
            id="dataAvailability"
            {...register("dataAvailability")}
            className="field-line appearance-none cursor-pointer"
          >
            <option value="" className="bg-background text-foreground">
              Select
            </option>
            {["Limited / siloed", "Moderate / some structure", "High / well-structured"].map(
              (o) => (
                <option key={o} value={o} className="bg-background text-foreground">
                  {o}
                </option>
              ),
            )}
          </select>
          <FieldError message={errors.dataAvailability?.message} />
        </div>

        <div className="col-span-12 md:col-span-4">
          <FieldLabel htmlFor="timeline">Decision timeline</FieldLabel>
          <select
            id="timeline"
            {...register("timeline")}
            className="field-line appearance-none cursor-pointer"
          >
            <option value="" className="bg-background text-foreground">
              Select
            </option>
            {[
              "Immediate (0-3 months)",
              "Short-term (3-6 months)",
              "Medium-term (6-12 months)",
              "Long-term (12+ months)",
            ].map((o) => (
              <option key={o} value={o} className="bg-background text-foreground">
                {o}
              </option>
            ))}
          </select>
          <FieldError message={errors.timeline?.message} />
        </div>

        <div className="col-span-12 md:col-span-4">
          <FieldLabel htmlFor="budget">Project scale / budget</FieldLabel>
          <select
            id="budget"
            {...register("budget")}
            className="field-line appearance-none cursor-pointer"
          >
            <option value="" className="bg-background text-foreground">
              Select
            </option>
            {["< 50k", "50k - 200k", "200k - 1M", "1M+"].map((o) => (
              <option key={o} value={o} className="bg-background text-foreground">
                {o}
              </option>
            ))}
          </select>
          <FieldError message={errors.budget?.message} />
        </div>

        <div className="col-span-12">
          <FieldLabel htmlFor="decisionMaker">Decision-maker role</FieldLabel>
          <input
            id="decisionMaker"
            type="text"
            {...register("decisionMaker")}
            className="field-line"
            placeholder="CTO, Founder, COO, Head of Innovation…"
          />
        </div>

        <div className="col-span-12">
          <p className="block font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-3">
            Interest area
            <span className="text-muted-foreground/60"> (select all that apply)</span>
          </p>
          <div className="flex flex-wrap gap-3">
            {interestOptions.map((opt) => {
              const active = interests.includes(opt);
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleInterest(opt)}
                  aria-pressed={active}
                  className={`border px-5 py-2.5 font-mono text-[10px] tracking-[0.22em] uppercase transition-colors duration-300 ${
                    active
                      ? "border-gold text-gold"
                      : "border-foreground/30 text-muted-foreground hover:border-foreground"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {submitError && <p className="text-sm text-red-500">{submitError}</p>}

      <div className="flex items-center justify-between pt-4">
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
          * Required fields
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-block border border-foreground px-8 py-4 font-mono text-[11px] tracking-[0.28em] uppercase hover:bg-foreground hover:text-background transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Assessing..." : "Submit · Intelligence Assessment →"}
        </button>
      </div>
    </form>
  );
}

function FieldLabel({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-3"
    >
      {children}
      {required && <span className="text-gold"> *</span>}
    </label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-2 text-sm text-red-500">{message}</p>;
}
