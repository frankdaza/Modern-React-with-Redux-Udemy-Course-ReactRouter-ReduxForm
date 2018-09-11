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
      </div>
    );
  }

  renderTextAreaField(field) {
    return (
      <div className='form-group'>
        <label>{ field.label }</label>
        <textarea
          className='form-control'>

        </textarea>
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

export default reduxForm({
  form: 'PostNewForm'
})(PostNew);