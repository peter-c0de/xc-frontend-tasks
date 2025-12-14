const tasksStorage = 'todoTasks';
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const tasksList = document.getElementById('tasksList');

// Load from localStorage or return []
function loadTasks() {
    var raw = localStorage.getItem(tasksStorage);
        try {
            if (raw) {
                return JSON.parse(raw);
            } else {
                return [];
            }
        } catch (e) {
            localStorage.removeItem(tasksStorage);
            return [];
        }
}

// Save to localStorage
function saveTasks(tasks) {
    localStorage.setItem(tasksStorage, JSON.stringify(tasks));
}

// Render tasks
function renderTasks() {
    var tasks = loadTasks();
    tasksList.innerHTML = '';
    
    for (var i = 0; i < tasks.length; i++) {
        var li = document.createElement('li');
        li.textContent = tasks[i].text;      
        
        // Delete button
        var delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', function(index){
            return function(){ deleteTask(index); };
        }(i));
                
        li.appendChild(delBtn);
        tasksList.appendChild(li);
    }
}

// Add a new task
function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

    const tasks = loadTasks();
    tasks.push({ text });
    saveTasks(tasks);
    taskInput.value = '';
    renderTasks();
    taskInput.focus();
}

// Delete a task
function deleteTask(index) {
    const tasks = loadTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    renderTasks();
}

// Add button click
addBtn.addEventListener('click', addTask);

// Initial render
renderTasks();



