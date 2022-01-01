import { TodoItem } from './TodoItem';
import { useTodos } from '../hooks/useTodos';

interface Props {}

export const TodoList = (props: Props) => {
  const { todos } = useTodos();
  return (
    <dl className='bg-gray-200 rounded space-y-1 p-2'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </dl>
  );
};
