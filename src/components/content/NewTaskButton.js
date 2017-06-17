import React from 'react';

class NewTaskButton extends React.Component {
  render() {
    return (
      <button id="btn-add-task" type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modal-add-task">+</button>
    );
  }
}

export default NewTaskButton;