import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import { useTodos } from '../hooks/useTodos';
import { Todo } from '../interfaces/interfaces';
interface Props {}

export const FormTodo = (props: Props) => {
  const { desc, handleChange, reset } = useForm({ desc: '' });
  const { addTodo } = useTodos();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = {
      id: new Date().getTime(),
      desc,
      completed: false,
    };

    addTodo(newTodo);

    reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <label>
        New Todo
        <input type='text' name='desc' onChange={handleChange} value={desc} />
      </label>
    </form>
  );
};
