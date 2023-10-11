import React from "react";

export default function CheckBoxInput({ checkBoxOptions, formik, name }) {
  return (
    <div className="formControl">
      {checkBoxOptions.map((item) => (
        <div key={item.value}>
          {" "}
          <input
            type="checkbox"
            id={item.value}
            name={name}
            value={item.value}
            onChange={formik.handleChange}
            checked={formik.values[name].includes(item.value)}
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
