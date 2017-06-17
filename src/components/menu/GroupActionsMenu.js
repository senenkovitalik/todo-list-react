import React from 'react';

class GroupActionsMenu extends React.Component {
  render() {
    return (
      <ul className='list-unstyled' id='group-action-panel'>
        <li><a href='#' data-action='show-active'>Show active</a></li>
        <li><a href='#' data-action='show-completed'>Show completed</a></li>
        <li><a href='#' data-action='select-all'>Select all</a></li>
        <li><a href='#' data-action='deselect-all'>Deselect all</a></li>
        <li><a href='#' data-action='remove-selected'>Remove task(s)</a></li>
      </ul>
    );
  }
}

export default GroupActionsMenu;
