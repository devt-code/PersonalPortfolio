# Portfolio Website

A modern, full-stack portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a beautiful, responsive design with smooth animations and a contact form.

## Features

- 🎨 Modern, responsive design
- ⚡ Fast performance with Next.js
- 🎭 Smooth animations with Framer Motion
- 📱 Mobile-friendly interface
- 📧 Contact form with email integration
- 🌙 Optimized for SEO
- 🚀 Ready to deploy on Vercel, Netlify, or any hosting platform

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Email:** Nodemailer

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your email configuration:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
CONTACT_EMAIL=your-email@example.com
```

**Note:** For Gmail, you'll need to generate an App Password:
1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Generate an App Password for "Mail"

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Change "Your Name" to your actual name
   - Update social media links
   - Modify the description

2. **About Section** (`components/About.tsx`):
   - Update the about text
   - Modify statistics (projects, experience, etc.)

3. **Skills Section** (`components/Skills.tsx`):
   - Update skill categories and technologies

4. **Projects Section** (`components/Projects.tsx`):
   - Replace placeholder projects with your actual projects
   - Update GitHub and demo links

5. **Contact Section** (`components/Contact.tsx`):
   - Update contact information (email, phone, location)

6. **Navbar** (`components/Navbar.tsx`):
   - Update portfolio title/logo

### Styling

- Colors can be customized in `tailwind.config.js`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind utility classes

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables in Netlify dashboard
6. Deploy!

### Other Platforms

This Next.js app can be deployed on any platform that supports Node.js:
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform
- And more...

## Project Structure

```
Portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # Contact form API endpoint
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/
│   ├── About.tsx              # About section
│   ├── Contact.tsx            # Contact form section
│   ├── Footer.tsx             # Footer component
│   ├── Hero.tsx               # Hero section
│   ├── Navbar.tsx             # Navigation bar
│   ├── Projects.tsx           # Projects showcase
│   └── Skills.tsx             # Skills section
├── public/                    # Static assets
├── .env.example               # Environment variables template
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## License

This project is open source and available under the MIT License.

## Support

If you have any questions or need help, feel free to open an issue or contact me directly.

---

Made with ❤️ using Next.js and TypeScript
