import React from 'react';

class GroupActionsButton extends React.Component {
  render() {
    return (
      <li>
        <a href="#" className="navbar-action-btn" id="btn-action" data-toggle="popover">
          <span className="glyphicon glyphicon-option-vertical" />
        </a>
      </li>
    );
  }
}

export default GroupActionsButton;
