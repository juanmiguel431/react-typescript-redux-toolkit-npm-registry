import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../state/reducers/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
