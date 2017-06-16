import React from 'react';

class MenuBar extends React.Component {
  render() {
    return (
      <div>
        {/* Navigation bar */}
        <div className="navbar navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <span className="navbar-brand">ToDo List</span>
            </div><ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#" className="navbar-action-btn hide" id="btn-uncomplete">
                <span className="glyphicon glyphicon-unchecked" />
              </a>
            </li>
            <li>
              <a href="#" className="navbar-action-btn hide" id="btn-complete">
                <span className="glyphicon glyphicon-check" />
              </a>
            </li>
            <li>
              <a href="#" className="navbar-action-btn" id="btn-action" data-toggle="popover">
                <span className="glyphicon glyphicon-option-vertical" />
              </a>
            </li>
          </ul>
          </div>
        </div>
        <div id="main-content" className="container-fluid">
          {/* List */}
          <div className="row" id="list">
            <div className="col-xs-12 col-md-8 col-md-offset-2">
              <ul className="list-unstyled">
                {}
              </ul>
            </div>
          </div>
          {/* Trigger the modal with a button */}
          <button id="btn-add-task" type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modal-add-task">+</button>
          {/* Modal */}
          <div id="modal-add-task" className="modal fade" role="dialog">
            <div className="modal-dialog">
              {/* Modal content */}
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close"><span className="glyphicon glyphicon-ok" /></button>
                  <h4 className="modal-title">New Task</h4></div>
                <div className="modal-body">
                  <div className="form-group"><label for="task-description">What need to do?</label>
                    <input type="text" className="form-control" id="task-description" placeholder="Add task description" />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuBar;
