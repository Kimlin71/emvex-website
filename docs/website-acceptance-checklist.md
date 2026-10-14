# Emvex website acceptance checklist

Use this checklist to assess the business website against [issue #1](https://github.com/eqitinnovations/emvex-website/issues/1), which records the available project-brief requirements. The original assignment brief is not present in the repository, so the issue's requirements summary is the traceability source for this review.

For each question, select **Yes** or **No** based on the cited evidence. Select **Unverified** only when the answer cannot be established from the repository; complete the external check described in the evidence column before treating it as passed. A missing or broken artifact is a **No** when the repository itself can establish the failure, not Unverified.

## Business definition

| ID | Yes/No question | Answer | Traceability and evidence |
| --- | --- | --- | --- |
| B1 | Does the website clearly identify the business as Emvex? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 3](https://github.com/eqitinnovations/emvex-website/issues/1); [page title and brand](../index.html) |
| B2 | Does the website explain what kind of business Emvex is? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 3](https://github.com/eqitinnovations/emvex-website/issues/1); [About section](../index.html#about) |
| B3 | Does the website identify its intended customers? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 3](https://github.com/eqitinnovations/emvex-website/issues/1); [About section](../index.html#about) |
| B4 | Does the website identify PIS as software developed by Emvex? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 3](https://github.com/eqitinnovations/emvex-website/issues/1); [hero and About sections](../index.html#home) and [About section](../index.html#about) |
| B5 | Does the website explain the main purpose of PIS? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 3](https://github.com/eqitinnovations/emvex-website/issues/1); [hero section](../index.html#home) |

## Planning and visual design

| ID | Yes/No question | Answer | Traceability and evidence |
| --- | --- | --- | --- |
| P1 | Is there a sitemap or page structure available for review? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 4](https://github.com/eqitinnovations/emvex-website/issues/1); inspect project-planning deliverables. No sitemap or planning document is present in the repository. |
| P2 | Is a main layout sketch available for review? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 4](https://github.com/eqitinnovations/emvex-website/issues/1); inspect project-planning deliverables. No layout sketch is present in the repository. |
| P3 | Are color and typography choices consistent across the website? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, stories 4 and 15](https://github.com/eqitinnovations/emvex-website/issues/1); [design tokens and typography](../css/styles.css) |
| P4 | Is the website usable for its intended visitors? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 15](https://github.com/eqitinnovations/emvex-website/issues/1); inspect the rendered website with representative visitors or usability checks. |
| P5 | Does the visual design make the content hierarchy clear? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 15](https://github.com/eqitinnovations/emvex-website/issues/1); inspect the rendered website at desktop, tablet, and mobile sizes. |

## Required website content and navigation

| ID | Yes/No question | Answer | Traceability and evidence |
| --- | --- | --- | --- |
| S1 | Is there a Home section? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 5](https://github.com/eqitinnovations/emvex-website/issues/1); [Home section](../index.html#home) |
| S2 | Is there an About section? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 5](https://github.com/eqitinnovations/emvex-website/issues/1); [About section](../index.html#about) |
| S3 | Is there a Services or Products section describing the offering? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 5](https://github.com/eqitinnovations/emvex-website/issues/1); [PIS features section](../index.html#services) |
| S4 | Is there a Gallery or other featured-content section? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 5](https://github.com/eqitinnovations/emvex-website/issues/1); [gallery section](../index.html#gallery) |
| S5 | Is there a Contact section with a usable way to contact Emvex? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 5](https://github.com/eqitinnovations/emvex-website/issues/1); [contact section](../index.html#contact) |
| S6 | Does the site provide working navigation to its required sections? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 5](https://github.com/eqitinnovations/emvex-website/issues/1); [navigation markup](../index.html#site-nav) and [navigation behavior](../js/main.js) |
| S7 | Is a footer present with relevant business information? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 5](https://github.com/eqitinnovations/emvex-website/issues/1); [footer](../index.html) |

## HTML, CSS, and interaction

| ID | Yes/No question | Answer | Traceability and evidence |
| --- | --- | --- | --- |
| T1 | Is the page declared as an HTML5 document? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 6](https://github.com/eqitinnovations/emvex-website/issues/1); [document declaration](../index.html) |
| T2 | Does the page use semantic HTML structure? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 6](https://github.com/eqitinnovations/emvex-website/issues/1); [document structure](../index.html) |
| T3 | Are styles provided through an external CSS file? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 6](https://github.com/eqitinnovations/emvex-website/issues/1); [stylesheet link](../index.html) and [stylesheet](../css/styles.css) |
| T4 | Does the layout use Flexbox or CSS Grid where appropriate? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 6](https://github.com/eqitinnovations/emvex-website/issues/1); [layout rules](../css/styles.css) |
| T5 | Is spacing applied consistently? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 6](https://github.com/eqitinnovations/emvex-website/issues/1); [spacing rules](../css/styles.css) |
| T6 | Is typography applied consistently? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 6](https://github.com/eqitinnovations/emvex-website/issues/1); [typography rules](../css/styles.css) |
| T7 | Does the website include a meaningful JavaScript interaction? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 8](https://github.com/eqitinnovations/emvex-website/issues/1); [navigation and contact-form behavior](../js/main.js). See the ambiguity below before treating this as a mandatory criterion. |

## Responsive design and accessibility

| ID | Yes/No question | Answer | Traceability and evidence |
| --- | --- | --- | --- |
| R1 | Does the website work at desktop viewport sizes? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, stories 7 and 15](https://github.com/eqitinnovations/emvex-website/issues/1); inspect the rendered site at a representative desktop size. |
| R2 | Does the website work at tablet viewport sizes? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, stories 7 and 15](https://github.com/eqitinnovations/emvex-website/issues/1); inspect the rendered site at a representative tablet size. |
| R3 | Does the website work at mobile viewport sizes? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, stories 7 and 15](https://github.com/eqitinnovations/emvex-website/issues/1); inspect the rendered site at a representative mobile size. |
| R4 | Does the implementation use responsive techniques to adapt its layout? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, stories 7 and 15](https://github.com/eqitinnovations/emvex-website/issues/1); [responsive layout rules](../css/styles.css) |
| R5 | Can visitors navigate the website using a keyboard? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 15](https://github.com/eqitinnovations/emvex-website/issues/1); [interactive elements](../index.html), [navigation behavior](../js/main.js), and [focus styles](../css/styles.css). Verify in the rendered website. |
| R6 | Are form controls and interactive elements clearly labeled? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 15](https://github.com/eqitinnovations/emvex-website/issues/1); [interactive elements](../index.html). Verify labels and status/error announcements with assistive technology. |

## Links, images, and media

| ID | Yes/No question | Answer | Traceability and evidence |
| --- | --- | --- | --- |
| M1 | Do all website links lead to their intended destinations? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 14](https://github.com/eqitinnovations/emvex-website/issues/1); inspect and activate all links in the rendered site. |
| M2 | Do all website buttons perform their intended actions? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 14](https://github.com/eqitinnovations/emvex-website/issues/1); activate all buttons in the rendered site, including the mobile navigation and contact form. |
| M3 | Do all referenced images and logos load? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 14](https://github.com/eqitinnovations/emvex-website/issues/1); [image and logo references](../index.html) and [logo assets](../assets/logo/emvex-logo.svg). Verify image loading in the rendered site. |
| M4 | Do images have appropriate alternative text? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 14](https://github.com/eqitinnovations/emvex-website/issues/1); [image and logo references](../index.html). Verify alternatives in the rendered site. |
| M5 | Does each gallery video load and play? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, stories 5 and 14](https://github.com/eqitinnovations/emvex-website/issues/1); [video references](../index.html#gallery). **Observed repository gap:** the page references three `.mp4` files, but those video files are absent from the checked repository assets; do not mark video playback as passed until verified and fixed. |
| M6 | Are captions available for each gallery video? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, stories 5 and 14](https://github.com/eqitinnovations/emvex-website/issues/1); [real-time prediction captions](../assets/videos/real-time-prediction.vtt), [app integration captions](../assets/videos/app-integration.vtt), and [privacy-first captions](../assets/videos/privacy-first.vtt). Verify captions with each video in the rendered site. |

## GitHub repository and submission deliverables

| ID | Yes/No question | Answer | Traceability and evidence |
| --- | --- | --- | --- |
| G1 | Is the project repository publicly visible to the intended reviewers? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, stories 9 and 11](https://github.com/eqitinnovations/emvex-website/issues/1); verify repository visibility in GitHub while signed out or with a reviewer account. |
| G2 | Are project files organized so a reviewer can find the website source and assets? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 9](https://github.com/eqitinnovations/emvex-website/issues/1); inspect the repository structure and linked evidence above. |
| G3 | Is there a clear README that explains the project? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 9](https://github.com/eqitinnovations/emvex-website/issues/1); inspect the repository root. No README is present in the checked repository. |
| G4 | Is the repository URL recorded and ready to submit? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 11](https://github.com/eqitinnovations/emvex-website/issues/1); record the repository URL as a submission deliverable and verify reviewer access. |
| G5 | Is the live website URL recorded and ready to submit? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 11](https://github.com/eqitinnovations/emvex-website/issues/1); record the live URL as a submission deliverable and verify reviewer access. |

## Deployment

| ID | Yes/No question | Answer | Traceability and evidence |
| --- | --- | --- | --- |
| D1 | Has the website been deployed to a publicly accessible location? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, story 10](https://github.com/eqitinnovations/emvex-website/issues/1); deployment status requires external verification. |
| D2 | Does the submitted live URL open the intended website and allow its links, interactions, images, and media to work? | [ ] Yes [ ] No [ ] Unverified | [Issue #1, stories 10, 11, and 14](https://github.com/eqitinnovations/emvex-website/issues/1); open the live URL and test it in a browser, including on mobile. |

## Unresolved interpretations

- **JavaScript requirement:** issue #1 says JavaScript appears under both “Mandatory Requirements” and “Strongly Recommended.” Keep T7 visible for assessment, but do not resolve whether it is mandatory without clarification from the brief's owner.
- **Business choice:** the brief allows a real or fictional business while also giving suggested choices. Do not infer that Emvex must match one of those examples; confirm with the brief's owner if that affects assessment.
- **Original brief access:** the original assignment brief is not in the repository. Issue #1 supplies the requirements summary used here; compare against the original brief if available to ensure no requirement was omitted.

## Review record

- Reviewer: ____________________
- Date: ____________________
- Repository URL: ____________________
- Live website URL: ____________________
- Unverified items and follow-up: ____________________
