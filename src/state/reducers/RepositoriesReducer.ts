import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

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

interface Response {
  objects: [
    {
      package: {
        name: string;
      }
    }
  ]
}

export const searchByTerm = createAsyncThunk<string[], string>(
  'repositories/searchByTerm',
  async (term): Promise<string[]> => {
    const { data }: { data: Response } = await axios.get('https://registry.npmjs.org/-/v1/search', {
      params: {
        text: term
      }
    });

    return data.objects.map((p) => {
      return p.package.name;
    });
  }
);

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
  return Object.assign<T, T>(target, source);
}

export const {} = repositoriesSlice.actions;

export const repositoriesReducer = repositoriesSlice.reducer;
