# RainDigit 360 tour packages

Public preview repository for immutable, self-contained tour exports. It is not
the source of the Studio editor or the RainDigit website.

The `packages/<slug>/<packageVersion>/` directories contain complete static
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
`/raindigit-tours/packages/<slug>/<packageVersion>/index.html` for an iframe;
all runtime and media references are package-local relative paths.

Each `embed-*.html` page displays the same exact package in an iframe. For a
customer website, grant `allow="fullscreen"` and `allowfullscreen` on the iframe.
Cross-origin browser verification is separate from the same-origin preview.

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
