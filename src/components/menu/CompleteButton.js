import React from 'react';

class CompleteButton extends React.Component {
  render() {
    return (
      <li>
        <a href="#" className="navbar-action-btn" id="btn-complete">
          <span className="glyphicon glyphicon-check" />
        </a>
      </li>
    );
  }
}

export default CompleteButton;
