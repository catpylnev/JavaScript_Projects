function get_todos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {
    var taskInput = document.getElementById('task');
    var task = taskInput.value.trim(); 

    if (task !== '') {
        var todos = get_todos();
        todos.push(task);
        localStorage.setItem('todo', JSON.stringify(todos));
        taskInput.value = '';
        show();
    }
}

function remove(index) {
    var todos = get_todos();
    todos.splice(index, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
}

function show() {
    var todos = get_todos();
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html +=
            '<li>' +
            todos[i] +
            '<button class="remove" id="btn_' + i + '">x</button></li>';
    }
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;

    for (var i = 0; i < todos.length; i++) {
        document.getElementById('btn_' + i).addEventListener('click', function (index) {
            return function () {
                remove(index);
            };
        }(i));
    }
}

document.getElementById('add').addEventListener('click', add);
show();
