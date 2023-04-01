import Input from "./UI/Input";
import Button from "./UI/Button";

const LoginForm = () => {
  return (
    <form>
      <Input label="Email" type="email" id="login-email" placeholder="Email" />
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
