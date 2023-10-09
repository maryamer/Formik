import { useFormik } from "formik";
import React from "react";
import { useState } from "react";

export default function SignUpForm() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    // console.log(values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate: (values) => {
      let errors = {};
      if (!values.name) errors.name = "name is required";
      if (!values.email) errors.email = "email is required";
      if (!values.password) errors.password = "password is required";
      console.log(formik.errors);
      return errors;
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
