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
  const navigate = useNavigate();

  const handleSubmit: FormEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      if (!!emailRef.current!.value.trim()) {
        login({
          token: "mzelkfjqslkfjsmdflqmjqdmfzkjrmalja12341EZFG23512sqdFQs",
          expiresAt: "2315235321534234",
          userInfo: JSON.stringify({
            name: "Marnel GNACADJA",
            email: emailRef.current!.value,
            phone: "+229 9740 3627",
            bio: "Portez ce vieux whisky au juge blond qui fume et tout ce qui va avec.",
          }),
        });
      }
    },
    [emailRef, login]
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTES.dashboard);
    }
  });

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
