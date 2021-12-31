import { TodoState, Todo } from '../interfaces/interfaces';

type TodoAction =
  | { type: 'addTodo'; payload: Todo }
  | { type: 'toggleTodo'; payload: { id: string } };

export const TodoReducer = (state: TodoState, action: TodoAction): TodoState => {
  console.log(action);
  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case 'toggleTodo':
      return {
        ...state,
        todos: state.todos.map(({ ...t }) => {
          if (t.id === action.payload.id) {
            t.completed = !t.completed;
          }
          return t;
        }),
      };

    default:
      return state;
  }
};
