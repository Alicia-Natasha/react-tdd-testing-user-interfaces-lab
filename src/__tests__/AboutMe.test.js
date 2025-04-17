import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutMe from '../AboutMe';

test('renders an image with correct alt text and src', () => {
  const { getByAltText } = render(<AboutMe />);
  const image = getByAltText('A photo of Alicia Natasha smiling at a park');
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', 'https://i.pinimg.com/736x/69/44/6b/69446bd3a50c1d1a52f9d876e6e5a117.jpg');
});

test('renders a heading with the text "About Me"', () => {
  render(<AboutMe />);
  const heading = screen.getByRole('heading', { level: 2, name: /about me/i });
  expect(heading).toBeInTheDocument();
});

test('renders a paragraph biography', () => {
  render(<AboutMe />);
  const paragraph = screen.getByText(/Hi, my name is Alicia Natasha/i);
  expect(paragraph).toBeInTheDocument();
});

test('renders a link to GitHub with correct href', () => {
  render(<AboutMe />);
  const link = screen.getByRole('link', { name: /github/i });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', 'https://github.com/Alicia-Natasha');
});

test('renders a link to LinkedIn with correct href', () => {
  render(<AboutMe />);
  const link = screen.getByRole('link', { name: /linkedin/i });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', 'https://api.linkedin.com/feed/?_l=en_US');
});
