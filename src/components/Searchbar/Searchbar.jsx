import { Component } from 'react';
import PropTypes from 'prop-types';
// import { Formik } from 'formik';
// import * as yup from 'yup';

import {
  SearchbarStyled,
  SearchForm,
  SearchFormInput,
  BtnSearchForm,
  SearchFormBtnLabel,
} from 'components/Searchbar/Searchbar.styled';
import { FiSearch } from 'react-icons/fi';

/*
const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const schema = yup.object().shape({
  name: yup.string().matches(nameRegExp, 'Name is not valid'),
});
*/

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

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

/*

  return (
<SearchField>
  <Formik
    initialValues={initialValues}
    validationSchema={schema}
    onSubmit={handleSubmit}
  >
    <SearchinForm autoComplete="off">
      <BtnSearchForm type="submit">
        <span>Search</span>
      </BtnSearchForm>

      <InputSearchForm
        type="text"
        name="name"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      ></InputSearchForm>
      <Error name="name" component="div" />
    </SearchinForm>
  </Formik>
</SearchField>
  );
};

*/
