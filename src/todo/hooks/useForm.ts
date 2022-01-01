import { ChangeEvent, useState } from 'react';

export const useForm = <T extends Object>(initialState: T) => {
  const [state, setState] = useState(initialState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const reset = () => {
    setState(initialState);
  };

  return { ...state, handleChange, reset, state };
};
