import React from "react";

export default function RadioInput({ radioOptions, formik, name }) {
  return (
    <div className="formControl">
      {radioOptions.map((item) => (
        <div key={item.value}>
          {" "}
          <input
            type="radio"
            id={item.value}
            name={name}
            value={item.value}
            onChange={formik.handleChange}
            checked={formik.values[name] === item.value}
          />
          <label htmlFor={item.value}>{item.label}</label>
        </div>
      ))}

      {formik.errors[name] && formik.touched[name] && (
        <div className="validationError">{formik.errors[name]}</div>
      )}
    </div>
  );
}
