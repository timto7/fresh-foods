import { ReactNode } from 'react';

import { render, screen } from '@testing-library/react';

import Button from './Button';
import { ThemeContextProvider } from '../themes/ThemeContext';

// HOC to wrap the Button element inside the theme context
const withThemeContext = (element: ReactNode) => (
  <ThemeContextProvider>{element}</ThemeContextProvider>
);

describe('Button', () => {
  it('applies the child text as the button title', () => {
    render(withThemeContext(<Button>Hello</Button>));

    expect(screen.getByRole('button')).toHaveTextContent('Hello');
  });

  it('applies the default type of "button"', () => {
    render(withThemeContext(<Button>Hello</Button>));

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('applies a specific type if provided', () => {
    render(withThemeContext(<Button type="submit">Hello</Button>));

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('applies a valid attribute to the element', () => {
    render(withThemeContext(<Button aria-label="test">Hello</Button>));

    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'test');
  });

  it('correctly disables', () => {
    render(withThemeContext(<Button disabled>Hello</Button>));

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('handles click events', () => {
    const mockCallback = jest.fn();

    render(
      withThemeContext(<Button onClick={() => mockCallback()}>Hello</Button>)
    );

    screen.getByRole('button').click();

    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});
