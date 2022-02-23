import { Button, Container, Tab } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Register.css";

import React, { useState } from "react";

function Register({ labelNo }) {
  const [passwod, setpasswod] = useState("");
  const [cpass, setcpass] = useState("");

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
  const label1 = (
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
  const label2 = (
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
  const label3 = (
    <label>
      Phone
      <input
        className="form-control"
        name="phone"
        {...register("phone", {
          required: "phone is required",
          pattern: {
            value: /^[0-9]{10}$/,
            message: "invalied phone number",
          },
        })}
        onKeyUp={() => trigger("phone")}
      />
      {errors.phone && (
        <div>
          <small className="text-danger">{errors.phone.message}</small>
        </div>
      )}
    </label>
  );
  ///////////////////////////////////////////
  const label4 = (
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
          setpasswod(e.target.value);
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
  const label5 = (
    <label>
      Confirm password
      <input
        className="form-control"
        name="cpassword"
        {...register("cpassword", {
          required: "password should be confirmed",
        })}
        onKeyUp={(e) => {
          trigger("cpassword");
          setcpass(e.target.value);
        }}
      />
      {passwod != cpass && (
        <div>
          <small className="text-danger">password not match</small>
        </div>
      )}
    </label>
  );
  ///////////////////////////////////////////
  const label6 = (
    <label>
      Address
      <textarea
        className="address form-control"
        name="address"
        {...register("address", {
          required: "address is required",
        })}
        onKeyUp={() => trigger("address")}
      />
      {errors.address && (
        <div>
          <small className="text-danger">{errors.address.message}</small>
        </div>
      )}
    </label>
  );
  /////////////////////////////////////////////
  const label7 = (
    <label>
      Age
      <input
        className="form-control"
        name="age"
        {...register("age", {
          required: "age is required",
        })}
        onKeyUp={() => trigger("age")}
      />
      {errors.age && (
        <div>
          <small className="text-danger">{errors.age.message}</small>
        </div>
      )}
    </label>
  );
  ///////////////////////////////////////////
  const label8 = (
    <label>
      Place
      <input
        className="form-control"
        name="place"
        {...register("place", {
          required: "place is required",
        })}
        onKeyUp={() => trigger("place")}
      />
      {errors.place && (
        <div>
          <small className="text-danger">{errors.place.message}</small>
        </div>
      )}
    </label>
  );
  //////////////////////////////////////////////////////////////

  const label9 = (
    <label>
      <br />
      <b>Gender </b> &emsp;&emsp;&emsp; male
      <input
        type="radio"
        value="m"
        name="gender"
        {...register("gender", {
          required: "gender is required",
        })}
        onKeyUp={() => trigger("gender")}
      />
      &emsp;&emsp; female
      <input
        type="radio"
        value="f"
        name="gender"
        {...register("gender", {
          required: "gender is required",
        })}
        onKeyUp={() => trigger("gender")}
      />
      &emsp;&emsp; intersex
      <input
        type="radio"
        value="i"
        name="gender"
        {...register("gender", {
          required: "gender is required",
        })}
        onKeyUp={() => trigger("gender")}
      />
      {errors.gender && (
        <div>
          <small className="text-danger">{errors.gender.message}</small>
        </div>
      )}
    </label>
  );
  //////////////////////////////////////////////////////////////
  const label10 = (
    <label>
      Photo
      <input
        type="file"
        className="form-control"
        name="photo"
        {...register("photo", {
          required: "photo is required",
        })}
        onKeyUp={() => trigger("photo")}
      />
      {errors.photo && (
        <div>
          <small className="text-danger">{errors.photo.message}</small>
        </div>
      )}
    </label>
  );
  //////////////////////////////////////////////////////////////
  const label11 = (
    <label>
      Name
      <input
        className="form-control"
        name="name"
        {...register("name", {
          required: "name is required",
        })}
        onKeyUp={() => trigger("name")}
      />
      {errors.name && (
        <div>
          <small className="text-danger">{errors.name.message}</small>
        </div>
      )}
    </label>
  );
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
              {temp.includes("11") && label11}
              {temp.includes("1") && label1}
              {temp.includes("2") && label2}
              {temp.includes("3") && label3}
              {temp.includes("4") && label4}
              {temp.includes("5") && label5}
              {temp.includes("7") && label7}
              {temp.includes("6") && label6}
              {temp.includes("8") && label8}
              {temp.includes("10") && label10}
              {temp.includes("9") && label9}
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
                    value="Submit"
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

export default Register;
