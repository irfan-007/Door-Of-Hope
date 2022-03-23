import React, { useState } from "react";
import { db } from "../../../Firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { useForm } from "react-hook-form";

function DeleteService() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const deltService = async (data) => {
    const taskDocRef = doc(db, "Services", data.deltID);
    console.log(data.deltID);
    const x = await deleteDoc(taskDocRef).then(alert("successfully deleted"));
  };

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
    >
      <form onSubmit={handleSubmit(deltService)}>
        <label>
          Enter the ID of Service
          <input
            className="form-control"
            name="deltID"
            {...register("deltID", {
              required: "deltID is required",
            })}
            onKeyUp={() => trigger("deltID")}
          />
          {errors.deltID && (
            <div>
              <small className="text-danger">{errors.deltID.message}</small>
            </div>
          )}
        </label>
        <div>
          <input
            style={{ width: "100%" }}
            className="btn btn-success"
            type="submit"
            value="delete a service request"
          />
        </div>
      </form>
    </div>
  );
}

export default DeleteService;
