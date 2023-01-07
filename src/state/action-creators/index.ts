import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
