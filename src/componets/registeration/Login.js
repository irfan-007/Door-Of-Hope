import { Button, Container, Tab } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Register.css";

import React, { useState } from "react";

function Login({ labelNo }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const sub = (data) => {
    // e.preventDefault();
    console.log(data);
    reset();
  };
  ///////////////////////////////////////////
  const label0 = (
    <label>
      User name
      <input
        className="form-control"
        name="name"
        {...register("name", { required: "name is required" })}
      />
      {errors.name && (
        <div>
          <small className="text-danger">{errors.name.message}</small>
        </div>
      )}
    </label>
  );
  ////////////////////////////////////////////////
  const label1 = (
    <label>
      Email
      <input
        style={errors.email && { borderColor: "red" }}
        className={`form-control ${errors.email && "invalid"}`}
        name="email"
        {...register("email", {
          required: "email is required",
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: "invalied email",
          },
        })}
        onKeyUp={() => trigger("email")}
      />
      {errors.email && (
        <div>
          <small className="text-danger">{errors.email.message}</small>
        </div>
      )}
    </label>
  );
  ////////////////////////////////////

  ///////////////////////////////////////////
  const label2 = (
    <label>
      Password
      <input
        className="form-control"
        name="password"
        {...register("password", {
          required: "password is required",
          pattern: {
            value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
            message:
              "password must contain atleast 6 characters with numbers,alphabets & special symbols",
          },
        })}
        onKeyUp={(e) => {
          trigger("password");
        }}
      />
      {errors.password && (
        <div>
          <small className="text-danger">{errors.password.message}</small>
        </div>
      )}
    </label>
  );
  /////////////////////////////////////////////

  //////////////////////////////////////////////////////////////

  const temp = labelNo.split("/");

  return (
    <>
      <Container fluid style={{ marginTop: 71 }}>
        <div className="container">
          <br />
          <h1>SignUp</h1>
          <hr />
          <br />

          <form onSubmit={handleSubmit(sub)}>
            <div style={{ margin: 10 }}>
              {temp.includes("1") && label1}
              {temp.includes("2") && label2}

              <br />
              <br />
              <div className="row">
                <div className="col">
                  <Button
                    style={{ width: "100%" }}
                    onClick={() => reset()}
                    variant="danger"
                  >
                    reset
                  </Button>
                </div>
                <div className="col">
                  <input
                    style={{ width: "100%" }}
                    className="btn btn-success"
                    type="submit"
                    value="Login"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}

export default Login;
