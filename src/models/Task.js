import TaskStatusEnum from './TaskStatusEnum';

export default class Task {
  constructor(id, value, status) {
    this.id = id;
    this.value = value;
    this.status = status;
  }

  fromJSON(json) {
    this.id = json.id;
    this.value = json.value;
    this.status = new TaskStatusEnum().getByCode(json.status);

    return this;
  }

  toJSON() {
    return {
      id: this.id,
      value: this.value,
      status: this.status.code
    };
  }
}
