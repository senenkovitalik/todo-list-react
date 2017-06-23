import Task from '../models/Task';

export default class TaskLocalStorage {
  static getAll() {
    const TASKS_KEY = "tasks";
    try {
      const jsonTasks = JSON.parse(localStorage.getItem(TASKS_KEY));
      const arrTasks = (Array.isArray(jsonTasks)) ? jsonTasks : [jsonTasks];
      return arrTasks.map((task) => {
        return new Task().fromJSON(task);
      });
    } catch (e) {
      console.log(e.message);
      return [];
    }
  }

  static saveAll(arrTasks) {
    const TASKS_KEY = "tasks";
    const arr = arrTasks.map((task) => {
      return task.toJSON();
    });
    localStorage.setItem(TASKS_KEY, JSON.stringify(arr));
  }

  static getFilter() {
    const FILTER = "filter";
    return localStorage.getItem(FILTER) || "ACTIVE_TASK";
  }

  static saveFilter(filter) {
    const FILTER = "filter";
    localStorage.setItem(FILTER, filter);
  }
}
