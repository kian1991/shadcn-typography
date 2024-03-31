import React from 'react';
import { cn } from '../../lib/utils';

export function Lead(props: React.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p {...props} className={cn('text-xl text-muted-foreground', props.className)}>
			{props.children}
		</p>
	);
}

export function H1(props: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h1
			{...props}
			className={cn(
				'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
				props.className
			)}>
			{props.children}
		</h1>
	);
}

export function H2(props: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h2
			{...props}
			className={cn(
				'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
				props.className
			)}>
			{props.children}
		</h2>
	);
}

export function H3(props: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h3
			{...props}
			className={cn(
				'scroll-m-20 text-2xl font-semibold tracking-tight',
				props.className
			)}>
			{props.children}
		</h3>
	);
}

export function H4(props: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h4
			{...props}
			className={cn('scroll-m-20 text-xl font-semibold tracking-tight', props.className)}>
			{props.children}
		</h4>
	);
}

export function P(props: React.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p {...props} className={cn('leading-7 [&:not(:first-child)]:mt-6', props.className)}>
			{props.children}
		</p>
	);
}

export function Large(props: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} className={cn('text-lg font-semibold', props.className)}>
			{props.children}
		</div>
	);
}

export function Small(props: React.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p {...props} className={cn('text-sm font-medium leading-none', props.className)}>
			{props.children}
		</p>
	);
}

export function Muted(props: React.HTMLAttributes<HTMLSpanElement>) {
	return (
		<span {...props} className={cn('text-sm text-muted-foreground', props.className)}>
			{props.children}
		</span>
	);
}

export function InlineCode(props: React.HTMLAttributes<HTMLSpanElement>) {
	return (
		<code
			className={cn(
				'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
				props.className
			)}>
			{props.children}
		</code>
	);
}

export function List(props: React.HTMLAttributes<HTMLUListElement>) {
	return (
		<ul {...props} className={cn('my-6 ml-6 list-disc [&>li]:mt-2', props.className)}>
			{props.children}
		</ul>
	);
}

export function Quote(props: React.HTMLAttributes<HTMLQuoteElement>) {
	return (
		<blockquote
			{...props}
			className={cn(
				'mt-6 border-l-2 pl-6 italic text-muted-foreground',
				props.className
			)}>
			{props.children}
		</blockquote>
	);
}
