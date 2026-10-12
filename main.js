import { Task, TaskManager } from './taskManager.js';
import { fetchTasks } from './api.js';

const manager = new TaskManager();
const loadTasksBtn = document.getElementById('loadTasksBtn');
const taskListContainer = document.getElementById('taskList');
const statusMessage = document.getElementById('statusMessage');

loadTasksBtn.addEventListener('click', async () => {
    try {
        statusMessage.textContent = "Loading tasks...";
        const rawData = await fetchTasks();
        const jsonString = JSON.stringify(rawData);
        const parsedData = JSON.parse(jsonString);
        const taskInstances = parsedData.map(item => new Task(item.id, item.title, item.completed));
        manager.setTasks(taskInstances);
        render();
        statusMessage.textContent = "";
    }catch(error){
        statusMessage.textContent = "Error loading tasks. please try again.";
        console.error("Task loading error:", error);
    }
});

function render(){
   taskListContainer.innerHTML = '';
}