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
    this.props.onSubmit(text);
    this.hideModal();
  }

  render() {
    return (
      <div className="container-fluid" style={{marginTop: 50 + 'px'}}>
        <TaskList tasks={this.props.tasks} />

        <Button
          bsStyle="primary"
          bsSize="large"
          className="add-task"
          onClick={this.showModal}
        >+</Button>

        <ModalWindow
          show={this.state.show}
          onHide={this.hideModal}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default MainContent;
