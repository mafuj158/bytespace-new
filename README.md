# 🚀 ByteSpace - Modern Digital Learning & Creator Platform

> **Frontend Engineering Assessment Submission**  
> **Company:** [Doin Tech](https://doin.tech/)  
> **Candidate:** Mafuj Ahmed Bishal  
> **Position Applied:** Jr. Software Engineer (Frontend)  
> **Tracking ID:** `aaaaffad-cc3f-4f19-a588-e1f02dd2786d`

---

## 🌐 Live Preview & Repository Links

- **Live Deployment (Vercel):** [https://bytespace-new-nine-peach.vercel.app](https://bytespace-new-nine-peach.vercel.app)
- **GitHub Repository:** [https://github.com/mafuj158/bytespace-new](https://github.com/mafuj158/bytespace-new)
- **Active Feature Branch:** `feature/courses-page-design`
- **Pull Request (PR):** Submitted for review from `feature/courses-page-design` to `main`

---

## 📌 Executive Summary

**ByteSpace** is a high-performance, responsive digital learning platform frontend built using **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, **TypeScript**, and **Ant Design**. The project faithfully translates the Figma designs into production-ready code with meticulous attention to typography, micro-interactions, responsive breakpoints, accessibility, and clean component architecture.

---

## ✨ Key Features & Deliverables

### 1. 🏠 Landing Page (Required - 100% Completed)
- **Hero Section:** High-contrast royal blue (`#003BE2`) gradient with grid backdrop, dynamic headline, CTA buttons, student social proof avatars, and video preview.
- **Brand Showcase & Marquee:** Continuous marquee ticker highlighting trusted partners and learning topics.
- **Top Rated Courses Grid:** Featured course cards with category badges, pricing, ratings, student count, and author meta.
- **Interactive Features:** Expandable curriculum previews, animated statistics counters, and newsletter subscription form.
- **Footer & Navigation:** Fully responsive desktop header, mobile drawer navigation, and rich footer.

### 2. 📚 Courses Search & Catalog Page (`/courses`)
- **Real-time Search:** Instant debounced search filtering by course title, subtitle, or instructor.
- **Category & Level Filter Bar:** Toggle between *Level* (Beginner, Intermediate, Advanced) and *Category* (28+ curated topics).
- **Horizontal Scroll Controls:** Smooth left/right arrow buttons to effortlessly browse through all categories on any device.
- **Dynamic Sorting:** Sort by *Most Popular*, *Newest*, *Price: Low to High*, *Price: High to Low*, and *Highest Rated*.
- **Custom Ant Design Pagination:** Configured with `@ant-design/nextjs-registry`, custom lime active pills (`#D4FB20`), circular border navigation chevrons (`FiChevronLeft` / `FiChevronRight`), and smooth viewport re-centering.

### 3. 🔐 Authentication Pages (Bonus - 100% Completed)
- **Sign In (`/login`):** Clean card layout with email & password validation, toggleable password visibility, social login options, and responsive styling.
- **Sign Up (`/register`):** Multi-input registration form with form validation, terms agreement, and smooth navigation back to the store.

### 4. 🧭 Error Handling & Under Development Placeholders
- **Custom 404 Not Found Page (`app/not-found.tsx`):** Designed with royal blue grid aesthetic, oversized lime gradient typography, and clear home navigation.
- **Under Development Template (`components/common/under-development.tsx`):** Reusable placeholder page matching the 404 brand identity for pending routes:
  - `/courses/[slug]` (Course Detail)
  - `/creators` (Creators Catalog)
  - `/creators/[slug]` (Creator Profile)

---

## 🛠️ Technology Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript (Strict mode enabled) |
| **Library** | React 19 |
| **Styling** | Tailwind CSS v4 (inline theme tokens, CSS variables) |
| **UI Components** | Ant Design (`antd` v6) + `@ant-design/nextjs-registry` |
| **Icons** | React Icons (`react-icons` - Feather & BoxIcons) |
| **Forms** | React Hook Form |
| **Animation & Tickers** | React Fast Marquee & Motion |
| **Deployment** | Vercel |

---

## 📁 Project Architecture

```plaintext
bytespace-new/
├── app/
│   ├── (auth)/                     # Auth route group (isolated layout)
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── (marketing)/                # Marketing route group (shared header & footer)
│   │   ├── layout.tsx
│   │   ├── page.tsx                # Landing Page
│   │   ├── courses/                # Courses Catalog & Search
│   │   │   ├── page.tsx            # Server component
│   │   │   └── _components/        # Filter bar, search hero, cards, view
│   │   │       ├── course-card.tsx
│   │   │       ├── courses-filter-bar.tsx
│   │   │       ├── courses-hero-search.tsx
│   │   │       └── courses-view.tsx
│   │   ├── courses/[slug]/         # Course details placeholder
│   │   ├── creators/               # Creators directory placeholder
│   │   └── creators/[slug]/        # Creator profile placeholder
│   ├── globals.css                 # Tailwind v4 theme, fonts, custom antd styles
│   ├── layout.tsx                  # Root layout with AntdRegistry & Poppins font
│   └── not-found.tsx               # Pixel-perfect 404 page
├── components/
│   ├── common/                     # Shared components (UnderDevelopment)
│   └── ui/                         # Buttons, inputs, logos, CustomPagination
├── data/
│   └── courses.ts                  # Centralized mock data, categories, creators
├── types/
│   └── index.ts                    # TypeScript models & interfaces
├── public/                         # Static assets, hero backgrounds, logos
└── package.json
```

---

## 🌿 Git Branching & Submission Process

In strict accordance with the assessment instructions:
1. **Branching Strategy:** Work was conducted on a dedicated feature branch:  
   `feature/courses-page-design` (never directly committing to `main`).
2. **Pull Request:** A clean Pull Request was opened to merge the completed work into `main`.
3. **Commit History:** Atomic, descriptive commit messages describing each component and feature addition.

---

## 💻 Running the Project Locally

### Prerequisites
- Node.js (v18.18.0 or newer recommended)
- npm, yarn, or pnpm

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mafuj158/bytespace-new.git
   cd bytespace-new
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

5. **Build for production:**
   ```bash
   npm run build
   npm run start
   ```

---

## 🌟 Reviewer Notes & Highlights
- **Pixel Perfection:** Colors (`#003BE2` royal blue, `#D4FB20` lime, `#040819` dark navy), typography (Poppins + Satoshi), and card shadows match Figma specs.
- **Header Contrast Guarantee:** Handled transparent-to-scrolled transitions so header icons and brand logo are always distinct across blue and white viewports.
- **Custom Ant Design Integration:** Standard Ant Design pagination was customized with project-specific tokens, rounded-full pill buttons, and responsive styles without layout shifts.

---

*Developed with passion by **Mafuj Ahmed Bishal** for [Doin Tech](https://doin.tech/).*
