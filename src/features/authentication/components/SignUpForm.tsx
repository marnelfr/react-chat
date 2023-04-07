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
import useInput from "../../../hooks/use-input";

const SignUpForm = () => {
  const {
    value: nameVal,
    isValid: nameIsValid,
    handleChange: handleNameChange,
    resetInput: resetNameInput,
  } = useInput((val: string) => REGEX.name.test(val));
  const {
    value: emailVal,
    isValid: emailIsValid,
    handleChange: handleEmailChange,
    resetInput: resetEmailInput,
  } = useInput((val: string) => REGEX.email.test(val));
  console.log(emailVal.trim() && emailIsValid);
  return (
    <Form>
      <Input
        autoFocus={true}
        onChange={handleNameChange}
        className={`${
          nameVal.trim() && nameIsValid === true ? "is-valid" : ""
        } ${nameVal.trim() && nameIsValid === false ? "is-invalid" : ""}`}
        value={nameVal}
        label="Name"
        id="signup-name"
        placeholder="Name"
      />
      <Input
        onChange={handleEmailChange}
        className={`${
          emailVal.trim() && emailIsValid === true ? "is-valid" : ""
        } ${emailVal.trim() && emailIsValid === false ? "is-invalid" : ""}`}
        value={emailVal}
        label="Email"
        type="email"
        id="signup-email"
        placeholder="Email"
      />
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
