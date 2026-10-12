class Task {
    constructor(id, title, completed = false){
        Object.defineProperty(this, 'id', {
            value: id,
            writable: false,
            configurable: false,
            enumerable: true
        });
        this.title = title;
        this.completed = completed;
    }

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
    removeTask(taskId) {
        this.tasks = this.tasks.map(task => task.id === taskId ? task.toggle() : task);

    }
    toggleTask(taskId) {
        this.tasks = this.tasks.map(task => 
            task.id === taskId ? task.toggle() : task
        );
    }
}
export { Task, TaskManager};