import axios from 'axios';
import { Dispatch} from 'redux';
import { ActionType } from '../action-types';
import { MyAction } from '../actions';

export const SearchRepositories = (term: string) => {
  return async (dispatch: Dispatch<MyAction>) => {
    dispatch({
      type: ActionType.SearchRepositories
    });

    try {
      const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: term
        }
      });
      const names = data.objects.map((p: any) => {
        return p.package.name;
      });

      dispatch({
        type: ActionType.SearchRepositoriesSuccess,
        payload: names
      });

    } catch (e) {
      if (e instanceof Error) {
        dispatch({
          type: ActionType.SearchRepositoriesError,
          payload: e.message
        })
      }
    }
  }
};
