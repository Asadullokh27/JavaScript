let tasks = [];

    function addTask() {
        const taskInput = document.getElementById('taskInput');
        const taskText = taskInput.value.trim();
        
        if (taskText !== '') {
            tasks.push({ text: taskText, completed: false });
            displayTasks();
            taskInput.value = '';
        }
    }

    function displayTasks() {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';
        
        tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <input type="checkbox" onchange="toggleCompletion(${index})" ${task.completed ? 'checked' : ''}>
                <span>${task.text}</span>
                <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
            `;
            taskList.appendChild(listItem);
        });
    }

    function toggleCompletion(index) {
        tasks[index].completed = !tasks[index].completed;
        displayTasks();
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        displayTasks();
    }

    displayTasks();