import React from 'react';
import EditableTimer from './EditableTimer';

class EditableTimerList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <EditableTimer
          title='Learn React'
          project='Web Domination'
          elapsed='8986300'
          runningSince={null}
          editFormOpen={false}
        />
        <EditableTimer
          title='Lean extreme ironing'
          project='World domination'
          elapsed='3890985'
          runningSince={null}
          editFormOpen={true}
        />
      </React.Fragment>
    );
  }
}

export default EditableTimerList;
