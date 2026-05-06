# TAIYAKI SHOP - Frontend Style Guide

A comprehensive frontend style guide for the TAIYAKI SHOP application built with Angular, PrimeNG, and PrimeFlex.

## Overview

This frontend style guide defines standards for design, components, technical implementation, and accessibility to ensure consistency, maintainability, usability, and accessibility across the TAIYAKI SHOP application.

## Table of Contents

1. [Design Foundations](#design-foundations)
2. [Components](#components)
3. [Technical Guidelines](#technical-guidelines)
4. [Accessibility](#accessibility)
5. [Getting Started](#getting-started)

## Design Foundations

### Colour System

A unified and strictly defined colour system ensures visual consistency across the application.

#### Primary Colours (Brand Core)
- `--color-primary-light`: #E6BB82 (Gold/Tan)
- `--color-primary-dark`: #372110 (Dark Brown)

#### Secondary Colours (Backgrounds & Surfaces)
- `--color-sand-light`: #FFEDE0
- `--color-rose-light`: #FAD2D2
- `--color-rose`: #FAA2A2
- `--color-muted-rose`: #CC7878
- `--color-dark-rose`: #8F5656

#### Accent Colours (UI States & Actions)
- `--color-accent-red`: #E85C5C
- `--color-accent-orange`: #F2A65A
- `--color-accent-yellow`: #F2D15A
- `--color-accent-green`: #6FCF97
- `--color-accent-blue`: #5C8AE8
- `--color-accent-indigo`: #4B5CC4
- `--color-accent-violet`: #9B6CF2

### Typography

#### Font Stack
- **Headings**: "Heavitas", sans-serif
- **Body Text**: Arial, Helvetica, sans-serif

#### Type Scale (8pt System)
- H1: 48px
- H2: 32px
- H3: 24px
- Body: 16px
- Small: 14px

### Spacing System (8pt Grid)
- `--space-1`: 8px
- `--space-2`: 16px
- `--space-3`: 24px
- `--space-4`: 32px
- `--space-5`: 48px

### Layout Structure
- **Desktop**: 12-column grid
- **Tablet**: 8-column grid
- **Mobile**: 4-column grid
- **Container Max Width**: 1920px
- **Container Padding**: 0 16px

## Components

### Buttons
- **Implementation**: PrimeNG `p-button` only
- **States**: default, hover, active, disabled, focus, loading
- **Design**:
  - Primary: Accent red (#E85C5C) with white text
  - Secondary: Outlined dark brown (#372110)
  - Border Radius: 8px
  - Minimum Height: 44px

### Tables
- Structured data display
- Sorting, filtering, pagination supported
- Consistent interaction patterns
- Hover states and responsive behaviour

### Dropdowns/Select
- Implementation: PrimeNG `p-select`
- Search and keyboard navigation supported
- Single consistent implementation

### Input Fields
- Forms, search, authentication inputs
- Validation states required
- Clear focus and error handling

### Dialogs / Modals
- PrimeNG `p-dialog`
- Focus trap required
- Keyboard (ESC) support required
- Clear structure (header, content, actions)

### Icons
- **Icon Library**: PrimeIcons only (no mixing)
- **Style**: Outline style
- **Usage**: Consistent sizing and application

## Technical Guidelines

### Framework & Libraries
- **Angular**: v21.2.9
- **PrimeNG**: v21.1.6
- **PrimeFlex**: For layout & spacing
- **PrimeIcons**: For icon system

### Project Structure
```
src/
├── app/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page-level components
│   ├── services/      # API and business logic
│   └── app.ts         # Root component
├── assets/            # Images, fonts, etc.
└── styles.css         # Global styles
```

### Coding Standards
- Separation of logic, layout, and styling
- No inline styles unless necessary
- Prefer PrimeNG components over custom implementations
- Extend existing components instead of overriding
- Maintain separation of concerns

### API Integration
- UI is independent of API logic
- Service layer handles API communication
- Standard states: loading, error, empty

### Versioning
- **Semantic Versioning**:
  - 1.0.0 - Initial release
  - 1.1.0 - Feature updates
  - 1.1.1 - Bug fixes

## Accessibility

### Standards & Compliance
- **WCAG 2.1 Level AA** compliance required
- Accessibility considered from the beginning

### Visual Accessibility
- **Contrast Ratios**:
  - Text: 4.5:1
  - Headings: 3:1
- No reliance on colour alone

### Interaction Accessibility
- Keyboard navigation required
- Visible focus indicators required
- Click targets ≥ 44px
- Proper form labels and validation required

### Semantic HTML
- Use semantic HTML elements (`<main>`, `<section>`, `<nav>`) instead of generic `<div>` elements
- Improves screen reader interpretation
- Use IDs and ARIA labels where needed

### ARIA Roles & Labels
- Used to describe element roles and states
- Clarify function (e.g., button purpose)
- Used when semantic HTML is insufficient

Example:
```html
<button aria-label="Save content">Save</button>
```

### Images & Alternative Text
- All images must include meaningful alt text
- Supports screen readers and accessibility
- Acts as a fallback when images cannot load

## Getting Started

### Prerequisites
- Node.js v20.x or higher
- npm v10.x or higher

### Installation

1. Navigate to the project directory:
```bash
cd frontend-style-guide
```

2. Install dependencies:
```bash
npm install
```

### Development Server

Start the development server:
```bash
npm start
```

or 

```bash
ng serve
```

The application will be available at `http://localhost:4200/` (or the next available port).

### Building for Production

Build the project:
```bash
npm run build
```

or

```bash
ng build
```

The output will be in the `dist/` directory.

### Running Tests

```bash
npm test
```

or

```bash
ng test
```

## Overall Design Principles

- **Consistency** across all components
- **Usability** and accessibility as core principles
- **Functional design** over decoration
- **Scalable and maintainable** system

## Illustration & Visual Language

- Minimal, soft, organic visual style
- Used sparingly
- Never distract from content
- Natural lighting and authentic style
- No heavy filters or stock imagery

## Logo Guidelines

- Minimum width: 120px
- Clear space equals the height of "T"
- Default: dark brown on light backgrounds
- White version for dark sections

### Never:
- Stretch or distort
- Apply shadows or effects
- Change brand colours

## File Structure

```
frontend-style-guide/
├── src/
│   ├── app/
│   │   ├── app.ts           # Root component
│   │   ├── app.html         # Style guide template
│   │   ├── app.css          # Component styles
│   │   ├── app.config.ts    # Angular configuration
│   │   └── app.routes.ts    # Routing configuration
│   ├── main.ts              # Application entry point
│   ├── styles.css           # Global styles
│   └── index.html           # HTML template
├── package.json             # Dependencies and scripts
├── angular.json             # Angular CLI configuration
├── tsconfig.json            # TypeScript configuration
└── README.md               # This file
```

## Color System Usage Rules

1. **Primary colours**: Branding and structural UI elements
2. **Secondary colours**: Backgrounds and layout surfaces
3. **Accent colours**: Interactive elements only (buttons, links, states)
4. **Maximum of 2-3 accent colours per view**
5. **Standardised colour codes must always be used**
6. **Contrast ratios must always meet accessibility requirements**
7. **No ad-hoc colour adjustments allowed**

## Resources

- [Angular Documentation](https://angular.io)
- [PrimeNG Documentation](https://primeng.org)
- [PrimeFlex Documentation](https://primeflex.org)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## Additional Commands

### Generate a new component
```bash
ng generate component component-name
```

### Generate a new service
```bash
ng generate service service-name
```

### Lint the code
```bash
ng lint
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:
```bash
ng generate --help
```

## License

This project is part of the TAIYAKI SHOP bachelor thesis project.

## Contributors

- Design & Development Team

---

**Last Updated**: May 2024
**Version**: 1.0.0
**Status**: Production Ready

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
