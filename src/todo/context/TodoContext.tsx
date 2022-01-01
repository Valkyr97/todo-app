import { createContext } from 'react';
import { TodoState, Todo } from '../interfaces/interfaces';

type TodoContextProps = {
  todoState: TodoState;
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, desc: string) => void;
};

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);
