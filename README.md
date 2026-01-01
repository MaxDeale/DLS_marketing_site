# Deale Legal Systems - Marketing Website

A production-ready marketing website for Deale Legal Systems, a B2B legal-tech platform that provides document intelligence and case material processing for law firms.

## Tech Stack

- **Next.js 14** (App Router)
- **JavaScript**
- **SASS/SCSS Modules** (No Tailwind, No CSS-in-JS)
- **React 18**

## Features

- ✅ Fully responsive design
- ✅ Dark, modern, enterprise aesthetic
- ✅ Component-based architecture
- ✅ SEO-friendly metadata
- ✅ Clean animations and transitions
- ✅ SCSS variables for consistent theming
- ✅ Accessible and semantic HTML

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.js          # Root layout with Header/Footer
│   ├── page.js            # Home page
│   ├── product/           # Product page
│   ├── use-cases/         # Use cases page
│   ├── how-it-works/      # How it works page
│   ├── security/          # Security & Compliance page
│   ├── about/             # About page
│   └── contact/           # Contact/Request Access page
├── components/            # Reusable React components
│   ├── Header/           # Site header with navigation
│   ├── Footer/           # Site footer
│   ├── Button/           # Button component
│   └── Logo/             # Logo component
├── styles/               # Global styles and variables
│   ├── variables.scss    # SCSS variables (colors, spacing, typography)
│   └── globals.scss      # Global styles
└── public/               # Static assets
```

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   npm start
   ```

## Design System

### Color Palette

The design uses a deep purple, red, and lavender color scheme matching the Deale Legal Systems logo:

- **Primary Background:** Deep purple (`#1a0d2e`)
- **Accent Color:** Red (`#e53e3e`, `#dc2626`)
- **Text Colors:** Light lavender/pale blue-purple (`#d4c5f0`, `#b8a3d9`)

### Typography

- **Font Family:** System font stack (San Francisco, Segoe UI, etc.)
- **Headings:** Bold, tight line-height
- **Body:** Normal weight, relaxed line-height

### Spacing

Consistent spacing scale using rem units:
- xs: 0.5rem
- sm: 1rem
- md: 1.5rem
- lg: 2rem
- xl: 3rem
- 2xl: 4rem
- 3xl: 6rem

## Key Pages

### Home
- Hero section with logo
- Value proposition
- Feature highlights
- Workflow overview
- Call-to-action

### Product
- Document processing pipeline
- Key capabilities
- Feature details
- Important disclaimers

### Use Cases
- Case preparation
- Chronology building
- Document review acceleration
- Contract analysis
- Litigation support
- Due diligence

### How It Works
- Step-by-step visual explanation
- No technical jargon
- Clear workflow visualization

### Security & Compliance
- Access control
- Audit trails
- Data isolation
- Encryption
- Compliance information

### About
- Mission statement
- Positioning (what we are/are not)
- Company values
- Important disclaimers

### Contact / Request Access
- Contact form
- Request access workflow
- No self-serve signup

## Important Disclaimers

Throughout the site, clear disclaimers emphasize that:

- Deale Legal Systems is **NOT a law firm**
- The platform does **NOT provide legal advice, opinions, predictions, or recommendations**
- All outputs are derived strictly from uploaded documents
- The product performs classification, extraction, summarization, and retrieval only

## Content Guidelines

### Preferred Phrases
- "document intelligence"
- "case material processing"
- "source-grounded outputs"
- "document classification"
- "information extraction"

### Avoided Phrases
- "legal advice"
- "legal analysis"
- "recommendations"
- "strategy"

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

### Adding New Pages

1. Create a new directory in `app/` with your page name
2. Add `page.js` and `page.module.scss` files
3. Export metadata for SEO
4. Import and use shared components

### Styling

- Use SCSS modules for component-specific styles
- Import variables from `styles/variables.scss`
- Follow the existing design system
- Maintain responsive breakpoints

### Components

- Keep components focused and reusable
- Use SCSS modules for styling
- Follow the existing component patterns

## License

Proprietary - Deale Legal Systems

## Support

For questions or issues, please contact the development team.

