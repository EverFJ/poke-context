import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/userContext";

export default function Login(props) {
  const { isLogged, setAuth } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setAuth();
    console.log("errors", errors);
    console.log("data", data);
  };
  console.log("isLogged : ", isLogged);
  return (
    <>
      <h1 className="text-center mt-2">Login</h1>
      <div className="container ">
        <div className="row justify-content-center m-4 ">
          <form
            className="form-group col-md-4 col-sm-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="form-control p-2"
              type="text"
              name="username"
              id="username"
              {...register("username", {
                required: "Please fill the username input",
                maxLength: 15,
              })}
              placeholder="your username"
            />
            <input
              className="form-control p-2"
              type="password"
              name="password"
              id="password"
              {...register("password", {
                required: "Please fill the password input",
                minLength: 6,
              })}
              placeholder="your password"
            />
            {!isLogged ? (
              <button type="submit" className="btn btn-primary my-1">
                Submit
              </button>
            ) : (
              <span className="btn btn-danger" onClick={onSubmit}>
                Logout
              </span>
            )}
          </form>
          <ul className="list-group mt-4">
            <li className="list-group-item text-danger">
              {errors.username?.message}
            </li>

            <li className="list-group-item text-danger">
              {errors.password?.message}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
