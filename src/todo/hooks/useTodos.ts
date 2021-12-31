import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const useTodos = () => {
  const { todoState, toggleTodo } = useContext(TodoContext);
  const { todos } = todoState;
  return {
    toggleTodo,
    todos,
    pending: todos.filter((t) => !t.completed).length,
  };
};
