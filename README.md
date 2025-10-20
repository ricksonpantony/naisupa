# Nurse Assist International (NAI) Website

A professional, mobile-first website for Nurse Assist International built with React, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, minimal layout with bright teal color palette
- **Mobile-First**: Responsive design optimized for all devices
- **Interactive Elements**: Smooth animations, hover effects, and transitions
- **Student Gallery**: Interactive carousel showcasing success stories
- **Video Integration**: Embedded video highlights with modal playback
- **Contact Form**: Functional contact form with validation
- **Mobile Dock**: Floating action bar for quick access on mobile devices

## Color Theme

- **Primary Teal**: #45c0ca (bright aqua teal background)
- **Deep Teal Accent**: #247a84
- **Soft Neutral**: #f7f9fa (backgrounds)
- **Dark Text**: #1f1f1f
- **Highlight/CTA**: #00a6b5 (buttons, hover states)

## Sections

1. **Hero**: Compelling headline with CTAs and animated background
2. **Why Choose NAI**: Four key value propositions with icons
3. **Courses**: Three main course offerings (OBA, NCLEX-NGN, OSCE)
4. **Student Gallery**: Interactive success stories with carousel
5. **Video Highlights**: Embedded videos with modal playback
6. **About**: Company story, mission, values, and OBA pathway timeline
7. **FAQ**: Accordion-style frequently asked questions
8. **Contact**: Contact form and information
9. **Footer**: Comprehensive footer with links and social media
10. **Mobile Dock**: Floating action bar for mobile users

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth interactions
- **Lucide React**: Beautiful icon library

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx
│   ├── WhyChoose.jsx
│   ├── Courses.jsx
│   ├── StudentGallery.jsx
│   ├── VideoHighlights.jsx
│   ├── About.jsx
│   ├── FAQ.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── MobileDock.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

- Update colors in `tailwind.config.js`
- Modify content in individual component files
- Add new sections by creating new components and importing them in `App.jsx`
- Update contact information in the Contact and Footer components

## Contact Information

- **Phone**: +61 478 320 397
- **Email**: admin@nurseassistinternational.com
- **Hours**: Mon–Fri 9:30am–5:30pm (Australian Eastern Time)

## License

This project is proprietary to Nurse Assist International.
