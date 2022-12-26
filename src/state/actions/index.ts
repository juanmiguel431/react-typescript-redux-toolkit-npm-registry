import { ActionType } from '../action-types';

interface SearchRepositoriesAction {
  type: ActionType.SearchRepositories;
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.SearchRepositoriesSuccess;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SearchRepositoriesError,
  payload: string;
}

export type MyAction =  SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;
