import React from 'react';

class TaskRow extends React.Component {
  render() {
    if (this.props.task.status.code !== this.props.filter) {
      // compare tasks status with filter value and decide to not show it
      return null;
    }
    return (
      <li>
        <div className='well well-sm'>
          <div className='checkbox no-top-bottom-margin'>
            <label>
              <input
                type='checkbox'
                name="status"
                checked={(this.props.task.status.code !== "ACTIVE_TASK")}
                onChange={(e) => this.props.handleComplete(e, this.props.task)}
              />
              {this.props.task.value}
            </label>
          </div>
        </div>
      </li>
    );
  }
}

export default TaskRow;
