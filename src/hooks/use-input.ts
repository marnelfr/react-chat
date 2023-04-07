import { ChangeEventHandler, useCallback, useState } from "react";

interface StateType {
  value: string;
  isValid: undefined | boolean;
}

const useInput = (validator: (val: string) => boolean) => {
  const [state, setState] = useState<StateType>({
    value: "",
    isValid: undefined,
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      event.preventDefault();
      setState((state: StateType) => {
        return {
          value: event.target.value,
          isValid: validator(event.target.value),
        };
      });
    },
    []
  );

  const resetInput = useCallback(() => {
    setState({
      value: "",
      isValid: undefined,
    });
  }, []);

  return { ...state, handleChange, resetInput };
};

export default useInput;
