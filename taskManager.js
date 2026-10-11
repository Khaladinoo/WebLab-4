class Task {
  //  @param {number|string} id
   // @param {string} title
  //  @param {boolean} completed

    constructor(id, title, completed = false){
        Object.defineProperty(this, 'id', {
            value: id,
            writable: false
            configurable: false,
            enumerable: true
        });
        this.title = title;
        this.completed = completed;
    }

   // @returns {Task}

    toggle(){
        return new Task(this.id, this.title, !this.completed);
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }
    setTasks(newTasks){
        this.tasks = [...newTasks];
    }
    addTask(task) {
        this.tasks = [...this.tasks, task];
    }
    
}