# Uditsmita Debnath — Personal Portfolio Website

A production-quality, single-page portfolio website for **Uditsmita Debnath** (Content Strategist & Writer), inspired by modern creative editorial design aesthetics.

---

## 🎨 Design System & Visual Language

- **Color Palette**:
  - **Cream Background**: `#FDF3EC`
  - **Deep Teal**: `#0F4C4A` (panels, buttons, footer)
  - **Darker Ink Teal**: `#0B3D3C` (headings & high-contrast text)
  - **Peach**: `#F8A98A` (accent, CTAs, diagonal arrows, sticker)
  - **Warm Yellow**: `#FBD57A` (hero arch, stats band, marquee strip)
  - **Sea Teal**: `#3F9A94` (morphing blobs, avatar frame, subtle doodles)
  - **Dark Mode**: Deep midnight teal `#082523` with toggle in navigation.
- **Typography**:
  - **Headings**: `Playfair Display` (bold, tight tracking, editorial serif)
  - **Body**: `DM Sans` (clean, highly readable modern sans)
  - **Handwritten Accents**: `Caveat` (playful script for role line, speech bubble, and footer)
- **Signature Shapes & Elements**:
  - Arch-shaped hero image frame with portrait
  - Speech bubble card with one sharp corner (`rounded-3xl rounded-tl-sm`)
  - Circular rotating badge ("Open to Opportunities • Available for Collaboration")
  - Rounded 36px+ experience panel
  - Morphing organic sea-teal blob frame with 3D avatar & crown doodle
  - Sparkle (4-point star), starburst, and ring-and-dot doodles

---

## 🚀 Tech Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/) + React 19 + TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom `@theme` tokens and light/dark theme toggle
- **Motion & Animations**: [Framer Motion](https://www.framer-motion.dev/)
- **Smooth Scrolling**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Icons & Delight**: [Lucide React](https://lucide.dev/) + [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Typography**: `next/font/google` with zero layout shift (CLS: 0)
- **SEO & Structured Data**: Open Graph tags, Twitter Cards, and schema.org `Person` JSON-LD

---

## 📂 Project Architecture

```
├── public/
│   └── images/
│       ├── uditsmita-hero.jpg       # Hero arch portrait
│       ├── uditsmita-avatar.jpg     # 3D avatar for 'What I Do'
│       ├── hubops-preview.jpg       # Hubops experience visual
│       └── reference.jpeg           # Original design reference
├── src/
│   ├── app/
│   │   ├── globals.css              # Design tokens, keyframes & theme variants
│   │   ├── layout.tsx               # Root layout, fonts & JSON-LD schema
│   │   └── page.tsx                 # Single-page portfolio structure
│   ├── components/
│   │   ├── Navbar.tsx               # Monogram logo, nav links & theme toggle
│   │   ├── HeroSection.tsx          # Name, arch, speech bubble & rotating badge
│   │   ├── SkillsMarquee.tsx        # Tilted infinite running strip
│   │   ├── ExperienceSection.tsx    # Filter chips & 3D tilt cards
│   │   ├── ExperienceModal.tsx      # Deep-dive bullet point drawer
│   │   ├── WhatIDoSection.tsx       # 2x2 grid, morphing blob & education pills
│   │   ├── StatsBand.tsx            # Pull quote & count-up statistics
│   │   ├── FooterSection.tsx        # CTA statement, confetti & LinkedIn
│   │   ├── Preloader.tsx            # UD monogram intro animation
│   │   ├── CursorGlow.tsx           # Desktop ambient radial cursor follower
│   │   ├── ScrollProgress.tsx       # Top spring physics progress bar
│   │   ├── SmoothScrollProvider.tsx # Lenis smooth scroll configuration
│   │   ├── ThemeProvider.tsx        # Dark/light theme context provider
│   │   └── ui/
│   │       ├── Doodles.tsx          # Sparkles, starbursts & underlines
│   │       ├── RotatingBadge.tsx    # Curved SVG text rotating badge
│   │       ├── ExperienceCard.tsx   # 3D tilt work card with glare
│   │       └── Icons.tsx            # Scalable SVG icons
│   └── data/
│       └── portfolioData.ts         # Single typed source of truth
```

---

## 📝 Verified Content & Placeholders to Customize

All textual content, links, and assets are centralized in `src/data/portfolioData.ts`.

### 1. What was populated directly from the LinkedIn Profile:
- **Name**: Uditsmita Debnath
- **Role**: Content Strategist & Writer
- **Summary**: Direct synthesis from her profile summary and philosophy
- **Pull Quote**: *"Good content should make the reader pause, understand something better, or look at a problem differently."*
- **Experience**:
  - **Hubops**: Head of Content Intelligence & Research Lead | Marketing Content Specialist (8 months)
  - **KPMG India**: Intern (Current)
  - **Requin Solutions**: Content Writer (3 months)
  - **Finango**: Content Writer (2 months)
  - **MyCaptain**: Sales & Marketing Intern (2 months)
- **Education**:
  - MBA in Marketing (Chandigarh University, 2026–2028)
  - MA in Economics (Chandigarh University, 2021–2023)
  - BA in Economics (North-Eastern Hill University - NEHU, Shillong, 2018–2021)
- **Social**: LinkedIn profile (`linkedin.com/in/uditsmita-debnath-892284409`)

### 2. Placeholders clearly marked for Uditsmita:
| Placeholder Item | File Location | Default Setting | How to Update |
| :--- | :--- | :--- | :--- |
| **Hero Photo** | `public/images/uditsmita-hero.jpg` | High-res editorial portrait matching reference | Replace the file with your own portrait photo |
| **3D Avatar** | `public/images/uditsmita-avatar.jpg` | 3D clay-style winking avatar matching reference | Replace or keep the styled character |
| **Email Address** | `src/data/portfolioData.ts` | `hello@uditsmita.com [placeholder]` | Change to your actual email address |
| **Phone Number** | `src/data/portfolioData.ts` | `+91 98765 43210 [placeholder]` | Change to your phone number or leave blank |
| **Article URLs** | `src/data/portfolioData.ts` | Experience items | Add live links to published articles or Medium posts |

---

## 🛠️ Local Development & Build

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Start
```bash
npm run build
npm run start
```

---

## ☁️ Deploy to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com/) and click **"New Project"**.
3. Select your repository and click **Deploy**.
4. Next.js App Router will automatically be configured and deployed with zero setup required.
