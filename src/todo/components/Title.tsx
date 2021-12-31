import { useTodos } from '../hooks/useTodos';
export const Title = () => {
  const { pending } = useTodos();
  return <h1>Todos: {pending}</h1>;
};
