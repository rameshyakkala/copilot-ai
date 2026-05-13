---
applyTo: "**"
---
# GitHub Copilot Workspace Instructions

## Purpose
This file is the workspace-level entry point for Copilot agent behavior. It should stay short, point to the existing project-specific instruction files, and preserve the repository conventions already defined under `.github/instructions/`.

## Workspace layout
The Octofit Tracker app lives under `octofit-tracker/`:
- `octofit-tracker/backend/` - Django backend project
- `octofit-tracker/frontend/` - React frontend app
- `docs/` - supporting documentation and app assets

## Important conventions
- Never change directories in agent mode. Use absolute or workspace-relative paths when running commands.
- Backend work should use `octofit-tracker/backend/` paths and the existing Python virtual environment if present.
- Frontend work should use `octofit-tracker/frontend/` paths.
- Only forward the ports documented for this app: `8000` (backend), `3000` (frontend), and `27017` (MongoDB). Do not propose new public ports.
- For database setup and test data, prefer Django ORM operations over direct MongoDB scripting.

## Primary instructions references
Use these files as the authoritative workspace rules for each area:
- `.github/instructions/octofit_tracker_setup_project.instructions.md`
- `.github/instructions/octofit_tracker_django_backend.instructions.md`
- `.github/instructions/octofit_tracker_react_frontend.instructions.md`

## Key files to inspect first
- Backend Django project: `octofit-tracker/backend/octofit_tracker/`
- Frontend React source: `octofit-tracker/frontend/src/`
- Backend requirements: `octofit-tracker/backend/requirements.txt`
- Frontend README: `octofit-tracker/frontend/README.md`

## Existing exercise and prompt artifacts
This repository includes task-oriented prompt files and step definitions under:
- `.github/prompts/`
- `.github/steps/`

Use these as guidance for how the repository expects tasks to be structured.

## Documentation links
- Root project README: `README.md`
- App story and design notes: `docs/octofit_story.md`
- React app instructions: `octofit-tracker/frontend/README.md`

## Usage guidance for Copilot agents
- Prefer existing instruction files over adding new rules.
- When the repo contains multiple relevant instruction sources, summarize them and link to the source files.
- Keep answers short and actionable while preserving the workspace conventions.
