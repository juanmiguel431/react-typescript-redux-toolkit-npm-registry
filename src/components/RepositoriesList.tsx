import React from 'react';
import { useState } from 'react';

export const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('JMPC');
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
