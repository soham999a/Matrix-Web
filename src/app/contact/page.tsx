import { PageShell, Section, Eyebrow } from "@/components/matrix/Chrome";
import { pageSeo } from "@/components/../lib/seo";
import { SITE } from "@/lib/seo";
import { ContactForm } from "@/components/matrix/ContactForm";
import { JsonLd } from "@/components/matrix/JsonLd";

export const metadata = pageSeo({
  path: "/contact",
  title: "Contact — Begin a Correspondence",
  description:
    "Write to the Matrix intelligence architecture studio. Strategic counsel, research collaboration, AI consulting, and product partnerships — we take on a small number of engagements each year.",
  keywords: [
    "contact Matrix",
    "Matrix studio contact",
    "AI consulting contact",
    "intelligence architecture contact",
    "strategic counsel India",
    "research collaboration",
  ],
  og: {
    title: "Contact Matrix",
    description: "A narrow door, on purpose.",
  },
});

export default function Contact() {
  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Matrix",
          description:
            "Write to the Matrix intelligence architecture studio. Strategic counsel, research collaboration, and product partnerships.",
          url: `${SITE.url}/contact`,
          mainEntity: { "@id": `${SITE.url}/#organization` },
        }}
      />
      <Section className="pt-32 pb-12 grain">
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow index="Correspondence">Contact</Eyebrow>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.95] tracking-tight">
              Begin a
              <br />
              <span className="italic text-muted-foreground">correspondence.</span>
            </h1>
            <p className="mt-10 max-w-2xl text-lg text-foreground/80 leading-relaxed">
              We take on a small number of engagements each year. Write to us with the shape of your
              challenge, and we will respond within a few working days.
            </p>
          </div>
        </div>
      </Section>

      <Section className="py-16">
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow>Studio</Eyebrow>
            <div className="mt-8 space-y-6">
              <div>
                <p className="eyebrow !text-muted-foreground">Location</p>
                <p className="font-display text-2xl tracking-tight mt-3">Kolkata, India</p>
              </div>
              <div>
                <p className="eyebrow !text-muted-foreground">Telephone</p>
                <a
                  href="tel:+919875663417"
                  className="block font-display text-2xl tracking-tight mt-3 hover:text-gold transition-colors"
                >
                  +91 98756 63417
                </a>
              </div>
              <div>
                <p className="eyebrow !text-muted-foreground">Correspondence</p>
                <a
                  href="mailto:system@matrka.net"
                  className="block font-display text-2xl tracking-tight mt-3 hover:text-gold transition-colors"
                >
                  system@matrka.net
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 border-t border-border pt-10 md:pt-0 md:border-t-0 md:pl-10">
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section className="py-24 border-t border-border">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
          <p className="col-span-12 md:col-span-7 font-display text-3xl md:text-4xl leading-tight">
            The door is narrow on purpose.{" "}
            <span className="italic text-muted-foreground">We prefer depth over volume.</span>
          </p>
        </div>
      </Section>
    </PageShell>
  );
}
