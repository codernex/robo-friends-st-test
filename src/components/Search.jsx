import React from 'react';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <form className='search' onSubmit={e => e.preventDefault()}>
      <input
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        type='text'
        placeholder='search friends'
      />
    </form>
  );
};

export default Search;
