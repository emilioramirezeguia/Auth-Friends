import React from "react";
import { useForm } from "../hooks/useForm";
import axios from "axios";
import Loader from "react-loader-spinner";

const emptyLoginForm = {
  username: "",
  password: "",
};

function Login(props) {
  const [form, setForm, handleChanges, isLoading, setIsLoading] = useForm(
    emptyLoginForm
  );

  const login = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", form)
      .then((response) => {
        localStorage.setItem("token", response.data.payload);
        props.history.push("/friends");
        setIsLoading(true);
      })
      .catch((error) => console.log(error));
    setForm(emptyLoginForm);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Loader type="Puff" color="#204963" height="60" width="60" />
      ) : (
        <form onSubmit={login}>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            type="text"
            name="username"
            value={form.username}
            onChange={handleChanges}
          />
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="text"
            name="password"
            value={form.password}
            onChange={handleChanges}
          />
          <button>Sign in</button>
        </form>
      )}
    </>
  );
}

export default Login;
