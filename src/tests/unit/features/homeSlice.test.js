// src/tests/unit/features/homeSlice.test.js
import homeReducer, { fetchPosts } from '../../../features/home/homeSlice';

describe('homeSlice', () => {
  const initialState = {
    posts: [],
    loading: false,
    error: null,
  };

  it('should handle initial state', () => {
    expect(homeReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle fetchPosts.pending', () => {
    const action = { type: fetchPosts.pending.type };
    const state = homeReducer(initialState, action);
    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  it('should handle fetchPosts.fulfilled', () => {
    const mockPost = {
      id: '1',
      title: 'Test post',
      subreddit: 'test',
      subreddit_name_prefixed: 'c/test',
      author: 'testuser',
      ups: 10,
      created_utc: 123456,
      num_comments: 2,
    };
    const action = {
      type: fetchPosts.fulfilled.type,
      payload: { data: { children: [{ data: mockPost }] } },
    };
    const state = homeReducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.posts).toEqual([mockPost]);
  });

  it('should handle fetchPosts.fulfilled with empty payload', () => {
    const action = {
      type: fetchPosts.fulfilled.type,
      payload: null,
    };
    const state = homeReducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.posts).toEqual([]);
  });

  it('should handle fetchPosts.rejected', () => {
    const action = {
      type: fetchPosts.rejected.type,
      payload: 'Network error',
      error: { message: 'Network error' },
    };
    const state = homeReducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.error).toBe('Network error');
    expect(state.posts).toEqual([]);
  });
});