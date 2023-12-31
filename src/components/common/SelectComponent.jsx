export default function SelectComponent({ selectOptions, formik, name }) {
  return (
    <div className="formControl">
      <select name={name} {...formik.getFieldProps({ name })}>
        {" "}
        {selectOptions.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <div className="validationError">{formik.errors[name]}</div>
      )}
    </div>
  );
}
