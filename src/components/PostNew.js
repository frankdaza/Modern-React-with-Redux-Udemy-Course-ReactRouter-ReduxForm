import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class PostNew extends Component {

  renderField(field) {
    return (
      <div className='form-group'>
        <label>{ field.label }</label>
        <input
          className='form-control'
          type='text'
          {...field.input}>
        </input>
        { field.meta.error }
      </div>
    );
  }

  renderTextAreaField(field) {
    return (
      <div className='form-group'>
        <label>{ field.label }</label>
        <textarea className='form-control'>
        </textarea>
        { field.meta.error }
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field
          label='Title'
          name='title'
          component={ this.renderField } >
        </Field>

        <Field
          label='Categories'
          name='categories'
          component={ this.renderField } >
        </Field>

        <Field
          label='Post Content'
          name='content'
          component={ this.renderTextAreaField } >
        </Field>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  // Validate the inputs from values
  if (!values.title) {
    errors.title = 'Enter a title';
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }

  if (!values.content) {
    errors.content = 'Enter some content please!';
  }
  
  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid 

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(PostNew);