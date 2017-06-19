import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { Overlay } from 'react-bootstrap';
import Popover from './Popover';


class MenuBar extends React.Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      show: false
    };
  }

  toggle() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <Navbar fixedTop={true} fluid={true}>
        <Navbar.Header>
          <Navbar.Brand>ToDo List</Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem href="#" eventKey={1}>
            <Glyphicon glyph="unchecked" />
          </NavItem>
          <NavItem href="#" eventKey={2}>
            <Glyphicon glyph="check" />
          </NavItem>
          <NavItem href="#" eventKey={3} ref="target" onClick={this.toggle}>
            <Glyphicon glyph="option-vertical" />
          </NavItem>

          <Overlay
            animation={true}
            show={this.state.show}
            onHide={() => this.setState({ show: false })}
            placement="left"
            container={this}
            target={() => ReactDOM.findDOMNode(this.refs.target)}
            rootClose>

            <Popover />

          </Overlay>
        </Nav>
      </Navbar>
    );
  }
}

export default MenuBar;
