/**
 * MATRIX · Intelligence Assessment intake
 *
 * Paste this file into your Google Sheet's Apps Script editor
 * (Extensions → Apps Script), then Deploy → New deployment →
 * Web app → Execute as: Me · Who has access: Anyone.
 * Copy the Web app URL into the site's .env.local:
 *
 *   GOOGLE_SHEETS_INTAKE_URL=https://script.google.com/macros/s/XXXX/exec
 *
 * The script appends every submission to the "Intake" sheet and emails
 * matrkasystem@gmail.com. Both actions are free (no quota charge for the
 * sheet; Gmail's consumer quota allows ~500 mail messages/day).
 */

const SHEET_NAME = "Intake";
const NOTIFY_EMAIL = "matrkasystem@gmail.com";

const HEADERS = [
  "Timestamp",
  "Industry",
  "Company Name",
  "Company Size",
  "Geography",
  "Current Systems / Tech Stack",
  "Biggest Operational Problem",
  "Desired AI Use Case",
  "Data Availability",
  "Decision Timeline",
  "Project Scale / Budget",
  "Decision-Maker Role",
  "Interest Area",
  "Readiness Score",
  "Recommended Intervention",
  "Implementation Path",
];

function doGet() {
  return ContentService.createTextOutput("MATRIX Intake endpoint is live.")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var f = data.fields;
    var a = data.assessment;

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(HEADERS);
    }

    var row = [
      new Date(),
      f.industry,
      f.companyName,
      f.companySize,
      f.geography,
      f.stack,
      f.problem,
      f.useCase,
      f.dataAvailability,
      f.timeline,
      f.budget,
      f.decisionMaker,
      f.interests,
      a.readinessScore + "/100",
      a.intervention,
      a.path,
    ];
    sheet.appendRow(row);

    var body = [
      "MATRIX · Intelligence Assessment",
      "",
      "Industry: " + f.industry,
      "Company: " + f.companyName,
      "Company size: " + f.companySize,
      "Geography: " + f.geography,
      "Current systems / tech stack: " + f.stack,
      "",
      "Biggest operational problem:",
      f.problem,
      "",
      "Desired AI use case: " + f.useCase,
      "Data availability: " + f.dataAvailability,
      "Decision timeline: " + f.timeline,
      "Project scale / budget: " + f.budget,
      "Decision-maker role: " + f.decisionMaker,
      "Interest area: " + f.interests,
      "",
      "Intelligence Readiness Score: " + a.readinessScore + "/100",
      "Recommended Intervention: " + a.intervention,
      "Implementation Path: " + a.path,
      "",
      "Logged in: " + ss.getName(),
    ].join("\n");

    GmailApp.sendEmail(
      NOTIFY_EMAIL,
      "[MATRIX Intake] " + f.companyName + " · " + f.industry,
      body,
    );

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}