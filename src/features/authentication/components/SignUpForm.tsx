import Input from "./UI/Input";
import Button from "./UI/Button";
import { Form } from "react-router-dom";

const SignUpForm = () => {
  return (
    <Form>
      <Input label="Name" id="signup-name" placeholder="Name" />
      <Input label="Email" type="email" id="signup-email" placeholder="Email" />
      <Input
        label="Password"
        id="signup-password"
        type="password"
        placeholder="Password"
      />
      <Button type="submit">Create Account</Button>
    </Form>
  );
};

export default SignUpForm;
