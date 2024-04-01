import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';

export const H1 = forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
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
});

export const H2 = forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
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
});

export const H3 = forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
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
});

export const H4 = forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
	return (
		<h4
			{...props}
			ref={ref}
			className={cn('scroll-m-20 text-xl font-semibold tracking-tight', props.className)}>
			{props.children}
		</h4>
	);
});

export const Lead = forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>((props, ref) => {
	return (
		<p
			{...props}
			ref={ref}
			className={cn('text-xl text-muted-foreground', props.className)}>
			{props.children}
		</p>
	);
});

export const P = forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>((props, ref) => {
	return (
		<p
			{...props}
			ref={ref}
			className={cn('leading-7 [&:not(:first-child)]:mt-6', props.className)}>
			{props.children}
		</p>
	);
});

export const Large = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	(props, ref) => {
		return (
			<div {...props} ref={ref} className={cn('text-lg font-semibold', props.className)}>
				{props.children}
			</div>
		);
	}
);

export const Small = forwardRef<
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

export const Muted = forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
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

export const InlineCode = forwardRef<
	HTMLSpanElement,
	React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => {
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
});

export const List = forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
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

export const Quote = forwardRef<HTMLQuoteElement, React.HTMLAttributes<HTMLQuoteElement>>(
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
