# Dailys board

Single-page **React** app to support **remote daily standups**: sprint timeline, **members** with draggable avatars and swimlanes (e.g. Development / Testing), and **follow-up actions**. State uses React **Context** providers and **`localStorage`** for persistence.

## Stack

- **React 17** (Create React App), **Tailwind CSS**
- **react-draggable**, **rc-progress**, **react-icons**, **react-toastify** (optional reminders)

## Features

- **Sprint information** — sprint number, start/end dates, timeline with progress and stopwatch-style UI
- **Members** — roster with draggable member cards and labeled work areas
- **Actions** — list and edit action items for the team
- Client-side persistence via `localStorage` (see `src/components/contexts/services/externalData.js`)

## Scripts

| Command        | Description        |
| -------------- | ------------------ |
| `npm start`    | Dev server         |
| `npm run build`| Production build   |
| `npm test`     | Jest (via CRA)     |

End-to-end tests live under `cypress/e2e/` (Cypress **10**).

## Live demo

Deployed on Vercel: [dailys-board.vercel.app](https://dailys-board.vercel.app/)
