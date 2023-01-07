import { createSlice } from '@reduxjs/toolkit'
import { searchByTerm } from '../action-creators';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState: RepositoriesState = {
  loading: false,
  error: null,
  data: []
};

export const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchByTerm.pending, (state) => {
      const newState = { ...state, loading: true, error: null, data: [] };
      updateObject(state, newState);
    });
    builder.addCase(searchByTerm.rejected, (state, action) => {
      const newState = { ...state, loading: false, error: `Error: ${action.error.message}`, data: [] };
      updateObject(state, newState);
    });
    builder.addCase(searchByTerm.fulfilled, (state, action) => {
      const newState = { ...state, loading: false, error: null, data: action.payload };
      updateObject(state, newState);
    });
  }
});

export const updateObject = <T extends {}>(target: T, source: T): T => {
  return Object.assign(target, source);
}

// export const {} = repositoriesSlice.actions;

export const repositoriesReducer = repositoriesSlice.reducer;
