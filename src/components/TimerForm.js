import React from 'react';

class TimerForm extends React.Component {
  render() {
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <React.Fragment>
        <form className='mt-5' style={{ width: '100%' }}>
          <div className='form-group'>
            <label>Title</label>
            <input
              type='text'
              className='form-control'
              placeholder='Title'
              defaultValue={this.props.title}
            />
          </div>
          <div className='form-group'>
            <label>Project</label>
            <input
              type='text'
              className='form-control'
              placeholder='Project'
              defaultValue={this.props.project}
            />
          </div>
          <div
            className='btn-group d-flex'
            role='group'
            aria-label='Basic example'
          >
            <button type='button' className='btn btn-primary'>
              {submitText}
            </button>
            <button type='button' className='btn btn-danger ml-2'>
              Cancel
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default TimerForm;
