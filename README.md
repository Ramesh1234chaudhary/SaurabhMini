# 🏛️ LawyerHero - Professional Template for Lawyers

[![Next.js](https://img.shields.io/badge/Next.js-15.5.25-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

Professional landing page template for lawyers, developed with modern technologies. Elegant design, high performance, and fully customizable.

## ✨ Features

- 🎨 **Professional Design**: Elegant interface with gold palette
- 📱 **100% Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Exceptional Performance**: Lighthouse Score 95+ | Core Web Vitals ✅
- 🌓 **Adaptive Theme**: Dark/Light mode with system preference
- 📧 **Smart Form**: Real-time validation + EmailJS
- 🚀 **Simple Deployment**: Vercel, Netlify, AWS - one click
- ♿ **Accessibility**: WCAG 2.1 AA compliant
- 🔍 **SEO Optimized**: Schema.org + Open Graph + sitemap
- 🛡️ **Security**: Security headers + Error Boundaries
- 📊 **Analytics Ready**: Google Analytics + Web Vitals tracking

## 🚀 Technologies Used

### Core

- **Next.js 15.5.25** with App Router + Turbopack
- **TypeScript 5.9.2** with strict mode
- **React 19.1** with Server Components
- **Tailwind CSS 3.4.17** with custom design system

### UI & UX

- **Framer Motion 12.23** for fluid animations
- **Lucide React 0.537** for consistent icons
- **CVA** for component variants
- **clsx + tailwind-merge** for dynamic classes

### Forms & Validation

- **React Hook Form 7.62** for performance
- **Zod 4.0.15** for type-safe validation
- **EmailJS 4.4.1** for email sending

### Performance & SEO

- **Next.js Image** with WebP/AVIF
- **Bundle Analyzer** for optimization
- **Structured Data** for rich snippets
- **Web Vitals** integrated tracking

## 📁 Project Structure

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Main layout
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # Base components
│   │   ├── button.tsx     # Reusable button
│   │   └── card.tsx       # Reusable card
│   ├── layout/            # Layout components
│   │   ├── header.tsx     # Header with navigation
│   │   └── footer.tsx     # Footer with information
│   └── sections/          # Landing page sections
│       ├── hero.tsx       # Main section
│       ├── services.tsx   # Practice areas
│       ├── about.tsx      # About the lawyer
│       └── contact.tsx    # Contact form
└── lib/
    └── utils.ts           # Utilities (clsx, twMerge)
```

## 🎨 Design System

### Main Colors

- **Blue**: `#2563eb` (Primary)
- **Indigo**: `#4f46e5` (Secondary)
- **Gray**: Neutral tones for text and backgrounds
- **White**: For cards and highlight elements

### Typography

- **Headings**: Font-bold with gradients
- **Body**: Font-medium for readability
- **Highlight**: Blue-indigo gradients

### Animations

- **Entry**: Fade-in with stagger
- **Hover**: Smooth scale and transform
- **Scroll**: Viewport-based animations
- **Micro-interactions**: Immediate visual feedback

## 🚀 How to Run

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Enter the folder
cd lawyer-hero-envato

# Install dependencies
npm install

# Run in development mode
npm run dev
```

### Available Scripts

```bash
npm run dev          # Development
npm run build        # Production build
npm run start        # Production server
npm run lint         # Linting
```

## 📱 Responsiveness

The landing page is fully responsive and optimized for:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎯 Features

### Main Sections

1. **Hero Section**: Lawyer presentation with statistics
2. **Services**: Practice areas with interactive cards
3. **About**: Detailed information and differentials
4. **Contact**: Contact form and information

### Characteristics

- ✅ **Modern** and professional design
- ✅ **Smooth animations** with Framer Motion
- ✅ **Functional form** with validation
- ✅ **SEO optimized** with metadata
- ✅ **Optimized performance** with Next.js
- ✅ **Accessibility** with ARIA labels
- ✅ **Complete** responsiveness

## 🛠️ Customization

### Lawyer Data

To customize for another lawyer, update:

1. **Hero Section** (`src/components/sections/hero.tsx`)

   - Name and title
   - Statistics
   - Description

2. **About Section** (`src/components/sections/about.tsx`)

   - Personal information
   - Experience
   - Differentials

3. **Contact Section** (`src/components/sections/contact.tsx`)

   - Contact data
   - Address

4. **Layout** (`src/app/layout.tsx`)

   - SEO metadata
   - Page title

5. **Footer** (`src/components/layout/footer.tsx`)
   - Contact information
   - Social media

### Colors and Style

To change colors, edit:

- `src/app/globals.css` - CSS variables
- `tailwind.config.ts` - Tailwind configuration

## 📊 Performance

- **Lighthouse Score**: 95+ in all metrics
- **Core Web Vitals**: Optimized
- **Bundle Size**: < 200KB
- **Loading Time**: < 2s

## 🔧 Maintenance

### Modular Structure

- Reusable components
- Clear separation of responsibilities
- Easy maintenance and updates

### Documentation

- Well-documented code
- Self-explanatory components
- Detailed README

## 🚀 How to Use

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Configure your data** in `src/config/lawyer.ts`
4. **Configure EmailJS** (optional)
5. **Run in development**: `npm run dev`
6. **Deploy**: `npm run build`

For detailed instructions, see:

- 📚 **[docs/](./docs/)** - Complete organized documentation
- 📖 [docs/CUSTOMIZATION.md](./docs/CUSTOMIZATION.md) - Complete customization guide
- 🚀 [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md) - Detailed deployment guide
- 📋 [docs/TEMPLATE_GUIDE.md](./docs/TEMPLATE_GUIDE.md) - Original instructions

## 🔥 Implemented Improvements

### ✅ Code Quality

- **Zero warnings** in ESLint/TypeScript
- **Error Boundaries** for error handling
- **Performance hooks** for monitoring
- **Clean code** with consistent patterns

### ⚡ Performance

- **Lazy loading** of components
- **Image optimization** WebP/AVIF
- **Bundle analysis** configured
- **Core Web Vitals** tracking
- **Memory monitoring** integrated

### 🛡️ Security & Reliability

- **Security headers** configured
- **Robust validation** of forms
- **Enhanced error handling**
- **Complete type safety**

### 📚 Documentation

- **Detailed guides** for customization
- **Deploy on multiple platforms**
- **Complete troubleshooting**
- **Documented best practices**

## 📄 License

This template is available under the MIT license. You can freely use, modify, and distribute it.

---

**Developed with ❤️ for lawyers seeking a professional and modern digital presence.**
