import React from 'react';

class TimerForm extends React.Component {
  state = {
    title: this.props.title || '',
    project: this.props.project || ''
  };

  handleTitleChange = title => {
    this.setState({
      title: title
    });
  };

  handleProjectChange = project => {
    this.setState({
      project: project
    });
  };

  handleSubmit = () => {
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.state.title,
      project: this.state.project
    });
  };

  render() {
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <React.Fragment>
        <form className='mt-5' style={{ width: '100%' }}>
          <div className='form-group'>
            <label className='font-weight-bold'>Title</label>
            <input
              type='text'
              className='form-control'
              placeholder='Title'
              value={this.state.title}
              onChange={e => this.handleTitleChange(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label className='font-weight-bold'>Project</label>
            <input
              type='text'
              className='form-control'
              placeholder='Project'
              value={this.state.project}
              onChange={e => this.handleProjectChange(e.target.value)}
            />
          </div>
          <div
            className='btn-group d-flex'
            role='group'
            aria-label='Basic example'
          >
            <button
              type='button'
              className='btn btn-outline-primary'
              onClick={this.handleSubmit}
            >
              {submitText}
            </button>
            <button
              type='button'
              className='btn btn-outline-danger ml-2'
              onClick={this.props.onFormClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default TimerForm;
