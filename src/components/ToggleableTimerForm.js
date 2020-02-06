import React from 'react';
import TimerForm from './TimerForm';
import { FaPlusSquare } from 'react-icons/fa';

class ToggleableTimerForm extends React.Component {
  state = {
    isOpen: false
  };
  handleFormClose = () => {
    this.setState({ isOpen: false });
  };

  handleFormSubmit = timer => {
    this.props.onFormSubmit(timer);
    this.setState({ isOpen: false });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <TimerForm
          onFormClose={this.handleFormClose}
          onFormSubmit={this.handleFormSubmit}
        />
      );
    } else {
      return (
        <div className='btn-container text-center'>
          <button
            className='btn btn-outline-primary mt-5'
            onClick={() => this.setState({ isOpen: true })}
          >
            <FaPlusSquare size={36} />
          </button>
        </div>
      );
    }
  }
}

export default ToggleableTimerForm;
