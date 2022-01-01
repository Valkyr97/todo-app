import { Todo } from '../interfaces/interfaces';
import { useTodos } from '../hooks/useTodos';

interface Props {
  todo: Todo;
}

export const TodoItem = ({ todo }: Props) => {
  const { updateTodo, deleteTodo } = useTodos();

  const handleDbClick = () => {
    // toggleTodo(todo.id);
  };

  const handleClick = () => {
    deleteTodo(todo.id);
  };

  return (
    <dt
      className='text-center'
      onDoubleClick={handleDbClick}
      style={{ cursor: 'pointer', textDecoration: `${todo.completed ? 'line-through' : ''}` }}
    >
      <span className='font-medium leading-tight'>{todo.desc}</span>
      <button
        className='bg-red-600 block font-semibold mx-auto w-1/2 rounded-md shadow-lg text-white hover:bg-red-500 px-2'
        onClick={handleClick}
      >
        Delete
      </button>
    </dt>
  );
};
