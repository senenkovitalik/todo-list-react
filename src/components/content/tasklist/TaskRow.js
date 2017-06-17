import React from 'react';

class TaskRow extends React.Component {
  render() {
    const checked = '';
    const value = 'New Task';

    return (
      <li key={}>
        <div className='well well-sm ${selected}'>
          <div className='checkbox no-top-bottom-margin'>
            <label>
              <input type='checkbox' {checked} />{value}
            </label>
          </div>
        </div>
      </li>
    );
  }
}

export default TaskRow;
