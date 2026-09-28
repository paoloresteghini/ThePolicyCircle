# The Policy Circle

**NEVER TOUCH PRODUCTION. All agent operations are staging-only: policycirclstg. See AGENTS.md.**

Private code repository for staging-only development. No deployment automation or production connection is configured.

## Working approach

Keep custom code and scripts in Git. Use SSH/WP-CLI for the allowlisted staging environment, with browser checks where necessary. Make Elementor/database edits on staging and preserve them through staging backups and exports, not Git. Upload only reviewed custom-code changes to staging.

## Local project context

The following files exist in the original workspace and are intentionally excluded from Git. They will not be present in a fresh clone. Project context was consolidated on 2026-09-28.

| File | Purpose |
|---|---|
| [MEMORY.md](MEMORY.md) | Current engagement, people, scope, status and next steps |
| [TASKS.md](TASKS.md) | Signed-agreement deliverables, dependencies and acceptance evidence |
| [Decisions](memory/decisions.md) | Scope changes and superseded assumptions |
| [Email chronology](memory/email-chronology.md) | Key correspondence and direct Gmail evidence |
| [Granola call context](memory/call-context.md) | Fresh September 8 notes and reconciliation with later scope |
| [Historical findings](memory/historical-findings.md) | Earlier strategy and technical observations requiring revalidation |
| [Source register](memory/sources.md) | Provenance, coverage and known gaps |
| [Signed agreement](sources/agreement/signed-agreement.pdf) | Unchanged copy of the user-supplied signed PDF |
| [Agreement text](sources/agreement/signed-agreement.txt) | Searchable five-page extraction |
| [Email archive](sources/emails/README.md) | 78 messages across 22 threads, with sanitized text and Gmail links |
| [Original call transcript](sources/transcripts/2026-09-08-homepage-analytics-call.md) | September 8 discussion, superseded where later scope changed |
| [Historical proposal](sources/historical/policycircle.html) | Archived 90-day proposal, not the contracted scope |

Original files remain in place. The signed PDF was copied unchanged and checksum-verified. Email attachments other than locally available documents were not downloaded. This import creates project context and tasks; it does not implement the website work.

Private client sources, detailed memory, tasks, credentials and database exports are excluded from Git. Repository: `git@github.com:paoloresteghini/ThePolicyCircle.git`. Production deployment is forbidden by AGENTS.md.

