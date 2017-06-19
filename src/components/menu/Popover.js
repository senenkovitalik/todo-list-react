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
          <li key={1}><a href='#'>Show active</a></li>
          <li key={2}><a href='#'>Show completed</a></li>
          <li key={3}><a href='#'>Select all</a></li>
          <li key={4}><a href='#'>Deselect all</a></li>
          <li key={5}><a href='#'>Remove task(s)</a></li>
        </ul>
      </div>
    );
  }
}

export default Popover;
