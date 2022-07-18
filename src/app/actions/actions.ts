export function addTodo(text: string) {
  return {
    type: 'ADD_TODO',
    payload: { text },
  };
}
export function deleteTodo(id: number) {
  return {
    type: 'DELETE_TODO',
    payload: { id },
  };
}
export function toggleToDo(id: number) {
  return {
    type: 'TOGGLE_TODO',
    payload: { id },
  };
}
