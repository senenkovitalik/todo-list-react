import React from 'react';

class UncompleteButton extends React.Component {
  render() {
    return (
      <li>
        <a href="#" className="navbar-action-btn" id="btn-uncomplete">
          <span className="glyphicon glyphicon-unchecked" />
        </a>
      </li>
    );
  }
}

export default UncompleteButton;
