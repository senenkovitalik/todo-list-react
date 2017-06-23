import React from 'react';

class Popover extends React.Component {
  render() {
    return (
      <div
        style={{
          ...this.props.style,
          position: 'absolute'
        }}>
        <ul className="popover-content">
          { this.props.filter !== 'ACTIVE_TASK' &&
            <li key={1}><a href='#' onClick={(e) => { e.preventDefault(); this.props.setFilter('ACTIVE_TASK'); }}>Show active</a></li>
          }
          { this.props.filter !== 'COMPLETED_TASK' &&
            <li key={2}><a href='#' onClick={(e) => {e.preventDefault(); this.props.setFilter('COMPLETED_TASK'); }}>Show completed</a></li>
          }
          { false &&
            <li key={3}><a href='#'>Select all</a></li>
          }
          { false &&
            <li key={4}><a href='#'>Deselect all</a></li>
          }
          { false &&
            <li key={5}><a href='#'>Remove task(s)</a></li>
          }
        </ul>
      </div>
    );
  }
}

export default Popover;
