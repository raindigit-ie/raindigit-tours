# RainDigit 360 tour packages

Public preview repository for immutable, self-contained tour exports. It is not
the source of the Studio editor or the RainDigit website.

The `tours/<slug>/<packageVersion>/` directories contain complete static
packages. Each `release-manifest.json` records the file inventory, SHA-256
digests, Studio/runtime/format versions, and tour identity. Do not edit a
versioned directory in place; a changed export gets a new package version.

Current packages were built by RainDigit 360 Tour Studio 0.3.6 at commit
`24a17c7c95e4a0f4d9234aebfbae2fdcb95b1e78`:

| Tour | Package version | State |
| --- | --- | --- |
| Killarney 360 property tour demo | `bounded-1bbdc11e39b6` | Candidate; no physical iPhone acceptance |
| Killarney home 360 tour | `bounded-44383d674c4f` | Candidate; no physical iPhone acceptance |
| Killarney town-centre 360 tour | `bounded-d7b665651751` | Candidate; no physical iPhone acceptance |

These candidates are **not** the selected production tours. The current website
`main` release ledger still selects 0.2.8. The owner authorized a public GitHub
Pages delivery pilot on 2026-10-11; it does not promote these candidates on the
website or certify physical iPhone acceptance.

## GitHub Pages pilot

Preview hub: https://raindigit-ie.github.io/raindigit-tours/

Pages serves `main` from the repository root with `.nojekyll`. Existing package
files are unchanged. Use the complete package URL under
`/raindigit-tours/tours/<slug>/<packageVersion>/index.html` for an iframe;
all runtime and media references are package-local relative paths.

The exported package directory is published under `tours/` so the existing
ready-message protocol reports the correct tour slug. Moving the directory
does not modify any package bytes or manifest identity.

Each `embed-*.html` page displays the same exact package in an iframe. For a
customer website, grant `allowfullscreen` on the iframe.
The preview host also handles the viewer's mobile fullscreen fallback messages.
Cross-origin browser verification is separate from the same-origin preview.

### Verification and website integration

On 2026-10-11 all 299 deployed package files (90,733,821 bytes) matched their
original SHA-256 hashes. GitHub Pages returned CORS `*`, byte ranges (`206`) and
frameable HTML. Chromium desktop/mobile and mobile WebKit loaded all three
packages in an independent-origin iframe and completed one real hotspot
transition per tour. This is a hosting smoke check, not full release acceptance.

The current RainDigit site facade extracts a tour slug only when the URL starts
with `/tours/`. GitHub project Pages adds `/raindigit-tours/`, so that existing
facade rejects these ready messages. Integration therefore needs a prefix-aware
slug parser and deliberate release-ledger/origin selection. The pilot does not
change the website consumer or its selected production packages.

GitHub controls response headers: observed cache policy is `max-age=600`,
and `Access-Control-Expose-Headers` is absent. The current self-contained viewer
loads its own media from the same origin; applications needing custom cache,
exposed response headers, redirects or selectors need a different delivery plan.
Package telemetry is restricted to the declared production origin and is not
enabled on this GitHub preview origin.

Hosting scope: public static demonstration exports, no accounts, transactions
or SaaS application. GitHub Free supports Pages in public repositories. No
paid plan, Git LFS, Actions workflow or Cloudflare resource is added. GitHub
Pages limits include a 1 GB published-site maximum and a soft 100 GB/month
bandwidth limit; excess usage can cause rate limiting or a request to migrate.
It is not an unlimited media CDN. See
[GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits).

Any future package change must use a new immutable package directory and pass
inventory, standalone/embed, target-browser and applicable acceptance checks.
Cloudflare remains study-only unless separately authorized.

Original panoramas, Studio workspaces, QA captures, credentials, and local
build caches do not belong here.
