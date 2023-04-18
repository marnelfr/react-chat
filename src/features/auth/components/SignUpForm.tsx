import Input from "./UI/Input";
import Button from "./UI/Button";
import React, { useEffect, useState } from "react";
import { REGEX } from "../../../constants/regex";
import useInput from "../../../hooks/use-input";

const SignUpForm = () => {
  const [formIsValid, setFormIsValid] = useState(false);
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
  const {
    value: passwordVal,
    isValid: passwordIsValid,
    handleChange: handlePasswordChange,
    resetInput: resetPasswordInput,
  } = useInput((val: string) => REGEX.password.test(val));
  const {
    value: confirmPasswordVal,
    isValid: confirmPasswordIsValid,
    handleChange: handleConfirmPasswordChange,
    resetInput: resetConfirmPasswordInput,
  } = useInput((val: string) => REGEX.password.test(val));

  useEffect(() => {
    setFormIsValid(
      !!(
        nameIsValid &&
        emailIsValid &&
        passwordIsValid &&
        confirmPasswordIsValid &&
        passwordVal === confirmPasswordVal
      )
    );
  }, [
    confirmPasswordIsValid,
    confirmPasswordVal,
    emailIsValid,
    nameIsValid,
    passwordIsValid,
    passwordVal,
  ]);

  return (
    <form>
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
        onChange={handlePasswordChange}
        className={`${
          passwordVal.trim() && passwordIsValid === true ? "is-valid" : ""
        } ${
          passwordVal.trim() && passwordIsValid === false ? "is-invalid" : ""
        }`}
        value={passwordVal}
        label="Password"
        type="password"
        id="signup-password"
        placeholder="Password"
      />
      <Input
        onChange={handleConfirmPasswordChange}
        className={`${
          confirmPasswordVal.trim() &&
          confirmPasswordIsValid === true &&
          passwordVal === confirmPasswordVal
            ? "is-valid"
            : ""
        } ${
          passwordVal.trim() && confirmPasswordIsValid === false
            ? "is-invalid"
            : ""
        }`}
        value={confirmPasswordVal}
        label="Confirm Password"
        type="password"
        id="signup-confirm-password"
        placeholder="Confirm Password"
      />
      <Button disabled={!formIsValid} type="submit">
        Create Account
      </Button>
    </form>
  );
};

export default SignUpForm;
