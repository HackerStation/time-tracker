import React from 'react';
import EditableTimer from './EditableTimer';

class EditableTimerList extends React.Component {
  handleFormSumbit = timer => {
    this.props.onFormSubmit(timer);
  };
  render() {
    return (
      <React.Fragment>
        {this.props.timers.map(timer => (
          <EditableTimer
            {...timer}
            key={timer.id}
            onFormSubmit={this.handleFormSumbit}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default EditableTimerList;
