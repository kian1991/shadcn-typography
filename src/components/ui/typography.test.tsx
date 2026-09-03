import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import {
  H1,
  H2,
  H3,
  H4,
  InlineCode,
  Large,
  Lead,
  List,
  MultilineCode,
  Muted,
  P,
  Quote,
  Small,
  Table,
  Td,
  Th,
  Tr,
} from './typography';

const cases = [
  { name: 'H1', Component: H1, tag: 'H1', cls: 'text-4xl' },
  { name: 'H2', Component: H2, tag: 'H2', cls: 'text-3xl' },
  { name: 'H3', Component: H3, tag: 'H3', cls: 'text-2xl' },
  { name: 'H4', Component: H4, tag: 'H4', cls: 'text-xl' },
  { name: 'P', Component: P, tag: 'P', cls: 'leading-7' },
  { name: 'Lead', Component: Lead, tag: 'P', cls: 'text-muted-foreground' },
  { name: 'Large', Component: Large, tag: 'DIV', cls: 'text-lg' },
  { name: 'Small', Component: Small, tag: 'SMALL', cls: 'leading-none' },
  { name: 'Muted', Component: Muted, tag: 'P', cls: 'text-muted-foreground' },
  { name: 'InlineCode', Component: InlineCode, tag: 'CODE', cls: 'bg-muted' },
  { name: 'MultilineCode', Component: MultilineCode, tag: 'PRE', cls: 'overflow-x-auto' },
  { name: 'List', Component: List, tag: 'UL', cls: 'list-disc' },
  { name: 'Quote', Component: Quote, tag: 'BLOCKQUOTE', cls: 'italic' },
] as const;

describe.each(cases)('$name', ({ name, Component, tag, cls }) => {
  it(`renders a <${tag.toLowerCase()}> with its default classes`, () => {
    render(<Component data-testid="el">content</Component>);
    const el = screen.getByTestId('el');
    expect(el.tagName).toBe(tag);
    expect(el).toHaveClass(cls);
    expect(el).toHaveTextContent('content');
  });

  it('forwards refs', () => {
    const ref = createRef<HTMLElement>();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const AnyComponent = Component as any;
    render(<AnyComponent ref={ref}>content</AnyComponent>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
    expect(ref.current?.tagName).toBe(tag);
  });

  it('passes through arbitrary props', () => {
    render(
      <Component id="custom" aria-label="label" data-testid="el">
        content
      </Component>,
    );
    const el = screen.getByTestId('el');
    expect(el).toHaveAttribute('id', 'custom');
    expect(el).toHaveAttribute('aria-label', 'label');
  });

  it('has a displayName', () => {
    expect(Component.displayName).toBe(name);
  });
});

describe('className merging', () => {
  it('lets consumer classes override conflicting defaults', () => {
    render(
      <H1 className="text-2xl" data-testid="el">
        x
      </H1>,
    );
    const el = screen.getByTestId('el');
    expect(el).toHaveClass('text-2xl');
    expect(el).not.toHaveClass('text-4xl');
    expect(el).toHaveClass('scroll-m-20');
  });

  it('appends non-conflicting classes', () => {
    render(
      <P className="text-red-500" data-testid="el">
        x
      </P>,
    );
    expect(screen.getByTestId('el')).toHaveClass('leading-7', 'text-red-500');
  });
});

describe('Table', () => {
  it('wraps the table in a scroll container and forwards the ref to <table>', () => {
    const ref = createRef<HTMLTableElement>();
    render(
      <Table ref={ref} className="border" wrapperClassName="my-0" data-testid="table">
        <thead>
          <Tr>
            <Th align="right">Head</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>Cell</Td>
          </Tr>
        </tbody>
      </Table>,
    );
    const table = screen.getByTestId('table');
    expect(table.tagName).toBe('TABLE');
    expect(table).toHaveClass('w-full', 'border');
    expect(ref.current).toBe(table);

    const wrapper = table.parentElement;
    expect(wrapper?.tagName).toBe('DIV');
    expect(wrapper).toHaveClass('overflow-y-auto', 'my-0');
    expect(wrapper).not.toHaveClass('my-6');

    expect(screen.getByText('Head')).toHaveAttribute('align', 'right');
    expect(screen.getByText('Head')).toHaveClass('font-bold');
    expect(screen.getByText('Cell').tagName).toBe('TD');
    expect(screen.getByText('Cell').closest('tr')).toHaveClass('even:bg-muted');
  });
});
