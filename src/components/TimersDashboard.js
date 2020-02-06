import React from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import uuidv4 from 'uuid/v4';

class TimersDashboard extends React.Component {
  state = {
    timers: [
      {
        title: 'Learn React',
        project: 'Web Domination',
        id: uuidv4(),
        elapsed: '8986300',
        runningSince: null
      },
      {
        title: 'Learn extreme ironing',
        project: 'World domination',
        id: uuidv4(),
        elapsed: '3890985',
        runningSince: null
      }
    ]
  };
  render() {
    const { timers } = this.state;
    return (
      <React.Fragment>
        <EditableTimerList timers={timers} />
        <ToggleableTimerForm />
      </React.Fragment>
    );
  }
}

export default TimersDashboard;
