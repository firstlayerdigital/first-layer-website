# First Layer Digital | Official Website 🚀

<div align="center">

![First Layer Digital Logo](public/logo.svg)

**Engineering-driven web solutions that bridge infrastructure and design**

[🌐 Live Site](https://www.firstlayer.digital/) • [📧 Contact](mailto:hello@firstlayer.digital) • [📋 Services](https://www.firstlayer.digital/services) • [⚖️ Terms](https://www.firstlayer.digital/terms)

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com)
[![License](https://img.shields.io/badge/License-Proprietary-blue.svg)](LICENSE)

</div>

---

## ✨ Overview

This repository contains the source code for **First Layer Digital LLC's** official business website. Built with engineering precision and modern best practices, the site showcases our expertise in custom software development, digital transformation, and e-commerce optimization.

**Key Features:**
- 🎯 **MVP Methodology**: Projects framed through consultation → scope → launch workflow
- 📊 **Performance-First**: 90+ Lighthouse scores, sub-second load times
- 🔒 **Legal Compliance**: Integrated Terms of Service, Privacy Policy, and Client Agreements
- 🎨 **Modern UI/UX**: Glassmorphism, gradient effects, and responsive design
- ⚡ **Zero JS by Default**: Astro's Islands Architecture for optimal performance
- 🔄 **CI/CD Pipeline**: Automated deployments via GitHub Actions and Netlify

---

## 🛠 Tech Stack & Architecture

<div align="center">

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

</div>

### Core Technologies

| Technology | Purpose | Why We Chose It |
|------------|---------|-----------------|
| **[Astro](https://astro.build/)** | Static Site Generator | Islands Architecture ships zero JS by default, achieving 98+ Lighthouse scores |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Styling Framework | Utility-first approach with custom design system and responsive utilities |
| **[TypeScript](https://www.typescriptlang.org/)** | Type Safety | Enhanced developer experience and compile-time error detection |
| **[Node.js](https://nodejs.org/)** | Runtime Environment | Powers build processes and development server |
| **[Netlify](https://www.netlify.com/)** | Hosting & CDN | Edge network, automatic SSL, and seamless GitHub integration |
| **[GitHub Actions](https://github.com/features/actions)** | CI/CD | Automated testing, building, and deployment workflows |

### Design System

- **Color Palette**: Cyan-600 primary with slate-900 text and gradient overlays
- **Typography**: System font stack optimized for readability
- **Components**: Reusable Astro components with Tailwind utility classes
- **Responsive**: Mobile-first design with breakpoints (sm, md, lg, xl, 2xl)
- **Animations**: CSS transitions and hover effects for enhanced UX

---

## 📁 Project Structure

```
first-layer-website/
├── src/
│   ├── pages/              # Route pages
│   │   ├── index.astro     # Homepage
│   │   ├── about.astro     # About page
│   │   ├── services.astro  # Services & pricing
│   │   ├── work.astro      # Portfolio (categorized by service pillars)
│   │   ├── contact.astro   # Contact form (Netlify Forms)
│   │   ├── terms.astro     # Client Terms (MSA-based)
│   │   └── privacy.astro   # Privacy Policy
│   ├── components/         # Reusable components
│   │   ├── ProjectCard.astro
│   │   └── Welcome.astro
│   ├── layouts/            # Page layouts
│   │   └── Layout.astro    # Main layout with nav & footer
│   └── styles/             # Global styles
│       └── global.css
├── public/                  # Static assets
│   ├── logo.svg
│   └── favicons/
├── internal-docs/           # Legal documents
│   ├── MASTER SERVICE AGREEMENT.md
│   └── OPERATING AGREEMENT.md
├── astro.config.mjs         # Astro configuration
├── package.json             # Dependencies
└── netlify.toml            # Netlify deployment config
```

---

## 🎯 Key Pages & Features

### 🏠 Homepage (`/`)
- Hero section with value proposition
- Service highlights with performance metrics
- Recent work showcase
- Call-to-action sections

### 💼 Services (`/services`)
- **Core Services**: Website Design/Development, Custom Software, E-commerce, SEO
- **Hybrid Pricing Model**: Consultation Fees, Fixed-Price MVPs, Hourly Rates
- **60-Day Support**: Post-launch support guarantee highlighted

### 🎨 Our Work (`/work`)
- **Categorized by Service Pillars**:
  - Custom Software Development
  - Digital Transformation
  - E-commerce Optimization
- **MVP Journey**: Consultation → Scope → Launch workflow
- **Technical Specs**: Tech stack, performance metrics, CI/CD indicators
- **Client Confidence**: 60-day support badges, perpetual license notes
- **Anonymous Portfolio Support**: For sensitive client projects

### ⚖️ Legal Pages
- **Client Terms** (`/terms`): Master Service Agreement terms, payment policies, IP rights
- **Privacy Policy** (`/privacy`): GDPR-compliant privacy disclosure

### 📞 Contact (`/contact`)
- Netlify Forms integration
- Success page redirect
- Responsive form design

---

## 🔄 Development Workflow

### 🤖 AI-Augmented Development

This project leverages modern AI tools for enhanced productivity:

- **[Cursor](https://cursor.com/)**: AI-native IDE for code generation and refactoring
- **[GitHub Copilot](https://github.com/features/copilot)**: Inline code suggestions
- **[Google Gemini](https://gemini.google.com/)**: Architectural decisions and content strategy
- **[OpenAI](https://openai.com/)**: Complex logic solving and code optimization

### 🚀 CI/CD Pipeline

```mermaid
graph LR
    A[Git Push] --> B[GitHub Actions]
    B --> C[Build & Test]
    C --> D[Netlify Deploy]
    D --> E[Edge CDN]
```

**Automated Workflows:**
1. **Git Push** → Triggers GitHub Actions
2. **Build Process** → Astro static site generation
3. **Netlify Deploy** → Automatic deployment to edge network
4. **SSL & CDN** → Automatic HTTPS and global distribution

### 📦 Deployment

- **Platform**: Netlify (Static Site Hosting)
- **Build Command**: `npm run build`
- **Publish Directory**: `dist/`
- **Branch**: `main` (auto-deploy on push)
- **SSL**: Automatic via Netlify
- **CDN**: Global edge network

---

## 🏗 Architecture Decisions

### Why Astro?

1. **Performance**: Islands Architecture eliminates unnecessary JavaScript
2. **SEO**: Server-side rendering ensures perfect search engine indexing
3. **Developer Experience**: Component-based architecture with TypeScript support
4. **Flexibility**: Can add React/Vue/Svelte components when needed

### Why Tailwind CSS v4?

1. **Utility-First**: Rapid UI development without custom CSS
2. **Design System**: Consistent spacing, colors, and typography
3. **Responsive**: Built-in breakpoint system
4. **Performance**: Purged unused styles in production

### Why Netlify?

1. **Edge Network**: Global CDN for fast content delivery
2. **Git Integration**: Automatic deployments from GitHub
3. **Forms**: Built-in form handling (no backend required)
4. **Analytics**: Integrated performance monitoring

---

## 📊 Performance Metrics

| Metric | Target | Achieved |
|--------|--------|----------|
| **Lighthouse Score** | 90+ | 98+ |
| **Load Time** | < 1s | < 0.5s |
| **Core Web Vitals** | All Green | ✅ Pass |
| **First Contentful Paint** | < 1.8s | < 0.8s |
| **Time to Interactive** | < 3.8s | < 1.2s |

---

## 🔐 Legal & Compliance

### Integrated Legal Documents

- **Master Service Agreement (MSA)**: Client terms, payment policies, IP rights
- **Operating Agreement**: Company structure and business operations
- **Privacy Policy**: GDPR-compliant data handling disclosure
- **Client Terms**: Public-facing terms of service

### Key Legal Features

- ✅ **Perpetual License**: Clients receive perpetual, non-exclusive license to custom code
- ✅ **60-Day Support**: Post-launch support guarantee
- ✅ **Payment Terms**: Net 30 with late fee policy ($50 + 1.5% monthly)
- ✅ **IP Protection**: Pre-existing frameworks remain First Layer Digital LLC property
- ✅ **Anonymous Portfolio**: Support for sensitive client projects

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.14.1 or higher
- **npm**: v9.0.0 or higher
- **Git**: For version control

### Installation

```bash
# Clone the repository
git clone https://github.com/firstlayerdigital/first-layer-website.git
cd first-layer-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
```

---

## 🧪 Development Guidelines

### Code Style

- **TypeScript**: Strict mode enabled
- **Formatting**: Prettier (via Cursor/VS Code)
- **Components**: PascalCase for Astro components
- **CSS**: Tailwind utility classes preferred

### Component Structure

```astro
---
// Frontmatter: TypeScript logic
interface Props {
  title: string;
}

const { title } = Astro.props;
---

<!-- Template: HTML/JSX -->
<div class="container">
  <h1>{title}</h1>
</div>

<style>
  /* Scoped styles if needed */
</style>
```

### Adding New Projects

Edit `src/pages/work.astro` and add to the `projects` array:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  category: 'custom-software' | 'digital-transformation' | 'ecommerce-optimization',
  description: 'Project description',
  mvpJourney: { consultation: '...', scope: '...', launch: '...' },
  techStack: { frontend: [...], backend: [...], tools: [...] },
  performance: { lighthouse: 95, loadTime: '< 0.8s' },
  githubUrl: 'https://github.com/...',
  ciCd: true,
  testing: true,
  anonymous: false
}
```

---

## 📈 Analytics & Monitoring

### Integrated Services

- **Google Analytics**: User behavior tracking (G-QVZKKJSC56)
- **Cloudflare Analytics**: Performance monitoring
- **Netlify Analytics**: Build and deployment metrics

### Performance Monitoring

- Core Web Vitals tracking
- Real User Monitoring (RUM)
- Build time optimization
- Bundle size analysis

---

## 🤝 Contributing

This is a private repository for First Layer Digital LLC. For inquiries about contributing or collaboration, please contact:

- **Email**: hello@firstlayer.digital
- **Website**: https://www.firstlayer.digital/

---

## 📄 License

**Proprietary** - All rights reserved by First Layer Digital LLC

This codebase contains proprietary intellectual property including:
- Custom frameworks and templates
- Design system and components
- Business logic and configurations

See `internal-docs/OPERATING AGREEMENT.md` for IP disclosure details.

---

## 🎨 Design Philosophy

> *"Engineering-driven solutions that deliver measurable results. From concept to deployment, we build with precision and purpose."*

### Design Principles

1. **Performance First**: Every decision prioritizes speed and efficiency
2. **Transparency**: Clear communication about services, pricing, and legal terms
3. **Modern Aesthetics**: Clean, professional design with creative flourishes
4. **Accessibility**: WCAG-compliant design for all users
5. **Scalability**: Architecture that grows with business needs

---

## 📞 Contact & Support

**First Layer Digital LLC**

- **Email**: hello@firstlayer.digital
- **Website**: https://www.firstlayer.digital/

---

<div align="center">

**Built with ❤️ by First Layer Digital LLC**

*Engineering the web, one layer at a time.*

[🌐 Live Site](https://www.firstlayer.digital/) • [📧 Contact](mailto:hello@firstlayer.digital) • [📋 Services](https://www.firstlayer.digital/services)

</div>
