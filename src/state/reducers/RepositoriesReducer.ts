import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios/index';

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
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(searchByTerm.pending, (state) => {
      state = { loading: true, error: null, data: [] };
    });
    builder.addCase(searchByTerm.rejected, (state, action) => {
      state = { loading: false, error: 'This is supposed to be an error.' , data: [] };
    });
    builder.addCase(searchByTerm.fulfilled, (state, action) => {
      state = { loading: false, error: null, data: action.payload };
    });
  }
});

// export const {  } = repositoriesSlice.actions;
export const repositoriesReducer = repositoriesSlice.reducer;
