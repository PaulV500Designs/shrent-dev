<div align="center">
  <h1>ts-nextjs-tw-sc-starter</h1>
  <p>Next.js + Tailwind CSS + TypeScript + Styled Component starter packed with useful development features.</p>
  <p>by <a href="#">500 Designs Software Engineering Team</a></p>
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

## Standards / Patterns / Best Practices

- <b>KISS</b> - avoid making unecessary functions taken from other projects,
  each project is custom and must match only its Figma components with pixel accuracy as much as possible.
  If there are obvious reusable components (i.e buttons, forms), add them here to our company starter /kitchen-sink page. but remove them from a project if not used.
- <b>DRY</b> - but keep it simple
  - All reusable compoents at an atom, element, block (before section) level are are demoed in this template
    /kitchen-sink
  - Resuable intefaces and customHooks are stored in /types and /utils respectively
  - For each new React project, get aquanted with components presented in the /kitchen-sink,
    then add more or add variants to existing ones as needed based on project mockups/requirements
- <b>Separation of concerns</b>:
  - keep stylsheets / styled-components purely declarative of styles
  - Put logic ie. coditionals, calculations, loops inside functions component or helper files.
- <b>Styling:</b>

  - Before coding pages, components on the project's Figma Style guide must be built first. and presented in /kitchen-sink for other dev's reference
  - save font families and colors as variables in tailwind.config.js
  - vanilla css can be used alongside tailwind syntax inside the styled component files
  - use only inline tailwind styles only for quick layout i.e. tw='flex-col gap-5', the rest place in styled components, this keeps the least band-aids or overrides on our code
  - Put CSS in JavaScript - through styled components
  - /kitchen-sink page loads storybook (TBA)

- <b>Typescript:</b>

  - Provide explicit types for all values (esp. with props), avoid using 'any' as much as possible
  - Take the previous state into account while updating the state i.e.
  - Use TS-free TSX (JS free JSX) as much as possible - If logic is a one-liner, then using it in the TSX is fine

- Use functional components and hooks, no class components and constructors as much as possible
- store mockdata (pre API integration) in a separate file
- Multiple component definition per file, is not allowed
- Keep components small and separate your functionalities
- Use JavaScript destructuring to remove redundancy.
- Always prefer passing objects
- Use short cirtuit operators for Conditional rendering
- Use folder components

### Naming Conventions

- UpperCamelCase - component / interface / type / enum / decorator / type parameters
- lowerCamelCase - variable / parameter / function / method / property / module alias
- CONSTANT_CASE - global constant values, including enum values
- CSS-in-JS - follow [Airbnb Style Guide](https://github.com/airbnb/javascript/tree/master/css-in-javascript#naming)
- Avoid using abbreviations in variables i.e. for "getTZ" use getTimeZone / getTimezone
- for typescript interface or types declared inside components file add suffix "Props"
  i.e. "type ButtonProps = {" or "interface ButtonProps {"

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
