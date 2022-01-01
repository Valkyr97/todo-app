import { useTodos } from '../hooks/useTodos';
export const Title = () => {
  const { pending } = useTodos();
  return <h1 className='text-2xl text-center font-semibold'>Todos: {pending}</h1>;
};
