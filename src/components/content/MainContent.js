import React from 'react';
import NewTaskButton from "./NewTaskButton";
import ModalWindow from "./modal/ModalWindow";
import TaskList from "./tasklist/TaskList";

class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          "id": "5944f3b18e6d7ba0bdff2fef",
          "value": "ad pariatur occaecat eiusmod",
          "status": true
        },
        {
          "id": "5944f3b10518a0481598f8a0",
          "value": "ex ut occaecat do",
          "status": false
        },
        {
          "id": "5944f3b1cd356c1ea93dcc70",
          "value": "eiusmod quis excepteur cillum",
          "status": true
        },
        {
          "id": "5944f3b1187f83865e2f2217",
          "value": "exercitation ea officia esse",
          "status": false
        },
        {
          "id": "5944f3b1234bc598be8bd553",
          "value": "eiusmod dolor id reprehenderit",
          "status": true
        },
        {
          "id": "5944f3b1fb8add4c9be2012f",
          "value": "cupidatat ullamco nisi eu",
          "status": true
        }
      ]
    };
  }

  render() {
    return (
      <div className="container-fluid" style={{marginTop: 50 + 'px'}}>
        <div className="row" style={{marginTop: 20 + 'px'}}>
          <div className="col-xs-12 col-md-8 col-md-offset-2">
            <TaskList tasks={this.state.tasks} />
          </div>
        </div>
        <NewTaskButton />
        <ModalWindow />
      </div>
    );
  }
}

export default MainContent;
