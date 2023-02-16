import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  SearchbarStyled,
  SearchForm,
  SearchFormInput,
  BtnSearchForm,
  SearchFormBtnLabel,
} from 'components/Searchbar/Searchbar.styled';

import { FiSearch } from 'react-icons/fi';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
    // console.log('handleChange', e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log('handleSubmit', query, { query });
    // onSubmit({ submitedQuery: query });
    onSubmit(query);
    // setSearch('');
  };

  return (
    <SearchbarStyled>
      <SearchForm onSubmit={handleSubmit}>
        <BtnSearchForm type="submit">
          <FiSearch />
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </BtnSearchForm>

        <SearchFormInput
          value={query}
          onChange={handleChange}
          name="search"
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarStyled>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

/*
class Searchbar extends Component {
  state = { search: '' };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    // this.reset();
  };

  reset() {
    this.setState({ search: '' });
  }

  render() {
    const { search } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <SearchbarStyled>
        <SearchForm onSubmit={handleSubmit}>
          <BtnSearchForm type="submit">
            <FiSearch />
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </BtnSearchForm>

          <SearchFormInput
            value={search}
            onChange={handleChange}
            name="search"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarStyled>
    );
  }
}
*/
