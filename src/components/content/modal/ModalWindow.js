import React from 'react';
import AddTaskButton from './AddTaskButton';
import TaskNameInput from "./TaskNameInput";
import CancelButton from './CancelButton';

class ModalWindow extends React.Component {
  render() {
    return (
      <div id="modal-add-task" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <AddTaskButton />
            <TaskNameInput />
            <CancelButton />
          </div>
        </div>
      </div>
    );
  }
}

export default ModalWindow;
