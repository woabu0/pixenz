# Pixenz - Landing Page

Welcome to the **Pixenz** landing page project! This is a premium, high-performance landing page for the Pixenz social media mobile application. This README provides an overview of the project, setup instructions, and other relevant details.

## Table of Contents

- [Visit](#visit)
- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Structure](#structure)
- [Contributors](#contributors)
- [Contributing](#contributing)
- [License](#license)

## Visit

- [Vercel](https://pixenz0.vercel.app/)

## About

**Pixenz** is a next-generation social media platform built for creators. Connect with your community, share your story in high fidelity, and monetize your passion. Experience a modern, premium social network designed to inspire meaningful connections and empower creative expression.

## Features

- Hero Section
- Features Section
- Showcase Section
- Community Section
- Highlight Section
- Download Section
- FAQ Section
- Contact Section
- Responsive Design

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/woabu0/pixenz.git
   ```
2. Navigate to the project directory:
   ```bash
   cd pixenz
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Structure

```
pixenz/
├── src/
│   ├── app/
│   │   ├── favicon.ico         # Site favicon
│   │   ├── icon.png            # App icon
│   │   ├── globals.css         # Global styles with animations
│   │   ├── layout.tsx          # Root layout with metadata
│   │   └── page.tsx            # Main page with all sections
│   └── components/
│       ├── sections/
│       │   ├── Hero.tsx        # Full-screen hero section
│       │   ├── Features.tsx    # Feature cards grid
│       │   ├── Showcase.tsx    # Vertical story flow
│       │   ├── Community.tsx   # Testimonials section
│       │   ├── Highlight.tsx   # Bold statement section
│       │   ├── Download.tsx    # CTA download section
│       │   ├── FAQ.tsx         # Accordion FAQ section
│       │   ├── Contact.tsx     # Contact form & info
│       │   └── Footer.tsx      # Multi-column footer
│       └── ui/
│           ├── Button.tsx       # Reusable button component
│           ├── Card.tsx         # Soft dark card component
│           ├── Navbar.tsx       # Minimal floating navbar
│           ├── PhoneMockup.tsx # Phone frame component
│           ├── SectionContainer.tsx # Section wrapper
│           ├── TimelineItem.tsx # Timeline item component
│           └── Icons.tsx        # SVG icon components
├── public/
│   ├── images/                 # App screenshots
│   │   ├── explore.png
│   │   ├── feed.png
│   │   ├── messaging.png
│   │   └── profile.png
│   └── logo.png                # Brand logo
├── package.json                # Dependencies
├── package-lock.json           # Dependency lock file
├── next.config.ts              # Next.js configuration
├── next-env.d.ts               # Next.js TypeScript declarations
├── tsconfig.json               # TypeScript configuration
├── postcss.config.mjs          # PostCSS configuration
├── eslint.config.mjs           # ESLint configuration
├── LICENSE                     # MIT License
└── README.md                   # Project documentation
```

## Contributors

<p align="center">
  <a href="https://github.com/woabu0/pixenz/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=woabu0/pixenz" alt="Contributors" />
  </a>
</p>

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
