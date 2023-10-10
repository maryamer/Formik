import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Input from "./common/input";
import RadioInput from "./common/RadioInput";

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
  const radioOptions = [
    { label: "male", value: "0" },
    { label: "female", value: "1" },
  ];
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
        <Input label="Name" name="name" formik={formik} />
        <Input label="Email" name="email" formik={formik} type="email" />
        <Input label="Phone" name="phone" formik={formik} type="number" />
        <Input
          label="Password"
          name="password"
          formik={formik}
          type="password"
        />
        <Input
          label="Password Confirmation"
          name="passwordConfirm"
          formik={formik}
          type="passwordConfirm"
        />

        <RadioInput radioOptions={radioOptions} formik={formik} name="gender" />
        <button onClick={() => setFormValues(savedData)}>load data</button>
        <button type="submit " disabled={!formik.isValid}>
          Submit
        </button>
      </form>
    </div>
  );
}
