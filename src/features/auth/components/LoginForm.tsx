import { useRef, useState } from "react";

const LoginForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <section>
      {errorMessage && <p>{errorMessage}</p>}
      <h1>Sign In</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input autoFocus ref={emailRef} type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input ref={passwordRef} type="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default LoginForm;
