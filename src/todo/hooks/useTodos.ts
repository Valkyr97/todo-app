import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const useTodos = () => {
  const { todoState, addTodo, updateTodo, deleteTodo } = useContext(TodoContext);
  const { todos } = todoState;

  return {
    updateTodo,
    deleteTodo,
    addTodo,
    todos,
    pending: todos.filter((t) => !t.completed).length,
  };
};
