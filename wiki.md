roject Summary
The project is an interactive portfolio website for Guilherme Rocha Bianchini, a Software Engineering student at FIAP in São Paulo. It showcases his skills in cybersecurity, cloud infrastructure, and game development through a modern, responsive design with a dark theme and smooth animations. The site now includes a language toggle feature for English and Portuguese, enhancing accessibility and user experience.

Project Module Description
Hero: Introduction with a typing effect, language toggle button, and call-to-action buttons.
About: Professional background and focus areas.
Projects: Display of featured work with descriptions and technologies used.
Skills: Breakdown of technical skills across various categories.
Timeline: Educational background and certifications.
Contact: Form for inquiries and social media links.
Directory Tree
shadcn-ui/
├── README.md                # Project overview and documentation
├── components.json          # Component metadata
├── eslint.config.js         # ESLint configuration
├── index.html               # Main HTML file
├── package.json             # Project dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── public/
│   ├── favicon.svg          # Favicon for the site
│   └── robots.txt           # Robots.txt for SEO
├── src/
│   ├── App.css              # Global styles
│   ├── App.tsx              # Main application component
│   ├── components/          # Individual React components
│   ├── contexts/            # Contexts for state management
│   ├── hooks/               # Custom hooks
│   ├── pages/               # Page components
│   ├── lib/                 # Utility functions
│   ├── main.tsx             # Entry point for React
│   ├── vite-env.d.ts        # Vite environment types
├── tailwind.config.ts       # Tailwind CSS configuration
├── template_config.json      # Template configuration
├── todo.md                 # Development tasks
├── tsconfig.*.json          # TypeScript configurations
└── vite.config.ts           # Vite configuration
File Description Inventory
README.md: Overview and setup instructions.
index.html: The main HTML structure of the application.
package.json: Contains project dependencies and scripts for building and running the application.
src/components/: Contains all reusable React components.
src/pages/: Contains page components that structure the site.
src/hooks/: Custom hooks for managing state and effects.
src/contexts/: Contexts for managing global state (e.g., language).
src/lib/: Utility functions used throughout the application.
Technology Stack
React: Frontend library for building user interfaces.
TypeScript: For type safety and improved developer experience.
Tailwind CSS: Utility-first CSS framework for styling.
Framer Motion: For animations and transitions.
Vite: Build tool for faster development and production builds.
Usage
Install dependencies: Run pnpm install to install all required packages.
Build the project: Use pnpm run build to create a production-ready build.
Run the project: Use pnpm run lint to check for errors and ensure code quality.