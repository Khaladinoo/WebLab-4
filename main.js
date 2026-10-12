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
    };