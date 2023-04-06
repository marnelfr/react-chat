import Input from "./UI/Input";
import Button from "./UI/Button";
import { Form } from "react-router-dom";
import React, {
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import { REGEX } from "../../../constants/regex";

const SignUpForm = () => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState<boolean | undefined>(undefined);

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      event.preventDefault();
      setValue((state: string) => {
        setIsValid(REGEX.name.test(event.target.value));
        return event.target.value;
      });
    },
    []
  );

  const resetInput = useCallback(() => {
    setValue("");
    setIsValid(false);
  }, []);

  return (
    <Form>
      <Input
        autoFocus={true}
        onChange={handleChange}
        className={`${
          value.trim() && isValid === true ? "is-valid" : undefined
        } ${value.trim() && isValid === false ? "is-invalid" : undefined}`}
        value={value}
        label="Name"
        id="signup-name"
        placeholder="Name"
      />
      <Input label="Email" type="email" id="signup-email" placeholder="Email" />
      <Input
        label="Password"
        id="signup-password"
        type="password"
        placeholder="Password"
      />
      <Input
        label="Confirm Password"
        id="signup-password"
        type="password"
        placeholder="Password"
      />
      <Button type="submit">Create Account</Button>
    </Form>
  );
};

export default SignUpForm;
