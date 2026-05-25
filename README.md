# Flexbox Playground

Flexbox Playground is an interactive learning tool for understanding CSS Flexbox visually. Each lesson explains a single property and lets you change values live so you can immediately see how layout behavior changes.

Live app: [Flexbox Playground](https://phe0nix.github.io/Flexbox-Playground/)

## Features

- Interactive demos for core Flexbox container and item properties
- Modern lesson browser with search and group filters
- Collapsible lesson sections for focused exploration
- URL-shareable playground state for lesson controls and filters
- Live CSS output panel with copy-to-clipboard support
- Responsive UI built for desktop and mobile use

## Covered Properties

Container properties:

- `display: flex`
- `flex-direction`
- `flex-wrap`
- `flex-flow`
- `justify-content`
- `align-items`
- `align-content`
- `gap`

Item properties:

- `order`
- `flex-grow`
- `flex-shrink`
- `flex-basis`

## Shareable Links

The playground stores lesson filter state and lesson control state in the URL.

That means you can:

- configure a lesson
- copy the page URL
- send it to someone else
- reopen the exact same lesson state later

Shared URLs also preserve the lesson anchor so the page opens on the relevant property section.

## Tech Stack

- React 18
- Vite 5
- Sass / SCSS modules
- Vitest
- Testing Library

