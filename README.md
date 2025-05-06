# Canvas Kit

A lightweight and responsive drawing application built with Next.js, React, and TypeScript. Canvas Kit provides an intuitive interface for digital sketching, drawing, and concept art.

## Features

- **Multiple Drawing Tools**: Brush, eraser, rectangle, and circle tools
- **Layer Management**: Create, toggle visibility, and manage multiple layers
- **Color Selection**: Choose from a predefined palette or use custom colors
- **Tool Settings**: Adjust brush size, eraser size, and opacity
- **Background Customization**: Change the canvas background color
- **Export Functionality**: Save your artwork as an image
- **Responsive Design**: Works on both desktop and mobile devices
- **Keyboard Shortcuts**: Quickly switch between tools

## Tech Stack

Canvas Kit is built with the following technologies:

- [Next.js 15](https://nextjs.org) - React framework with App Router
- [React 19](https://react.dev) - UI library
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion) - Animation library

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [Bun](https://bun.sh) (recommended) or [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/canvas-kit.git
cd canvas-kit
```

2. Install dependencies:

```bash
# Using Bun (recommended)
bun install

# OR using npm
npm install
```

4. Start the development server:

```bash
# Using Bun (recommended)
bun dev

# OR using npm
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Project Structure

```
canvas-kit/
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page with Canvas application
│   ├── components/     # React components
│   ├── styles/         # Global styles
│   └── env.js          # Environment variables validation
├── .env.example        # Example environment variables
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Canvas Features

### Drawing Tools

- **Brush (B)**: Freehand drawing with adjustable size and opacity
- **Eraser (E)**: Remove parts of your drawing with adjustable size
- **Rectangle (R)**: Draw rectangles with adjustable stroke width and opacity
- **Circle (C)**: Draw circles with adjustable stroke width and opacity

### Layer System

- Create multiple layers for complex artwork
- Toggle layer visibility
- Select active layer for editing
- Background layer with customizable color

### Color Selection

- Predefined color palette with a range of colors
- Custom color picker for precise color selection

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgements

- [Create T3 App](https://create.t3.gg/) - The starting template for this project
