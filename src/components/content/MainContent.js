import React from 'react';
import TaskList from "./tasklist/TaskList";
import { Button } from 'react-bootstrap';
import ModalWindow from "./ModalWindow";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        }
      ],
      show: false
    };
  }

  showModal() {
    this.setState({
      show: true
    });
  }

  hideModal() {
    this.setState({
      show: false
    });
  }

  handleSubmit(text) {
    alert('Try to add new Task: ' + text);
    this.hideModal();
  }

  render() {
    return (
      <div className="container-fluid" style={{marginTop: 50 + 'px'}}>
        <TaskList tasks={this.state.tasks} />
        <Button bsStyle="primary" bsSize="large" className="add-task" onClick={this.showModal}>+</Button>
        <ModalWindow show={this.state.show} onHide={this.hideModal} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default MainContent;
