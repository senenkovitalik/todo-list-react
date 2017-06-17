import React from 'react';

class TaskNameInput extends React.Component {
  render() {
    return (
      <div className="modal-body">
        <div className="form-group">
          <label htmlFor="task-description">What need to do?</label>
          <input type="text" className="form-control" id="task-description" placeholder="Add task description" />
        </div>
      </div>
    );
  }
}

export default TaskNameInput;
