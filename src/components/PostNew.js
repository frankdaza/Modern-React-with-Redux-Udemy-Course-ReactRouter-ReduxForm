import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../actions/index';


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

        <div className='text-danger'>
          { field.meta.touched ? field.meta.error : '' }
        </div>
      </div>
    );
  }

  renderTextAreaField(field) {
    return (
      <div className='form-group'>
        <label>{ field.label }</label>
        <textarea className='form-control'>
        </textarea>       
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });    
  }

  render() {
    const { handleSubmit } = this.props; 

    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
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

        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
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

  
  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid 

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(
  connect(null, { createPost })(PostNew)
);