let todo = getSavedTodo();
let search = {
    text: '',
    hideCompleted: false
}


renderTodo(todo, search)

document.querySelector('#searchTodo').addEventListener('input', function(s) {
    search.text = s.target.value.toLowerCase();
    renderTodo(todo, search)
})

document.querySelector('#mainForm').addEventListener('submit', function(s) {
    s.preventDefault();
    let add = s.target.elements.todo.value;
    todo.push({
        id: uuidv4(),
        text: add,
        completed: false
    })
    saveTodos(todo)
    renderTodo(todo, search)
    s.target.elements.todo.value = ''
})
document.querySelector('#hideComplete').addEventListener('change', function(s) {
    search.hideCompleted = s.target.checked;
    renderTodo(todo, search)
})