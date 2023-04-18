import { FormEventHandler, useCallback, useRef, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import Input from "./UI/Input";
import Button from "./UI/Button";
import Spinner from "../../../components/UI/Spinner";

const LoginForm = () => {
  const { login } = useAuth();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || ROUTES.root;

  const handleSubmit: FormEventHandler = useCallback(async (event) => {
    event.preventDefault();
    const username = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (username?.trim() && password?.trim()) {
      try {
        setIsLoading(true);
        await login(username, password);
        setIsLoading(false);
        navigate(from, { replace: true });
      } catch (e: any) {
        if (!e?.response) {
          setErrorMessage("No Server Response");
        } else if (e.response?.status === 400 || e.response?.status === 401) {
          setErrorMessage("Invalid credentials");
        } else {
          setErrorMessage("Login Failed");
        }
      }
    }
  }, []);

  return (
    <section>
      <form onSubmit={handleSubmit}>
        {errorMessage && (
          <p className="text-center text-danger mb-7">{errorMessage}</p>
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
        <Button type="submit">{isLoading ? <Spinner /> : "Sign In"}</Button>
      </form>
    </section>
  );
};

export default LoginForm;
