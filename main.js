//add a task
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', (e) => {
    const task = document.getElementById('task-input');
    if (task.value === '') {

    } else {
        UI.addTaskToList(task.value);
        UI.clearField(task);
    }

});

//delete a task
document.querySelector('#task-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('task-done')) {
        UI.deleteTask(e.target);
    } else {
        UI.toStrikethrough(e.target);
    }
});


// user inteface
class UI {
    static addTaskToList(task) {
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        const taskText = document.createTextNode(task);
        li.appendChild(taskText);
        ul.appendChild(li);
    }
    static clearField(task) {
        task.value = "";
    }

    static deleteTask(task) {
        task.remove();
    }

    static toStrikethrough(task) {
        task.classList.add('task-done');
    }
}