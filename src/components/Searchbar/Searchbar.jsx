import { Component } from 'react';
import PropTypes from 'prop-types';
// import { Formik } from 'formik';
// import * as yup from 'yup';
// import PropTypes from 'prop-types';

/*
import // FormContainer,
SearchField,
SearchinForm,
InputSearchForm,
BtnSearchForm,
Error,
'components/Searchbar/Searchbar.styled';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const schema = yup.object().shape({
  name: yup.string().matches(nameRegExp, 'Name is not valid'),
});
*/

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({ search: '' });
  }

  render() {
    const { search } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          value={search}
          onChange={handleChange}
          name="search"
          // className="input"
          // type="text"
          // autoComplete="off"
          // autoFocus
          placeholder="Search images and photos"
        />
      </form>
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
