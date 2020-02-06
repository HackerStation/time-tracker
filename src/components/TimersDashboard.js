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

  handleCreateFormSubmit = timer => {
    const newTimer = { ...timer };
    newTimer.id = uuidv4();
    newTimer.elapsed = '1114654';
    newTimer.runningSince = null;

    this.setState({
      timers: this.state.timers.concat(newTimer)
    });
  };

  handleUpdateFormSubmit = timerInfo => {
    const updatedTimers = this.state.timers.map(timer => {
      if (timer.id === timerInfo.id) {
        const newTimer = { ...timer };
        newTimer.id = uuidv4();
        newTimer.title = timerInfo.title;
        newTimer.project = timerInfo.project;
        return newTimer;
      }
      return timer;
    });

    this.setState({
      timers: updatedTimers
    });
  };

  render() {
    const { timers } = this.state;
    console.log(timers);
    return (
      <React.Fragment>
        <EditableTimerList
          timers={timers}
          onFormSubmit={this.handleUpdateFormSubmit}
        />
        <ToggleableTimerForm onFormSubmit={this.handleFormSubmit} />
      </React.Fragment>
    );
  }
}

export default TimersDashboard;
