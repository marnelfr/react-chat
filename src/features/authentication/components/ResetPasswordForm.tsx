import Input from "./UI/Input";
import Button from "./UI/Button";

const ResetPasswordForm = () => {
  return (
    <form action="">
      <Input
        label="Email"
        id="reset-password-email"
        type="email"
        placeholder="Email"
      />
      <Button type="submit">Send Reset Link</Button>
    </form>
  );
};

export default ResetPasswordForm;
