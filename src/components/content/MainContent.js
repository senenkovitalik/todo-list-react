import React from 'react';
import TaskList from "./tasklist/TaskList";
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
      show: false,
      disabled: true,
      text: ''
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

  handleChange(event) {
    const text = event.target.value;
    this.setState({
      text: text,
      disabled: (text.length <= 0)
    });
  }

  handleSubmit(event) {
    alert('Try to add new Task: ' + this.state.text);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container-fluid" style={{marginTop: 50 + 'px'}}>
        <div className="row" style={{marginTop: 20 + 'px'}}>
          <div className="col-xs-12 col-md-8 col-md-offset-2">
            <TaskList tasks={this.state.tasks} />
          </div>
        </div>

        <Button bsStyle="primary" bsSize="large" className="add-task" onClick={this.showModal}>+</Button>

        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.hideModal}
          dialogClassName="custom-modal"
        >

          <Modal.Header closeButton>
            <Modal.Title>New Task</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="form-group">
              <label htmlFor="task-description">What need to do?</label>
              <input
                onChange={this.handleChange}
                type="text"
                className="form-control"
                placeholder="Add task description"
                autoFocus
              />
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.handleSubmit} bsStyle="success" disabled={this.state.disabled}>Add task</Button>
            <Button onClick={this.hideModal}>Close</Button>
          </Modal.Footer>

        </Modal>

      </div>
    );
  }
}

export default MainContent;
