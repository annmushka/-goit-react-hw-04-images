import '../styles.css';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';

export const SearchBar = props => {
  // state = {
  //   query: '',
  // };
  const [query, setQuery] = useState('');

  const handleChange = event => {
    //   this.setState({ query: event.target.value });
    // };
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.handleSubmit(query);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-Button">
          <BsSearch />
        </button>

        <input
          onChange={handleChange}
          value={query}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
