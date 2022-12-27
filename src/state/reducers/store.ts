import { configureStore } from '@reduxjs/toolkit'
import { repositoriesReducer } from './RepositoriesReducer';

export const store = configureStore({
  reducer: {
    repositories: repositoriesReducer
  },
})
