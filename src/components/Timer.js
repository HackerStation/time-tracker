import React from 'react';
import { renderElapsedString } from '../utils/utils';
import { FaRegEdit, FaTrash } from 'react-icons/fa';

class Timer extends React.Component {
  styles = {
    card: {
      width: '100%'
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    button: {
      border: 'none',
      background: '#fff',
      padding: '0'
    }
  };
  handleEditClick = () => {
    this.props.handleEdit();
  };
  render() {
    const { title, project, elapsed } = this.props;
    const elapsedString = renderElapsedString(elapsed);
    return (
      <div className='card mt-3' style={this.styles.card}>
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <h6 className='card-subtitle mb-2 text-muted'>{project}</h6>
          <h1 className='card-text text-center mt-4 mb-4'>{elapsedString}</h1>
          <div className='btn-group' style={this.styles.buttonGroup}>
            <button
              className='card-link'
              style={this.styles.button}
              onClick={this.handleEditClick}
            >
              <FaRegEdit />
            </button>
            <button className='card-link' style={this.styles.button}>
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
