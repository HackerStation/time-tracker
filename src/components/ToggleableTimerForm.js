import React from 'react';
import TimerForm from './TimerForm';
import { FaPlusSquare } from 'react-icons/fa';

class ToggleableTimerForm extends React.Component {
  state = {
    isOpen: false
  };
  render() {
    if (this.state.isOpen) {
      return <TimerForm />;
    } else {
      return (
        <div className='btn-container text-center'>
          <button className='btn btn-secondary mt-5'>
            <FaPlusSquare size={36} />
          </button>
        </div>
      );
    }
  }
}

export default ToggleableTimerForm;
