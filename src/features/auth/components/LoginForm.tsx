import { FormEventHandler, useCallback, useRef, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import axios from "../../../api/axios";

const LoginForm = () => {
  const { setAuth } = useAuth();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit: FormEventHandler = useCallback(async (event) => {
    event.preventDefault();
    const username = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (username?.trim() && password?.trim()) {
      try {
        const response = await axios.post(
          "login",
          JSON.stringify({ username, password }),
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        const token = response?.data?.token;
        const user = response?.data?.user;
        setAuth({ token, user });
        console.log("success");
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
      {errorMessage && <p>{errorMessage}</p>}
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
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
