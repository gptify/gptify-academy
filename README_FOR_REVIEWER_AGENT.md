# GPTify Academy — Code & Architecture Review Guide for Reviewer Agent

## Project Overview
- **Name:** GPTify Academy (B2B Sun'iy Intellekt Ish Oqimlari Platformasi)
- **Author/Founder:** Shukhrat Iskandarov (Founder at GPTify.co & Co-founder at Cubeo.ai) & Davlatbek Iskandarov (PhD, TDIU)
- **Production URL:** https://gptify.github.io/gptify-academy/
- **GitHub Repository:** https://github.com/gptify/gptify-academy.git
- **Core Architecture:** Option B — Two-Door Architecture:
  1. `index.html`: Public High-Converting B2B Marketing Landing Page
  2. `app.html`: Gated Classroom LMS Application (14 Lessons, Storyboard, AI Homework Grader, Gamification, SHA-256 Verifiable Certificate)
  3. `assets/course_content.js`: 14-Lesson Flagship Curriculum with Evergreen Provider DNA Matrix, Grounding techniques, and Quizzes.

---

## File Structure in this Bundle
```
gptify_academy_bundle/
├── README_FOR_REVIEWER_AGENT.md   ← This instruction file
├── index.html                     ← B2B Landing Page (Option B root)
├── app.html                       ← Gated Classroom LMS Application
└── assets/
    └── course_content.js          ← 14-Lesson structured curriculum data
```

---

## What to Review & Verify (Reviewer Agent Checklist)

1. **Architecture & Conversion Flow:**
   - Does `index.html` clearly present the B2B value proposition, pricing tiers, curriculum overview, and instructor credentials?
   - Does clicking "1.1-Darsni Bepul Ko'rish" transition seamlessly into `app.html`?
   - Does `app.html` properly gate Lessons 1.2 through 5.2 while keeping Lesson 1.1 open as a freemium preview?
   - Can users easily return to the landing page via the `← Bosh Sahifa` button in `app.html`?

2. **Evergreen AI Architecture:**
   - Are the models presented using the **Provider DNA & 4 Archetypes** framework (Anthropic Claude Frontier, OpenAI GPT/o-series, Google Gemini Massive Context, Open-Weights DeepSeek/Llama)?
   - Are LMSYS Chatbot Arena (`lmarena.ai`) and Artificial Analysis (`artificialanalysis.ai`) properly integrated as live benchmark radars?
   - Does the in-lesson interactive model selector widget function cleanly without external dependencies?

3. **Code Quality & Restraint (Anti-Bloat / YAGNI):**
   - Zero bulky external frameworks (React, Vue, Tailwind) — built with clean, native HTML5, modern CSS flex/grid, and vanilla JavaScript.
   - Are styles responsive across mobile (Telegram WebApp / iPhone / Android) and desktop screens?
   - Are localStorage keys namespaced cleanly (`gptify_auth_user`, `gptify_progress`, etc.)?

4. **Security & Data Integrity:**
   - Is client-side input sanitized when rendering dynamic lesson content?
   - Are certificate SHA-256 hashes verified deterministically?
   - Does the platform respect user privacy (no unsolicited external tracking)?

5. **Editorial Tone & Localization:**
   - Is the audience respectfully addressed as **"Siz"** (formal plural) across all editorial copy, modals, and CTAs?
   - Are action verbs positive and grounded (strictly "qurish" / "ishlab chiqish", no prohibited archaic terms)?

---

## How to Test Locally
Open `index.html` in any modern web browser or start a local static server:
```bash
python -m http.server 8000
# Visit http://localhost:8000/ in your browser
```
