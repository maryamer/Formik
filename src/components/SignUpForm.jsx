import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const savedData = {
  name: "maryam eb",
  email: "maryamebrahimi@gmail.com",
  phone: "09125558866",
  password: "Maryam@2",
  passwordConfirm: "Maryam@2",
  gender: "1",
};
const initialValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  passwordConfirm: "",
  gender: "",
};
export default function SignUpForm() {
  const [formValues, setFormValues] = useState(null);
  const onSubmit = (values) => {
    // console.log("submit");
  };
  const validationSchema = Yup.object({
    name: Yup.string("name should be string ")
      .required("name is required")
      .min(6, "name at least 6 characters"),
    email: Yup.string()
      .required("email is required")
      .email("invalid email format"),
    phone: Yup.string()
      .required()
      .matches(/^[0-9]{11}$/, "Invalid phone number")
      .nullable(),
    password: Yup.string()
      .required("password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    passwordConfirm: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    gender: Yup.string().required("gender is required"),
  });
  const formik = useFormik({
    initialValues: formValues || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="formControl">
          <label>Name</label>
          <input type="text" name="name" {...formik.getFieldProps("name")} />
          {formik.errors.name && formik.touched.name && (
            <div className="validationError">{formik.errors.name}</div>
          )}
        </div>
        <div className="formControl">
          <label>Email</label>
          <input type="text" name="email" {...formik.getFieldProps("email")} />
          {formik.errors.email && formik.touched.email && (
            <div className="validationError">{formik.errors.email}</div>
          )}
        </div>
        <div className="formControl">
          <label>Phone :</label>
          <input
            type="number"
            name="phone"
            {...formik.getFieldProps("phone")}
          />
          {formik.errors.phone && formik.touched.phone && (
            <div className="validationError">{formik.errors.phone}</div>
          )}
        </div>
        <div className="formControl">
          <label>Password</label>
          <input
            type="password"
            name="password"
            {...formik.getFieldProps("password")}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="validationError">{formik.errors.password}</div>
          )}
        </div>
        <div className="formControl">
          <label>Password Confirmation</label>
          <input
            type="password"
            name="passwordConfirm"
            {...formik.getFieldProps("passwordConfirm")}
          />
          {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
            <div className="validationError">
              {formik.errors.passwordConfirm}
            </div>
          )}
        </div>
        <div className="formControl">
          <input
            type="radio"
            id="0"
            name="gender"
            value="0"
            onChange={formik.handleChange}
            checked={formik.values.gender === "0"}
          />
          <label htmlFor="0">male</label>
          <input
            type="radio"
            id="1"
            name="gender"
            value="1"
            onChange={formik.handleChange}
            checked={formik.values.gender === "1"}
          />
          <label htmlFor="1">female</label>
          {formik.errors.gender && formik.touched.gender && (
            <div className="validationError">{formik.errors.gender}</div>
          )}
        </div>
        <button onClick={() => setFormValues(savedData)}>load data</button>
        <button type="submit " disabled={!formik.isValid}>
          Submit
        </button>
      </form>
    </div>
  );
}
