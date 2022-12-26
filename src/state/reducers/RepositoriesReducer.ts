
interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

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

type Action =  SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;

enum ActionType {
  SearchRepositories = 'search_repositories',
  SearchRepositoriesSuccess = 'search_repositories_success',
  SearchRepositoriesError = 'search_repositories_error',
}

export const reducer = (state: RepositoriesState, action: Action): RepositoriesState => {
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
