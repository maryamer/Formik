import React from "react";

export default function Input({ label, name, formik, type = "text" }) {
  return (
    <div className="formControl">
      <label>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        {...formik.getFieldProps({ name })}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="validationError">{formik.errors[name]}</div>
      )}
    </div>
  );
}
