import { State } from '@ngrx/store';

const initialState = [
  { id: 1, text: 'ToDo 1', isCompleted: true },
  { id: 2, text: 'ToDo 2', isCompleted: false },
];

function todosReducer(state = initialState, action: any): any {
  switch (action.type) {
    case 'ADD_TODO': {
      const newToDo = {
        id: state.length + 1,
        text: action.payload.text,
        isCompleted: false,
      };
      return [...state, newToDo];
    }
    case 'TOGGLE_TODO': {
      return state.map((todo) => {
        return todo.id !== action.payload.id
          ? todo
          : Object.assign({}, todo, { isCompleted: !todo.isCompleted });
      });
    }
    case 'DELETE_TODO': {
      return state.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    }
    default: {
      return state;
    }
  }
}

export const rootReducer = {
  todosReducer,
};
