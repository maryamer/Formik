import { useFormik } from "formik";
import React from "react";
import { useState } from "react";

export default function SignUpForm() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="formControl">
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div className="formControl">
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className="formControl">
          <label>Password</label>
          <input
            type="text"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
