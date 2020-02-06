import React from 'react';
import EditableTimer from './EditableTimer';

class EditableTimerList extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.timers.map(timer => (
          <EditableTimer {...timer} key={timer.id} />
        ))}
      </React.Fragment>
    );
  }
}

export default EditableTimerList;
