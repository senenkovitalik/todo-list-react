import React from 'react';
import MenuBar from './menu/MenuBar';
import MainContent from "./content/MainContent";

class TODOList extends React.Component {
  render() {
    return (
      <div>
        <MenuBar />
        <MainContent />
      </div>
    );
  }
}

export default TODOList;
