import { useReducer } from 'react';

import { TodoContext } from './TodoContext';
import { TodoReducer } from './TodoReducer';
import { TodoState } from '../interfaces/interfaces';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const initialState: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: '1',
      desc: 'Recolectar las piedras del infinito',
      completed: false,
    },
    {
      id: '2',
      desc: 'Piedra del alma',
      completed: false,
    },
  ],
  completed: 0,
  pending: 2,
};

export const TodoProvider = ({ children }: Props) => {
  const [todoState, dispatch] = useReducer(TodoReducer, initialState);

  const toggleTodo = (id: string) => {
    dispatch({ type: 'toggleTodo', payload: { id } });
  };
  
  return <TodoContext.Provider value={{ todoState, toggleTodo }}>{children}</TodoContext.Provider>;
};
