import { Todo } from '../interfaces/interfaces';
import { useTodos } from '../hooks/useTodos';

interface Props {
  todo: Todo;
}

export const TodoItem = ({ todo }: Props) => {
  const { toggleTodo } = useTodos();

  const handleDbClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <li
      onDoubleClick={handleDbClick}
      style={{ cursor: 'pointer', textDecoration: `${todo.completed ? 'line-through' : ''}` }}
    >
      {todo.desc}
    </li>
  );
};
