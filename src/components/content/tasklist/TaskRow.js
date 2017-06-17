import React from 'react';

class TaskRow extends React.Component {
  render() {
    return (
      <li>
        <div className='well well-sm'>
          <div className='checkbox no-top-bottom-margin'>
            <label>
              <input type='checkbox' />{this.props.value}
            </label>
          </div>
        </div>
      </li>
    );
  }
}

export default TaskRow;
