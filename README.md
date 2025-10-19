# next-starter

**by stackoverprof**

Production-ready Next.js boilerplate with advanced tooling & code quality.

## Features

- ⚡ **Next.js 15.5.6** + Turbopack + App Router
- 🎨 **Tailwind CSS v4** + custom flexbox utilities
- 🔧 **ESLint + Prettier** with auto-sorting
- 🔄 **@stackoverprof/use-shared-state**

## Quick Start

```bash
git clone <your-repo-url>
cd next-starter
npm install
npm run dev
```

**Scripts:** `dev` | `build` | `start` | `format`

## What's Added Beyond `next init`

- **Advanced ESLint** with perfectionist, prefer-arrow, prettier plugins
- **Custom flexbox utilities** (flex-cc, flex-bc, etc.) for rapid layouts
- **@stackoverprof/use-shared-state** for lightweight state management
- **Turbopack** for faster builds
- **Dark mode** support

## Custom Flexbox Utilities

```css
.flex-cc  /* center center */
.flex-bc  /* center between */
.flex-sc  /* center start */
.flex-ec  /* center end */
.col      /* flex-col */
.full     /* h-full w-full */
```

**Usage:**
```jsx
<div className="flex-cc h-screen">Centered</div>
<div className="flex-bc p-4">Space between</div>
<div className="col flex-cc gap-4">Vertical</div>
```

**Happy coding!** 🚀
