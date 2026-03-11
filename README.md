## SpeedLab

SpeedLab is a small practice website with two mini tests:

- Typing Speed Test
- Mouse Reaction Time Test

Built with **Node.js**, **Express**, and **EJS** using simple server-side rendering and lightweight client-side JavaScript.

### Requirements

- Node.js (v18+ recommended)

### Install

```bash
cd TypeReflex
npm install
```

### Run

```bash
npm start
```

Then open `http://localhost:3000` in your browser.

### Routes

- `/` – Home page with links to both tests
- `/typing` – Typing speed test
- `/reaction` – Mouse reaction time test

### Notes

- No database required.
- Views are rendered server-side with EJS.
- Static assets (CSS/JS) are served from the `public` folder.

