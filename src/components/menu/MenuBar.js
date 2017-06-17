import React from 'react';
import Logo from './Logo';
import UncompleteButton from './UncompleteButton';
import CompleteButton from './CompleteButton';
import GroupActionsButton from './GroupActionsButton';

class MenuBar extends React.Component {
  render() {
    return (
      <div className="navbar navbar-fixed-top">
        <div className="container-fluid">
          <Logo />
          <ul className="nav navbar-nav navbar-right">
            <UncompleteButton />
            <CompleteButton />
            <GroupActionsButton />
          </ul>
        </div>
      </div>
    );
  }
}

export default MenuBar;
