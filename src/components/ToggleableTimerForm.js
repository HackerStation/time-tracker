import React from 'react';
import TimerForm from './TimerForm';

class ToggleableTimerForm extends React.Component {
  render() {
    if (this.props.isOpen) {
      return <TimerForm />;
    } else {
      return <button className='btn btn-basic'>Button Icon</button>;
    }
  }
}

export default ToggleableTimerForm;
