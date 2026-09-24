# RainDigit 360 tour packages

Private staging repository for immutable, self-contained tour exports. It is not
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

These candidates are **not** the selected production tours. Production still
references the older 0.2.8 package set in the website release ledger. This
repository has no GitHub Pages deployment and must not be used as a live media
origin until browser delivery, legal/publication, physical-device, and quota
gates have passed for the exact package bytes.

Original panoramas, Studio workspaces, QA captures, credentials, and local
build caches do not belong here.
