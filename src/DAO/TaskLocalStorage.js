export default class TaskLocalStorage {
  static getAll() {
    const TASKS_KEY = "tasks";
    try {
      const arrTasks = JSON.parse(localStorage.getItem(TASKS_KEY));
      return (Array.isArray(arrTasks)) ? arrTasks : [];
    } catch (e) {
      return [];
    }
  }

  static saveAll(arrTasks) {
    const TASKS_KEY = "tasks";
    const strTasks = JSON.stringify(arrTasks);
    localStorage.setItem(TASKS_KEY, strTasks);
  }

  static getFilter() {
    const FILTER = "active";
    return localStorage.getItem(FILTER) || "active";
  }

  static saveFilter(filter) {
    const FILTER = "active";
    localStorage.setItem(FILTER, filter);
  }
}
