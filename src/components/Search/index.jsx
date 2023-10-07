import React from 'react';
import Form from 'react-bootstrap/Form';
import styles from './Search.module.css';

function Search({ searchQuery, onSearch }) {
  const handleSearch = (e) => {
    const query = e.target.value;
    onSearch(query);
  };

  return (
    <div>
      <Form className={styles.searchBar}>
        <Form.Control
          type='search'
          placeholder='Search'
          className='me-2'
          aria-label='Search'
          onChange={handleSearch}
          value={searchQuery}
        />
      </Form>
    </div>
  );
}

export default Search;
