import React from 'react';
import NewTaskButton from "./NewTaskButton";
import ModalWindow from "./modal/ModalWindow";
import TaskList from "./tasklist/TaskList";

class MainContent extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-8 col-md-offset-2">
            <TaskList />
          </div>
        </div>
        <NewTaskButton />
        <ModalWindow />
      </div>
    );
  }
}

export default MainContent;
