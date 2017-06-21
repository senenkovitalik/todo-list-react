import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class ModalWindow extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      disabled: true,
      text: ''
    }
  }

  handleChange(event) {
    const text = event.target.value;
    this.setState({
      text: text,
      disabled: (text.length <= 0)
    });
  }

  render() {
    return (
      <Modal
        {...this.props}
        show={this.props.show}
        onHide={this.props.onHide}
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
          <Button
            onClick={(e) => {
              e.preventDefault();
              this.props.onSubmit(this.state.text)}
            }
            bsStyle="success"
            disabled={this.state.disabled}
          >Add task</Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>

      </Modal>
    );
  }
}

export default ModalWindow;