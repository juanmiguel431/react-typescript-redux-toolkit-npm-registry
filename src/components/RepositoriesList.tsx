import React from 'react';
import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useAppSelector } from '../hooks/useAppSelector';

export const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchByTerm } = useActions();
  const { loading, error, data } = useAppSelector(state => state.repositories);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    searchByTerm(term);
  };

  return (
    <div className="repositories-list">
      <form onSubmit={onSubmit}>
        <input type="text" onChange={e => setTerm(e.target.value)} value={term}/>
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!loading && !error &&
        data.map(name => <div>{name}</div>)
      }
    </div>
  );
};
