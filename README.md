# TapBat website

A standalone, three-page website for TapBat, ready for GitHub Pages:

- **Home:** real game screenshots, controls, and a beta invitation.
- **Privacy:** local storage, Android backup, Google ads and consent, optional Play Games rankings, website hosting, and support.
- **Beta:** join the Google Group, opt into the closed test, then install through Google Play.

The design follows the simple structure of BarTallyWebsite with TapBat’s own moonlit visual direction. It describes the current `feature/low-poly-3d` Android checkout, including tap-to-flap and hold-to-glide controls. It does not modify or depend on either Android repository.

All pages are generated as ordinary HTML and CSS. There is no browser JavaScript, backend, analytics, cookie storage, or signup form. Navigation, policy anchors, and the beta FAQ work without JavaScript. The screenshots, icon, and font are local assets.

## Preview locally

Requires Node.js 22 or newer. There are no npm dependencies to install.

```powershell
npm run dev
```

Open [the local preview](http://127.0.0.1:4173/TapBatWebsite/). After changing source or configuration, run `npm run build` and refresh the browser. `npm run preview` serves an existing build. Set the `PORT` environment variable if 4173 is already in use.

The included `dist/` folder is a ready-built copy. It is ignored by Git because GitHub Actions builds it from source.

## Publish to GitHub Pages

1. Create a GitHub repository named **TapBatWebsite** in the **billcorps** account, and add the contents of this project at the repository root. Include the hidden `.github` folder. Use `main` as the default branch.
2. In the repository, open **Settings → Pages → Build and deployment → Source**, and select **GitHub Actions**.
3. Push to `main`, or run the **Website** workflow from the **Actions** tab. It builds, checks links and configuration, uploads only `dist/`, and deploys to Pages.

Expected URLs for that repository:

- Home: `https://billcorps.github.io/TapBatWebsite/`
- Privacy policy: `https://billcorps.github.io/TapBatWebsite/privacy/`
- Beta signup: `https://billcorps.github.io/TapBatWebsite/beta/`

The workflow gets the actual site URL from GitHub Pages, so links and metadata also work with another repository name or a configured custom domain. Update `siteUrl` in `site.config.json` to match for local previews. If your default branch is not `main`, update `push.branches` in `.github/workflows/website.yml` too. Pull requests build and validate without deploying.

Published September 29, 2026 to [billcorps/TapBatWebsite](https://github.com/billcorps/TapBatWebsite). The [live site](https://billcorps.github.io/TapBatWebsite/), privacy page, and beta page all returned HTTP 200 after the successful GitHub Actions deployment.

Workflow reference: [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Public details

Edit `site.config.json` to update these values, then rebuild:

| Setting             | Current value                                                     |
| ------------------- | ----------------------------------------------------------------- |
| Developer           | William Haggerty                                                  |
| Support and privacy | bartallysupport@gmail.com                                         |
| Tester group        | https://groups.google.com/g/tapbat                                |
| Closed-test opt-in  | https://play.google.com/apps/testing/com.billcorp.tapbat          |
| Install listing     | https://play.google.com/store/apps/details?id=com.billcorp.tapbat |

The user supplied the Google Group and confirmed that the BarTally support mailbox is also TapBat’s support contact for now. The Play URLs use the Android app’s package ID, `com.billcorp.tapbat`. Their visibility and enrollment depend on Play Console setup and the signed-in account. Access was not verified with an eligible tester account, and no account was enrolled during testing. Before sharing, make sure this Google Group is assigned to the closed test and walk through the three steps with a tester account. The page does not claim that clicking a button enrolls a visitor.

Do not change the test link to a public-release claim merely because the website is published. Website publication does not publish the Android app.

## Content and assets

- `src/pages.mjs`: home, beta, and privacy content.
- `src/styles.css`: shared responsive design.
- `site.config.json`: public contact, site address, and enrollment links.
- `scripts/build.mjs`: shared layout, static routes, metadata, sitemap, robots file, and 404 page.
- `scripts/check.mjs`: local route, asset, and anchor checks.
- `scripts/check-publish.mjs`: contact and beta URL configuration validation; it does not verify enrollment eligibility.
- `scripts/serve.mjs`: local preview server.
- `.github/workflows/website.yml`: GitHub Pages build and deployment.

Image sources from the supplied TapBat repository:

- `public/assets/tapbat-home.png` ← `docs/screenshots/native-ads/home-no-ad.png`.
- `public/assets/tapbat-gameplay.png` ← `docs/screenshots/glide-retry/glide.png`.
- `public/assets/favicon.svg` uses the existing Android `ic_bat.xml` geometry and icon colors.

Screenshots are actual captures and contain no sample ads. The home capture uses the earlier “LET’S FLY” button text. DM Sans is bundled from the supplied BarTallyWebsite dependencies; its license is included at `public/assets/DM-Sans-LICENSE.txt`. No new social-preview image was generated.

## Privacy content maintenance

The policy is based on the inspected app code and its included Google SDKs. It covers local best score, haptic setting, scenery seed, pending leaderboard submissions, Android backup, advertising, consent controls, and optional Play Games services. It does not assert that the app collects no data or that uninstalling deletes third-party data.

The policy also describes support email handling and beta membership. Keep it aligned with your actual support retention practices, Google service settings, shipped release, and Play Console declarations. The owner confirmed that the intended audience is ages 13 and older; the policy reflects that. This is separate from the content rating.

References used for third-party disclosures:

- [Google advertising SDK data disclosure](https://developers.google.com/admob/android/next-gen/privacy/play-data-disclosure)
- [Google Privacy Policy](https://policies.google.com/privacy)
- [Google Play testing setup](https://support.google.com/googleplay/android-developer/answer/9845334)
- [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)

## Checks

```powershell
npm run build
npm run check:publish
```

`build` checks all three routes, their internal links, image and font references, and anchor targets. It requires no network access. External tester eligibility remains a Google-side check.
