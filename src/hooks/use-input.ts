import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface Props {
  validator: (val: string) => boolean;
}

const useInput = ({ validator }: Props) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    setIsValid(validator(value));
  }, [value, validator]);

  const handleBlur: MouseEventHandler = useCallback((event) => {
    event.preventDefault();
    setBlur(true);
  }, []);

  const resetInput = useCallback(() => {
    setValue("");
    setBlur(false);
    setIsValid(false);
  }, []);

  return {
    value,
    setValue,
    isValid,
    blur,
    handleBlur,
  };
};

export default useInput;
