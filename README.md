<div align="center">
  <h1>ts-nextjs-tailwind-starter</h1>
  <p>Next.js + Tailwind CSS + TypeScript starter packed with useful development features.</p>
  <p>Project by <a href="#">Software Engineering Team</a></p>
</div>

## Features

- ⚡️ Next.js 12
- ⚛️ React 18
- ✨ TypeScript
- 😎 [Styled Components](https://styled-components.com/docs)
- 💨 Tailwind CSS 3 — Configured with twin.macto to be usable inside styled components
- 🃏 Jest — Configured for unit testing
- 📈 Absolute Import and Path Alias — Import components using `@/` prefix
- 📏 ESLint — Find and fix problems in your code, also will **auto sort** your imports
- 💖 Prettier — Format your code consistently
- 🤖 Conventional Commit Lint — Make sure you & your teammates follow conventional commit
- ⏰ Standard Version Changelog — Generate your changelog using `yarn release`
- 👷 Github Actions — Lint your code on PR
- 🗺 Site Map — Automatically generate sitemap.xml

## Getting Started

### 1. Install dependencies

```bash
yarn install
```

### 2. Run the development server

You can start the server using this command:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Stands / Patterns / Conventions

- Use functional components
- Prevent multiple component definition per file
- Keep components small and separate your functionalities
- Use JavaScript destructuring to remove redundancy.
- Always prefer passing objects
- Use short cirtuit operators for Conditional rendering
- Always Set type/inteface for props
- Use folder components
- Put CSS in JavaScript - through styled components
- Separate business logic from UI file, as much as possible.

### Naming Conventions

- UpperCamelCase - component / interface / type / enum / decorator / type parameters
- lowerCamelCase - variable / parameter / function / method / property / module alias
- CONSTANT_CASE - global constant values, including enum values
- CSS-in-JS - follow [Airbnb Style Guide](https://github.com/airbnb/javascript/tree/master/css-in-javascript#naming)

### Requirements before making PR / Merges

- Check for linter warnings/error, if present run:
  ```bash
  yarn lint:fix
  ```
- Check for code format incosistencies, if present run:
  ```bash
  yarn format
  ```
- Make sure there are no build errors, run:
  ```bash
  yarn build
  ```
- Follow Commit message pattern [conventional commits](https://www.conventionalcommits.org) <br/>
  <e>i.e. "fix: button alignment", "chore: lint fixes", "feat: login form"<p>

### Recommended VsCode Extensions

- ESLint
- GitLens
- Prettier
- Tailwind Twin IntelliSense
