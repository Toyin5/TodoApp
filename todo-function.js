const getSavedTodo = function() {
    const todoJSON = localStorage.getItem('todo')

    if (todoJSON !== null) {
        return JSON.parse(todoJSON)
    } else {
        return []
    }
}

const saveTodos = function(todo) {
    localStorage.setItem('todo', JSON.stringify(todo))
}

const renderTodo = function(todo, search) {

    let filteredTodo = todo.filter(function(todo) {
        return todo.text.toLowerCase().includes(search.text.toLowerCase())
        debugger
    })
    filteredTodo = filteredTodo.filter(function(todo) {
        if (search.hideCompleted) {
            return !todo.completed
        } else {
            return true
        }
    })
    document.querySelector('#todo').innerHTML = ''
    const summary = generateSummaryDOM()
    document.querySelector('#todo').appendChild(summary)
    filteredTodo.forEach(function(tod) {
        const todoEl = generateTodoDOM(tod)
        document.querySelector('#todo').appendChild(todoEl)
    })
}

const generateTodoDOM = function(tod) {
    const todoEl = document.createElement('div');
    const textEl = document.createElement('span')
    const checkBox = document.createElement('input')
    const button = document.createElement('button')

    checkBox.type = 'checkbox';
    button.textContent = 'x';

    todoEl.appendChild(checkBox)
    todoEl.appendChild(textEl)
    todoEl.appendChild(button)
    textEl.textContent = tod.text
    return todoEl
}

const generateSummaryDOM = function() {
    const sortTodo = function(toSort) {
        num = 0;
        toSort.forEach(function(a) {
            if (a.completed === false) {
                num++;
            }
        })
        return `You still have ${num} todos left`;
    }
    sortTodo(todo)
    const summary = document.createElement('p');
    summary.textContent = sortTodo(todo)
    return summary
}