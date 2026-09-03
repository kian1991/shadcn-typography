import * as React from 'react';
import { cn } from '../../lib/utils';

type Tag = keyof React.JSX.IntrinsicElements;

/**
 * Creates a typed, ref-forwarding component that renders `tag` with
 * `defaultClassName`. Consumer classes are merged via tailwind-merge, so
 * a passed `className` always wins over the defaults.
 */
function createComponent<K extends Tag>(tag: K, defaultClassName: string, displayName: string) {
  type Props = React.ComponentPropsWithoutRef<K>;
  type Ref = React.ComponentRef<K>;

  const Component = React.forwardRef<Ref, Props>((props, ref) => {
    const { className, ...rest } = props as Props & { className?: string };
    return React.createElement(tag, { ...rest, ref, className: cn(defaultClassName, className) });
  });
  Component.displayName = displayName;
  return Component;
}

export const H1 = createComponent(
  'h1',
  'scroll-m-20 text-4xl font-extrabold tracking-tight text-balance',
  'H1',
);

export const H2 = createComponent(
  'h2',
  'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
  'H2',
);

export const H3 = createComponent('h3', 'scroll-m-20 text-2xl font-semibold tracking-tight', 'H3');

export const H4 = createComponent('h4', 'scroll-m-20 text-xl font-semibold tracking-tight', 'H4');

export const P = createComponent('p', 'leading-7 [&:not(:first-child)]:mt-6', 'P');

export const Lead = createComponent('p', 'text-xl text-muted-foreground', 'Lead');

export const Large = createComponent('div', 'text-lg font-semibold', 'Large');

export const Small = createComponent('small', 'text-sm leading-none font-medium', 'Small');

export const Muted = createComponent('p', 'text-sm text-muted-foreground', 'Muted');

export const InlineCode = createComponent(
  'code',
  'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
  'InlineCode',
);

export const MultilineCode = createComponent(
  'pre',
  'relative rounded bg-muted p-4 font-mono text-sm font-semibold overflow-x-auto',
  'MultilineCode',
);

export const List = createComponent('ul', 'my-6 ml-6 list-disc [&>li]:mt-2', 'List');

export const Quote = createComponent('blockquote', 'mt-6 border-l-2 pl-6 italic', 'Quote');

export interface TableProps extends React.ComponentPropsWithoutRef<'table'> {
  /** Classes applied to the scrollable wrapper `div` around the table. */
  wrapperClassName?: string;
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, wrapperClassName, ...props }, ref) => (
    <div className={cn('my-6 w-full overflow-y-auto', wrapperClassName)}>
      <table ref={ref} className={cn('w-full', className)} {...props} />
    </div>
  ),
);
Table.displayName = 'Table';

export const Tr = createComponent('tr', 'm-0 border-t p-0 even:bg-muted', 'Tr');

export const Th = createComponent(
  'th',
  'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
  'Th',
);

export const Td = createComponent(
  'td',
  'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
  'Td',
);
