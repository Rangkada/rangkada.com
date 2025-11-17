# Rangkada Official Website

Official website for Rangkada - showcasing our electric vehicle solutions, vision, and alpha partnership program.

## 🚀 Tech Stack

- **Framework:** [Next.js 13](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Tabler Icons](https://tabler.io/icons), [React Icons](https://react-icons.github.io/react-icons/), [Lucide React](https://lucide.dev/)
- **Forms:** React Hook Form
- **reCAPTCHA:** Google reCAPTCHA v3
- **UI Components:** Custom components with Radix UI primitives

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher
- **npm** or **pnpm** (recommended) or **yarn**

## 🛠️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-org/rangkada.com.git
cd rangkada.com/v1
```

2. **Install dependencies**

Using pnpm (recommended):
```bash
pnpm install
```

Or using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

## ⚙️ Environment Setup

1. **Copy the environment example file**

```bash
cp .env.local.example .env.local
```

2. **Configure environment variables**

Open `.env.local` and configure the following:

### Google Apps Script URLs
Set up Google Sheets integration for form submissions:
- `NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL` - URL for Alpha Partner form submissions
- `NEXT_PUBLIC_CONTACT_FORM_URL` - URL for Contact Form (Talk to Us) submissions

📖 See [GOOGLE_SHEETS_SETUP.md](./docs/GOOGLE_SHEETS_SETUP.md) for detailed instructions.

### Google reCAPTCHA v3
Protect your forms with reCAPTCHA:
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - Your reCAPTCHA site key
- `RECAPTCHA_SECRET_KEY` - Your reCAPTCHA secret key

Get your keys from [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)

## 🚀 Getting Started

### Development Server

Start the development server:

```bash
pnpm run dev
```

Or with npm:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

Build the application for production:

```bash
pnpm run build
```

### Starting Production Server

After building, start the production server:

```bash
pnpm run start
```

### Linting

Run ESLint to check code quality:

```bash
pnpm run lint
```

## 📁 Project Structure

```
rangkada.com/v1/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Home page
│   ├── alpha-partners/          # Alpha Partners program
│   ├── solutions/               # Solutions page
│   ├── vision/                  # Company vision page
│   ├── privacy/                 # Privacy policy
│   └── terms/                   # Terms of service
├── components/                   # React components
│   ├── AlphaPartners/           # Alpha Partners components
│   ├── Common/                  # Shared/common components
│   ├── Footer/                  # Footer component
│   ├── Header/                  # Header/navigation
│   ├── Home/                    # Home page components
│   ├── Solutions/               # Solutions page components
│   ├── TalkToUs/                # Contact form
│   ├── Vision/                  # Vision page components
│   ├── magicui/                 # Magic UI components
│   └── ui/                      # Base UI components
├── docs/                        # Documentation
│   ├── GOOGLE_SHEETS_SETUP.md  # Google Sheets integration guide
│   └── THEME_DOCUMENTATION.md  # Theme customization guide
├── google-apps-script/          # Google Apps Script code
│   ├── alpha-partner-form.gs   # Alpha Partner form handler
│   └── contact-form.gs         # Contact form handler
├── lib/                         # Utility functions
├── public/                      # Static assets
│   └── images/                 # Images and graphics
├── styles/                      # Global styles
├── types/                       # TypeScript type definitions
└── .env.local.example          # Environment variables template
```

## ✨ Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark/Light Theme** - Theme toggle with persistent preferences
- **Form Submissions** - Google Sheets integration for form data
- **reCAPTCHA Protection** - Spam protection on all forms
- **Alpha Partners Program** - Application system for early partners
- **Contact Forms** - "Talk to Us" contact functionality
- **Case Studies** - Dynamic case study pages
- **Animated UI** - Smooth animations with Framer Motion
- **SEO Optimized** - Next.js App Router with metadata support
- **Type Safe** - Built with TypeScript

## 📚 Documentation

- [Google Sheets Setup Guide](./docs/GOOGLE_SHEETS_SETUP.md) - Set up form submissions to Google Sheets
- [Theme Documentation](./docs/THEME_DOCUMENTATION.md) - Customize themes and styling
- [Components README](./components/Sections/README.md) - Information about section components

## 🔧 Configuration Files

- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS configuration
- `.eslintrc.json` - ESLint configuration
- `.prettierrc` - Prettier configuration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the terms specified in the [LICENSE](./LICENSE) file.

## 🆘 Support

For support, please use the "Talk to Us" form on the website or contact the development team.

---

**Built with ❤️ by the Rangkada Team**
