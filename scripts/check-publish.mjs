import { config, betaReady } from "./config.mjs";
if (!config.developerName || !config.supportEmail || !betaReady)
  throw new Error(
    "Fill in developerName, supportEmail, and all three beta URLs in site.config.json before publishing.",
  );
if (new URL(config.beta.groupUrl).hostname !== "groups.google.com")
  throw new Error("Use the TapBat Google Group URL.");
if (
  new URL(config.beta.testUrl).hostname !== "play.google.com" ||
  new URL(config.beta.installUrl).hostname !== "play.google.com"
)
  throw new Error("Use Google Play links for testing and installation.");
console.log(
  "Public contact and enrollment configuration are present. Test access still depends on Play Console and Google Group settings.",
);
