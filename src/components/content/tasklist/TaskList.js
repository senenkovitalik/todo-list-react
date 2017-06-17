import React from 'react';
import TaskRow from "./TaskRow";

class TaskList extends React.Component {
  render() {
    const listItems = this.props.tasks.map((task) => {
      return <TaskRow key={task.id} value={task.value} />;
    });
    return (
      <ul className="list-unstyled">
        {listItems}
      </ul>
    );
  }
}

export default TaskList;
