## shadcn/ui inspired typography components

This is a collection of typography components created off of the [shadcn/ui](https://ui.shadcn.com/docs/components/typography) website. The components are built using Tailwind CSS and React.

## Prerequisites

- twMerge and clsx must be available in the project
- @lib and @/components aliases should be setup

```jsx
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
```

## Installation

```bash
npm install shadcn-typography
```

```bash
yarn add shadcn-typography
```

## Components

`Lead` - A large text component for headings

```jsx
<Lead>Some text</Lead>
```

`H1` - `H4` - Heading components

```jsx
<H1>Big Heading Text</H1>
<H2>Some smaller Text</H2>
```

`P` - Paragraph component

```jsx
<P>I am the paragraph 🦭</P>
```

`Large` - Larger Text component

```jsx
<Large>Some large text</Large>
```
