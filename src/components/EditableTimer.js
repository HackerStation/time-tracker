import React from 'react';
import Timer from './Timer';
import TimerForm from './TimerForm';

class EditableTimer extends React.Component {
  state = {
    editFormOpen: false
  };

  handleFormClose = () => {
    this.setState({ editFormOpen: false });
  };

  handleFormSubmit = timer => {
    this.props.onFormSubmit(timer);
    this.setState({ editFormOpen: false });
  };

  render() {
    const { id, title, project, elapsed, runningSince } = this.props;
    if (this.state.editFormOpen) {
      return (
        <TimerForm
          id={id}
          title={title}
          project={project}
          onFormClose={this.handleFormClose}
          onFormSubmit={this.handleFormSubmit}
        />
      );
    } else {
      return (
        <Timer
          id={id}
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
