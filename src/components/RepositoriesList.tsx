import React from 'react';
import { useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { searchByTerm } from '../state/reducers/RepositoriesReducer';

export const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(searchByTerm(term) as any);
  };

  return (
    <div className="repositories-list">
      <form onSubmit={onSubmit}>
        <input type="text" onChange={e => setTerm(e.target.value)} value={term}/>
        <button>Search</button>
      </form>
    </div>
  );
};
