import React from 'react';
import TaskRow from "./TaskRow";

class TaskList extends React.Component {
  render() {
    const listItems = this.props.tasks.map((task) => {
      return <TaskRow key={task.id} value={task.value} />;
    });
    return (
      <div className="row" style={{marginTop: 20 + 'px'}}>
        <div className="col-xs-12 col-md-8 col-md-offset-2">
          <ul className="list-unstyled">
            {listItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default TaskList;
