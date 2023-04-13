import Input from "./UI/Input";
import Button from "./UI/Button";
import { FormEventHandler, useCallback, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import Spinner from "../../../components/UI/Spinner";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getLoader } from "../../messenger/slices/loading";

const LoginForm = () => {
  const { login } = useAuth();
  const load = useAppSelector(getLoader("login"));

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      if (
        !!emailRef.current!.value.trim() &&
        !!passwordRef.current!.value.trim()
      ) {
        login(emailRef.current!.value, passwordRef.current!.value);
      }
    },
    [emailRef, login]
  );

  return (
    <form onSubmit={handleSubmit}>
      {load.hasError && (
        <p className="text-center text-danger mb-7">Invalid credentials</p>
      )}
      <Input
        ref={emailRef}
        label="Email"
        type="email"
        id="login-email"
        placeholder="Email"
      />
      <Input
        ref={passwordRef}
        label="Password"
        id="login-password"
        type="password"
        placeholder="Password"
      />
      <Button type="submit">{load.isLoading ? <Spinner /> : "Sign In"}</Button>
    </form>
  );
};

export default LoginForm;
