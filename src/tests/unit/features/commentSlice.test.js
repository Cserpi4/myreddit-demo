// src/tests/unit/features/commentSlice.test.js
import commentReducer, { fetchComments, clearComments } from '../../../features/comment/commentSlice';

describe('commentSlice', () => {
  const initialState = {
    comments: [],
    loading: false,
    error: null,
  };

  it('should handle initial state', () => {
    expect(commentReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle clearComments', () => {
    const previousState = {
      comments: [{ id: '1', author: 'user1', body: 'Test comment', score: 5, created_utc: 123 }],
      loading: false,
      error: null,
    };
    expect(commentReducer(previousState, clearComments())).toEqual(initialState);
  });

  it('should handle fetchComments.pending', () => {
    const action = { type: fetchComments.pending.type };
    const state = commentReducer(initialState, action);
    expect(state.loading).toBe(true);
  });

  it('should handle fetchComments.fulfilled', () => {
    const mockComments = [
      { id: '1', author: 'user1', body: 'Test comment', score: 5, created_utc: 123 },
    ];
    const action = { type: fetchComments.fulfilled.type, payload: mockComments };
    const state = commentReducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.comments).toEqual(mockComments);
  });

  it('should handle fetchComments.rejected', () => {
    const action = {
      type: fetchComments.rejected.type,
      payload: 'Fetch failed',
      error: { message: 'Fetch failed' },
    };
    const state = commentReducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.error).toBe('Fetch failed');
  });
});