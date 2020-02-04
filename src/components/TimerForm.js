import React from 'react';

class TimerForm extends React.Component {
  render() {
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <div className='form'>
        <div className='input-list'>
          <div className='input-list-item'>
            <label>Title</label>
            <input type='text' defaultValue={this.props.title} />
          </div>
          <div className='input-list-item'>
            <label>Project</label>
            <input type='text' defaultValue={this.props.project} />
          </div>
          <div className='button-group'>
            <button className='btn btn-blue'>{submitText}</button>
            <button className='btn btn-red'>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerForm;
