# LongRun HQ — Frontend Task

Implementation of two onboarding screens from the provided Figma design, built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **React 19** with **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **React Router v7** for client-side routing
- **Vite** as the build tool

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd <project-folder>

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`.

## Project Structure

```
src/
├── assets/
│   └── info.svg
├── components/
│   └── Stepper.tsx       # Reusable progress bar component
├── pages/
│   ├── QuizIntroPage.tsx # Screen 1 — "Before we begin..."
│   └── NinthStepPage.tsx # Screen 2 — "You're halfway through!"
├── App.tsx               # Route definitions
├── main.tsx              # App entry point
└── index.css             # Tailwind imports + Poppins font
```

## Pages

| Route | Page | Step |
|---|---|---|
| `/` | QuizIntroPage | 0 / 13 |
| `/task2` | NinthStepPage | 9 / 13 |

## Stepper Component

The `Stepper` component is reusable and accepts a `step` prop. It calculates the progress percentage based on a total of 13 steps and renders a progress bar at the top of the screen.

```tsx
<Stepper step={9} /> // renders at ~69% width
```

## Responsive Design Decisions

The Figma file provided desktop designs. The following decisions were made for responsive edge cases not explicitly covered:

- **Mobile (< 481px):** Content is full width with `2.5rem` padding. Font sizes scale down — headings use `2rem`, body text uses `1rem`.
- **Tablet (481px – 768px):** Section gap increases to give content more breathing room vertically.
- **Desktop (769px+):** Content is capped at `40rem` max-width and centered, matching the Figma layout. Font sizes step up slightly — headings to `2.25rem`, body text to `1.125rem`.
- **Buttons** are fixed at `20.625rem` width across all breakpoints as shown in the Figma, which works well within the `40rem` content container on desktop but remains comfortable on mobile.
