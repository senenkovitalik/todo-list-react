import React from 'react';
import MenuBar from './menu/MenuBar';
import MainContent from "./content/MainContent";
import TaskStatusEnum from '../models/TaskStatusEnum';
import TaskLocalStorage from '../DAO/TaskLocalStorage';
import Task from '../models/Task';
import _ from 'lodash';

class TODOList extends React.Component {
  constructor(props) {
    super(props);
    this.handleComplete = this.handleComplete.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
    this.state = {
      tasks: TaskLocalStorage.getAll(),
      filter: 'active'
    };
  }

  handleComplete(event, taskObj) {
    const index = _.findIndex(this.state.tasks, taskObj);

    let task = _.assign(new Task(), taskObj);

    if (taskObj.status.code === "ACTIVE_TASK") {
      task.status = new TaskStatusEnum().getByCode("COMPLETED_TASK");
    } else {
      task.status = new TaskStatusEnum().getByCode("ACTIVE_TASK");
    }

    let tasks = _.slice(this.state.tasks);
    tasks.splice(index, 1, task);
    this.setState({
      tasks: tasks
    });

    TaskLocalStorage.saveAll(tasks);
  }

  addNewTask(text) {
    let arr = this.state.tasks.slice();
    arr.push(new Task(
      this.getUniqueNumber(),
      text,
      new TaskStatusEnum().getByCode("ACTIVE_TASK"),
    ));

    TaskLocalStorage.saveAll(arr);

    this.setState({
      tasks: arr
    });
  }

  getUniqueNumber() {
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
          handleComplete={this.handleComplete}
          onSubmit={this.addNewTask}
        />
      </div>
    );
  }
}

export default TODOList;
