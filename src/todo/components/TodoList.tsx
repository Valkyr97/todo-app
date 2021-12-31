import { TodoItem } from './TodoItem';
import { useTodos } from '../hooks/useTodos';

interface Props {}

export const TodoList = (props: Props) => {
  const { todos } = useTodos();
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};
