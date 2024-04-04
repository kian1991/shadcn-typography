## shadcn/ui inspired typography components

This is a collection of typography components created off of the [shadcn/ui](https://ui.shadcn.com/docs/components/typography) website. The components are built using Tailwind CSS and React. You can use `className` to add additional styles to the components.

### Features

- 💅 Extendable through `className` (Tailwind CSS)
- ⏩ forwardRef support
- 📦 Customizable through prop overrides
- 🦭 TypeScript support

#### Table of Contents

1. [Components](#components)
2. [Prerequisites for using the copy method](#prerequisites-for-using-the-copy-method)
3. [Installation](#installation)

## Components

![examples](image.png)

`H1` - `H4` - Heading components

> If you want the `H2` to have no underline, add the class `border-none` to the component

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

## Prerequisites for using the Copy Method

1. twMerge and clsx must be available in the project

```bash
npm install clsx tailwind-merge
```

2. create a file `./lib/utils.tsx` and paste the following:

```tsx
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
```

## Installation

### Option 1: as Package

```bash
npm install shadcn-typography
```

```bash
yarn add shadcn-typography
```

### Option 2: Copy the components into your project

Create the file `./components/ui/typography.tsx` and paste the following:

```tsx
import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';

const H1 = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
	(props, ref) => {
		return (
			<h1
				{...props}
				ref={ref}
				className={cn(
					'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
					props.className
				)}>
				{props.children}
			</h1>
		);
	}
);

H1.displayName = 'H1';
export { H1 };

const H2 = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
	(props, ref) => {
		return (
			<h2
				{...props}
				ref={ref}
				className={cn(
					'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
					props.className
				)}>
				{props.children}
			</h2>
		);
	}
);

H2.displayName = 'H2';
export { H2 };

const H3 = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
	(props, ref) => {
		return (
			<h3
				{...props}
				ref={ref}
				className={cn(
					'scroll-m-20 text-2xl font-semibold tracking-tight',
					props.className
				)}>
				{props.children}
			</h3>
		);
	}
);

H3.displayName = 'H3';
export { H3 };

const H4 = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
	(props, ref) => {
		return (
			<h4
				{...props}
				ref={ref}
				className={cn(
					'scroll-m-20 text-xl font-semibold tracking-tight',
					props.className
				)}>
				{props.children}
			</h4>
		);
	}
);

H4.displayName = 'H4';
export { H4 };

const Lead = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
	(props, ref) => {
		return (
			<p
				{...props}
				ref={ref}
				className={cn('text-xl text-muted-foreground', props.className)}>
				{props.children}
			</p>
		);
	}
);

Lead.displayName = 'Lead';
export { Lead };

const P = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
	(props, ref) => {
		return (
			<p
				{...props}
				ref={ref}
				className={cn('leading-7 [&:not(:first-child)]:mt-6', props.className)}>
				{props.children}
			</p>
		);
	}
);

P.displayName = 'P';
export { P };

const Large = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	(props, ref) => {
		return (
			<div {...props} ref={ref} className={cn('text-lg font-semibold', props.className)}>
				{props.children}
			</div>
		);
	}
);

Large.displayName = 'Large';
export { Large };

const Small = forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>((props, ref) => {
	return (
		<p
			{...props}
			ref={ref}
			className={cn('text-sm font-medium leading-none', props.className)}>
			{props.children}
		</p>
	);
});

Small.displayName = 'Small';
export { Small };

const Muted = forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
	(props, ref) => {
		return (
			<span
				{...props}
				ref={ref}
				className={cn('text-sm text-muted-foreground', props.className)}>
				{props.children}
			</span>
		);
	}
);

Muted.displayName = 'Muted';
export { Muted };

const InlineCode = forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
	(props, ref) => {
		return (
			<code
				{...props}
				ref={ref}
				className={cn(
					'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
					props.className
				)}>
				{props.children}
			</code>
		);
	}
);

InlineCode.displayName = 'InlineCode';
export { InlineCode };

const List = forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
	(props, ref) => {
		return (
			<ul
				{...props}
				ref={ref}
				className={cn('my-6 ml-6 list-disc [&>li]:mt-2', props.className)}>
				{props.children}
			</ul>
		);
	}
);

List.displayName = 'List';
export { List };

const Quote = forwardRef<HTMLQuoteElement, React.HTMLAttributes<HTMLQuoteElement>>(
	(props, ref) => {
		return (
			<blockquote
				{...props}
				ref={ref}
				className={cn(
					'mt-6 border-l-2 pl-6 italic text-muted-foreground',
					props.className
				)}>
				{props.children}
			</blockquote>
		);
	}
);

Quote.displayName = 'Quote';
export { Quote };
```
