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

`H1` - `H4` - Heading components

```jsx
<div>
	<H1>Big Heading Text</H1>
	<H2>Some smaller Text</H2>
	<H3>Even smaller text</H3>
	<H4>Smallest text</H4>
</div>
```

`P` - Paragraph component

```jsx
<P>I am the paragraph 🦭</P>
```

`Large` - Larger text component

```jsx
<Large>Some large text</Large>
```

`Small` - Obviously a smaller text component

```jsx
<Small>Some damn small text</Small>
```

`Lead` - A large text component for headings

```jsx
<Lead>Some text</Lead>
```

`Quote` - A blockquote component

```jsx
<Quote>
	I like to look at one or two random quotes each morning. It can be a good exercise for
	journaling prompts.
</Quote>
```

`InlineCode` - Inline code component

```jsx
<InlineCode>npm install shadcn-typography</InlineCode>
```

`List` - A list component

```jsx
<List>
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</List>
```
