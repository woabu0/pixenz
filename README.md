# Pixenz - Portfolio Website

Welcome to the **Pixenz** project! This README provides an overview of the project, setup instructions, and other relevant details.

## Table of Contents

- [Visit](#visit)
- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Structure](#structure)
- [Structure](#structure)
- [Contributors](#contributors)
- [Contributing](#contributing)
- [License](#license)

## Visit

- [Vercel](https://Pixenz0.vercel.app/)

## About

**Pixenz** is a digital agency offering creative design and modern development services. We craft user-centric experiences, powerful interfaces, and innovative solutions for your brand.

## Features

- Home
- Expertise
- Case
- Questions
- Feedback
- Contact

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
   npm i
   ```
4. Start the application:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Structure

```
pixenz/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles with animations
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Main page with all sections
│   └── components/
│       ├── sections/
│       │   ├── Hero.tsx         # Editorial split layout hero
│       │   ├── Features.tsx     # Soft grid of depth cards
│       │   ├── Showcase.tsx     # Vertical story flow
│       │   ├── Community.tsx    # Human & social testimonials
│       │   ├── Highlight.tsx   # One clean bold statement
│       │   ├── Download.tsx     # Soft minimal CTA card
│       │   ├── FAQ.tsx          # Accordion FAQ section
│       │   ├── Contact.tsx      # Contact form & support info
│       │   └── Footer.tsx       # Ultra minimal footer
│       └── ui/
│           ├── Button.tsx       # Reusable button component
│           ├── Card.tsx          # Soft dark card component
│           ├── Navbar.tsx        # Minimal floating navbar
│           ├── PhoneMockup.tsx   # Phone frame component
│           ├── SectionContainer.tsx # Section wrapper
│           ├── TimelineItem.tsx  # Timeline item component
│           └── Icons.tsx         # SVG icon components
├── public/                      # Static assets (empty)
├── package.json                 # Dependencies
├── package-lock.json           # Dependency lock file
├── next.config.ts              # Next.js configuration
├── next-env.d.ts               # Next.js TypeScript declarations
├── tsconfig.json               # TypeScript configuration
├── postcss.config.mjs         # PostCSS configuration
├── eslint.config.mjs          # ESLint configuration
├── LICENSE                     # MIT License
└── README.md                   # Project documentation
```

## Contributors

<p align="center">
  <a href="https://github.com/imabu0/pixenz/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=imabu0/pixenz" alt="Contributors" />
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
