import { MyAction } from '../actions';
import { ActionType } from '../action-types';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

export const reducer = (state: RepositoriesState, action: MyAction): RepositoriesState => {
  switch (action.type) {
    case ActionType.SearchRepositories:
      return { loading: true, error: null, data: [] };
    case ActionType.SearchRepositoriesSuccess:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SearchRepositoriesError:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
}
