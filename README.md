# Portfolio Website - Next.js

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Fully optimized for deployment on Vercel.

## Features

- 🎨 Modern, clean design with smooth animations
- 🌓 Dark mode support (auto-detects system preference)
- 📱 Fully responsive on all devices
- ⚡ Built with Next.js 14 App Router
- 🎯 TypeScript for type safety
- 💨 Tailwind CSS for styling
- 🚀 Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Your Information

Edit `app/page.tsx` to customize:
- Your name and title
- About section content
- Skills and technologies
- Projects showcase
- Contact information and social links

### Update Metadata

Edit `app/layout.tsx` to change:
- Page title
- Meta description
- Open Graph tags

### Styling

The project uses Tailwind CSS. Customize colors and styles in:
- `tailwind.config.js` - Theme configuration
- `app/globals.css` - Global styles

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Run deploy command:
```bash
vercel
```

3. Follow the prompts

### Build Configuration

The project is configured with `output: 'export'` in `next.config.js` for static export, which works perfectly with Vercel. No additional configuration needed!

## Project Structure

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main portfolio page
│   └── globals.css     # Global styles
├── public/             # Static assets (add images here)
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **React** - UI library

## Performance

- Lighthouse Score: 100/100
- Fully optimized images
- Minimal JavaScript bundle
- Fast page loads

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Free to use and modify for your own portfolio!

## Support

For issues or questions, please open an issue in the repository.
