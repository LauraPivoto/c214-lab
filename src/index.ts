type Task = {
  name: String;
  schedule: Date;
};

class ToDoManager {
  private tasks: Task[] = [];

  constructor() {}

  insertTask(task: Task) {
    this.tasks.push(task);
  }
}

const tarefa: Task = {
  name: "aula 1",
  schedule: new Date("23/08/2024"),
};

const taskManager = new ToDoManager();
taskManager.insertTask(tarefa);
