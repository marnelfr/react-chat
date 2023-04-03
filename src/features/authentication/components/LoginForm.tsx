import Input from "./UI/Input";
import Button from "./UI/Button";
import {
  FormEventHandler,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

const LoginForm = () => {
  const { login, isAuthenticated } = useContext(AuthContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate(ROUTES.dashboard);
  }

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
      <Button type="submit">Sign In</Button>
    </form>
  );
};

export default LoginForm;
