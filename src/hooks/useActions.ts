import { bindActionCreators } from 'redux';
import * as actions from '../state/action-creators';
import { useAppDispatch } from './useAppDispatch';


export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(actions, dispatch);
};
