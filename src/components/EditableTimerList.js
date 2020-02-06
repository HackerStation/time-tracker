import React from 'react';
import EditableTimer from './EditableTimer';

class EditableTimerList extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.timers.map(timer => (
          <EditableTimer {...timer} />
        ))}
      </React.Fragment>
    );
  }
}

export default EditableTimerList;
