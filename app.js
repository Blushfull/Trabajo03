document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskInput = document.getElementById('new-task').value;
    if (taskInput.trim() === '') {
        alert('Por favor ingresa una tarea.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskInput;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete');
    li.appendChild(deleteBtn);

    document.getElementById('task-list').appendChild(li);

    document.getElementById('new-task').value = '';
});

document.getElementById('task-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

document.getElementById('task-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

document.getElementById('task-list').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
});


function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#task-list li').forEach(function(task) {
        tasks.push(task.firstChild.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(function(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.classList.add('delete');
        li.appendChild(deleteBtn);

        document.getElementById('task-list').appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', loadTasks);
document.getElementById('task-list').addEventListener('click', saveTasks);
document.getElementById('task-form').addEventListener('submit', saveTasks);
