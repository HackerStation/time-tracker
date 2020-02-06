import React from 'react';
import Timer from './Timer';
import TimerForm from './TimerForm';

class EditableTimer extends React.Component {
  state = {
    editFormOpen: false
  };
  render() {
    const { title, project, elapsed, runningSince } = this.props;
    if (this.state.editFormOpen) {
      return <TimerForm title={title} project={project} />;
    } else {
      return (
        <Timer
          title={title}
          project={project}
          elapsed={elapsed}
          runningSince={runningSince}
          handleEdit={() => this.setState({ editFormOpen: true })}
        />
      );
    }
  }
}

export default EditableTimer;
