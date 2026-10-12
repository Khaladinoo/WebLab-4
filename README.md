# Dynamic Task Management Dashboard

A client-side vanilla JavaScript dashboard application built for demonstrating DOM traversal, event handling, asynchronous operations (`async/await`), ES6 Classes, and immutable state updating patterns.

## File Organization
- `index.html`: Contains the structural HTML elements (buttons, feedback messages, and task card wrapper).
- `style.css`: Contains CSS layout styles, box modeling, and class rules for completed tasks (`line-through`).
- `taskManager.js`: Defines `Task` (with read-only ID via `Object.defineProperty`) and `TaskManager` ES6 classes adhering to immutable update routines (`map`, `filter`, spread syntax).
- `api.js`: Simulates an asynchronous server request returning raw task data wrapped in a 1500ms delayed Promise.
- `main.js`: Main execution script linking DOM events, JSON transformations, async fetching, and dynamic rendering.

## Challenges Faced
1. **Enforcing State Immutability**: Preventing state mutation during task toggling and deletion was handled using non-mutating array methods (`map`, `filter`, and spread syntax) rather than in-place operations (`push`, `splice`).
2. **Clean Dynamic Event Delegation**: Attaching event listeners cleanly to dynamically generated DOM elements (`document.createElement`) while strictly avoiding inline HTML event attributes (`onclick`).
