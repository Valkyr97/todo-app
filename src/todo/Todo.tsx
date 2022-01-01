import { TodoProvider } from './context/TodoProvider';
import { TodoList } from './components/TodoList';
import { Title } from './components/Title';
import { FormTodo } from './components/TodoForm';

export const Todo = () => {
  return (
    <TodoProvider>
      <Title />
      <TodoList />
      <FormTodo />
    </TodoProvider>
  );
};
