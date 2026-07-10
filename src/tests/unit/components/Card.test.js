import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../../../components/Card';

jest.mock('react-markdown', () => {
  return function MockReactMarkdown({ children }) {
    return <div>{children}</div>;
  };
});

const mockPost = {
  id: '123',
  title: 'Test title',
  thumbnail: null,
  preview: null,
  subreddit: 'testsubreddit',
  subreddit_name_prefixed: 'c/testsubreddit',
  author: 'testuser',
  ups: 42,
  created_utc: 1700000000,
  num_comments: 3,
  sr_detail: { icon_img: null },
  subreddit_icon_img: null,
};

test('Card renders post title', () => {
  render(<Card post={mockPost} />);
  expect(screen.getByText('Test title')).toBeInTheDocument();
});

test('Card renders author name', () => {
  render(<Card post={mockPost} />);
  expect(screen.getByText('testuser')).toBeInTheDocument();
});

test('Card renders comment count', () => {
  const { container } = render(<Card post={mockPost} />);
  const commentButton = container.querySelector('.comment-toggle');
  expect(commentButton).toHaveTextContent('3');
});