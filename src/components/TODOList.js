import React from 'react';
import MenuBar from './menu/MenuBar';
import MainContent from "./content/MainContent";
import TaskLocalStorage from '../DAO/TaskLocalStorage';

class TODOList extends React.Component {
  constructor(props) {
    super(props);
    this.addNewTask = this.addNewTask.bind(this);
    this.state = {
      tasks: TaskLocalStorage.getAll(),
      filter: 'active'
    };
  }

  addNewTask(text) {
    let arr = this.state.tasks.slice();
    arr.push({
      id: TODOList.getUniqueNumber().toString(),
      value: text,
      status: true
    });

    TaskLocalStorage.saveAll(arr);

    this.setState({
      tasks: arr
    });
  }

  static getUniqueNumber() {
    let date = new Date();
    return date.getSeconds() * Math.pow(10, 5)
      + date.getMilliseconds() * Math.pow(10, 3)
      + Math.floor(Math.random() * (999 - 100)) + 100;
  }

  render() {
    return (
      <div>
        <MenuBar />
        <MainContent
          tasks={this.state.tasks}
          filter={this.state.filter}
          onSubmit={this.addNewTask}
        />
      </div>
    );
  }
}

export default TODOList;
