import React from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

class TimersDashboard extends React.Component {
  state = {
    isOpen: true,
    timers: [
      {
        title: 'Learn React',
        project: 'Web Domination',
        elapsed: '8986300',
        runningSince: null
      },
      {
        title: 'Learn extreme ironing',
        project: 'World domination',
        elapsed: '3890985',
        runningSince: null
      }
    ]
  };
  render() {
    const { timers, isOpen } = this.state;
    return (
      <React.Fragment>
        <EditableTimerList timers={timers} />
        <ToggleableTimerForm isOpen={isOpen} />
      </React.Fragment>
    );
  }
}

export default TimersDashboard;
