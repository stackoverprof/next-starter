# next-starter

**by stackoverprof**

A personal Next.js boilerplate with modern tooling and best practices pre-configured.

## Features

- ⚡ **Next.js 15.5.6** with App Router
- 🎨 **Tailwind CSS v4** for styling
- 📝 **TypeScript** for type safety
- 🔧 **ESLint** for code quality
- 🚀 **Turbopack** for faster builds
- 🎯 **Geist Fonts** (Sans & Mono) pre-configured
- 📱 **Responsive design** out of the box
- 🎛️ **Custom Flexbox Utilities** for common layouts

## Getting Started

1. **Clone this repository:**
   ```bash
   git clone <your-repo-url>
   cd next-starter
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your app.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
next-starter/
├── app/                    # App Router directory
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── public/                # Static assets
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.ts         # Next.js configuration
```

## Customization

This boilerplate is designed to be your starting point. Feel free to:

- Add your preferred UI components library
- Set up additional development tools
- Configure your preferred folder structure
- Add common utilities and hooks
- Customize the styling and branding

## Custom Flexbox Utilities

This boilerplate includes custom utility classes for common flexbox patterns:

### **Flexbox Layout Classes**
```css
/* Center (c) */
.flex-cc  /* items-center justify-center */
.flex-cs  /* items-start justify-center */
.flex-ce  /* items-end justify-center */

/* Between (b) */
.flex-bc  /* items-center justify-between */
.flex-bs  /* items-start justify-between */
.flex-be  /* items-end justify-between */

/* Start (s) */
.flex-sc  /* items-center justify-start */
.flex-ss  /* items-start justify-start */
.flex-se  /* items-end justify-start */

/* End (e) */
.flex-ec  /* items-center justify-end */
.flex-es  /* items-start justify-end */
.flex-ee  /* items-end justify-end */

/* Evenly (v) */
.flex-vc  /* items-center justify-evenly */
.flex-vs  /* items-start justify-evenly */
.flex-ve  /* items-end justify-evenly */

/* Around (a) */
.flex-ac  /* items-center justify-around */
.flex-as  /* items-start justify-around */
.flex-ae  /* items-end justify-around */

/* Other Utilities */
.col     /* flex-col */
.full    /* h-full w-full */
```

### **Usage Examples**
```jsx
// Center content
<div className="flex-cc h-screen">
  <h1>Centered content</h1>
</div>

// Space between items
<div className="flex-bc p-4">
  <span>Left</span>
  <span>Right</span>
</div>

// Vertical layout
<div className="col flex-cc gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

## Tech Stack

- **Framework:** Next.js 15.5.6
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Linting:** ESLint
- **Fonts:** Geist Sans & Mono
- **Build Tool:** Turbopack

## License

This project is for personal use. Feel free to fork and modify for your own needs.

---

**Happy coding!** 🚀