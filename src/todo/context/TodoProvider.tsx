import { useReducer } from 'react';

import { TodoContext } from './TodoContext';
import { TodoReducer } from './TodoReducer';
import { TodoState, Todo } from '../interfaces/interfaces';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const initialState: TodoState = {
  todoCount: 2,
  todos: [],
  completed: 0,
  pending: 2,
};

export const TodoProvider = ({ children }: Props) => {
  const [todoState, dispatch] = useReducer(TodoReducer, initialState);

  const updateTodo = (id: number, desc: string) => {
    dispatch({ type: 'updateTodo', payload: { id, desc } });
  };

  const deleteTodo = (id: number) => {
    dispatch({ type: 'deleteTodo', payload: { id } });
  };

  const addTodo = (todo: Todo) => {
    dispatch({ type: 'addTodo', payload: todo });
  };

  return (
    <TodoContext.Provider value={{ todoState, addTodo, updateTodo, deleteTodo }}>
      <div className='p-3 h-screen bg-gray-50 dark:bg-gray-800'>{children}</div>
    </TodoContext.Provider>
  );
};
