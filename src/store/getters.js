export default {
  todos: state => {
    return state.todos.filter(todo => todo.done)
  }
}
