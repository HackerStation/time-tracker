import React from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

class TimersDashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <EditableTimerList />
        <ToggleableTimerForm isOpen={true} />
      </React.Fragment>
    );
  }
}

export default TimersDashboard;
