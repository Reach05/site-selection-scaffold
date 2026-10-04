# Copilot instructions for site-selection-scaffold

Purpose: give AI coding agents the minimal, concrete knowledge to make safe, useful edits in this repo.

- **Big picture:** This is a small Next.js scaffold that demonstrates an ArcGIS/ESRI map overlay using `@arcgis/map-components-react`. The app is server-rendered by Next.js with client-only map components loaded dynamically on the `pages/gis.js` page.

- **Key files to check first:**
  - [README.md](../README.md) — project overview and deploy notes
  - [package.json](../package.json) — `dev`, `build`, `start` scripts
  - [next.config.js](../next.config.js) — Next.js configuration
  - [pages/index.js](../pages/index.js) and [pages/gis.js](../pages/gis.js) — examples of routing and ArcGIS integration
  - [.github/workflows/ci.yml](workflows/ci.yml) — CI runs `npm install` and `npm run build`

- **Architecture & patterns (what to preserve):**
  - `pages/gis.js` uses client-only components: it declares `"use client"`, dynamically imports `ArcgisMap` with `ssr: false`, and calls `defineCustomElements(window)` via a loader import inside `useEffect`. Any change touching the ArcGIS component must preserve the client-only dynamic-import pattern to avoid SSR errors.
  - Environment-driven configuration: `NEXT_PUBLIC_ARCGIS_API_KEY` (if needed) lives in `.env.local` for local dev. Public demo uses a public `itemId` so the key is optional for the scaffold.

- **Developer workflows (concrete commands):**
  - Install: `npm install`
  - Local dev: `npm run dev` (app at http://localhost:3000)
  - Build: `npm run build`
  - Start (production): `npm run start`
  - CI: GitHub Actions runs Node 16.x and executes `npm install` then `npm run build` (see [.github/workflows/ci.yml](workflows/ci.yml)).

- **Patterns for edits and PRs:**
  - When adding packages, update `package.json` and ensure `npm run build` succeeds locally before opening a PR.
  - For any changes that touch `pages/gis.js` or ArcGIS imports, test locally with and without `NEXT_PUBLIC_ARCGIS_API_KEY` to ensure public items render fine.
  - Prefer dynamic imports with `{ ssr: false }` for any web components or browser-only libs (example: `dynamic(() => import(...), { ssr: false })`).

- **Integration points & deployment notes:**
  - ArcGIS integration: uses `@arcgis/map-components-react` and the loader at `@arcgis/map-components/dist/loader` — changes here affect runtime map rendering in browsers only.
  - Deployment targets: Vercel (preferred for Next.js) or Google Cloud Run. Ensure environment variables set in the target (e.g., `NEXT_PUBLIC_ARCGIS_API_KEY`).

- **When to ask a human / blockers:**
  - Adding server-side map rendering or attempting to import ArcGIS modules during SSR — stop and ask; this repo intentionally avoids SSR for map components.
  - Changes that alter CI (node version, build matrix, or build steps) — open a PR and request a human review of CI impact.

If any section is unclear or you want the instructions to include additional examples (e.g., a code snippet to add a new page or a test harness), tell me which area to expand.

--

### Notes: Enable Claude Haiku 4.5 for all clients

If you need to document enabling the Claude Haiku 4.5 model for all clients, include this repo-level note (this repository does not perform the enablement itself):

- **What to document here:** that model enablement is an organizational/platform action (not a code change). Describe who to contact (platform admin) and where to check/flip the feature flag or account setting. For example:

  - Contact: Platform AI admin or Cloud account owner
  - Console/Panel: Manage models / Feature flags in your AI provider's admin console
  - Verification: After enablement, run a small client request against `Haiku-4.5` to confirm access.

- **Suggested README snippet to include in client onboarding:**

```
To use Claude Haiku 4.5, ask your org admin to enable the model for your account or project. Once enabled, set the model name in client config (example):

MODEL_NAME=claude-haiku-4.5

# Example: make a quick verification request (replace with your SDK/CLI):
# client.request({ model: process.env.MODEL_NAME, input: 'ping' })
```

Add this note here to keep developers from looking for a repository setting — the enablement is external to this codebase.

### Example snippet: add a simple Next page and use a client-only import

Add a file `pages/new-map.js` with the following pattern to keep ArcGIS components client-only:

```
"use client";
import dynamic from 'next/dynamic';
const ArcgisMap = dynamic(() => import('@arcgis/map-components-react').then(m=>m.ArcgisMap), { ssr: false });

export default function NewMap() {
  return <ArcgisMap itemId="f2e9b762544945f390ca4ac3671cfa72" style={{ height: '400px' }} />;
}
```

This mirrors `pages/gis.js` and preserves the SSR-safe dynamic import pattern.