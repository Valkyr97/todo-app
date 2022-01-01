import { TodoState, Todo } from '../interfaces/interfaces';

type TodoAction =
  | { type: 'addTodo'; payload: Todo }
  | { type: 'updateTodo'; payload: { id: number; desc: string } }
  | { type: 'deleteTodo'; payload: { id: number } };

export const TodoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case 'updateTodo':
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.payload.id ? { ...t, desc: action.payload.desc } : t
        ),
      };

    case 'deleteTodo':
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload.id),
      };

    default:
      return state;
  }
};
