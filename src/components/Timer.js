import React from 'react';
import { renderElapsedString } from '../utils/utils';

class Timer extends React.Component {
  render() {
    const { title, project, elapsed } = this.props;
    const elapsedString = renderElapsedString(elapsed);
    return (
      <div className='timer'>
        <h1>{title}</h1>
        <h3>{project}</h3>
        <div className='timer-handle'>{elapsedString}</div>
        <div className='timer-action'></div>
        <button className='timer-start'>Start</button>
      </div>
    );
  }
}

export default Timer;
