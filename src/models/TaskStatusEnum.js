import TaskStatus from './TaskStatus';

class TaskStatusEnum {
  constructor() {
    this.ACTIVE_TASK = new TaskStatus("ACTIVE_TASK", "Active");
    this.COMPLETED_TASK = new TaskStatus("COMPLETED_TASK", "Completed");
  }

  getByCode(code) {
    switch (code) {
      case "ACTIVE_TASK":
        return this.ACTIVE_TASK;
      case "COMPLETED_TASK":
        return this.COMPLETED_TASK;
      default:
        throw new Error("Task Code is not found");
      }
  }
}

export default TaskStatusEnum;
