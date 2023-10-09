import { useFormik } from "formik";
import * as Yup from "yup";

export default function SignUpForm() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    // console.log(values);
  };
  //   const validate = (values) => {
  //     let errors = {};
  //     if (!values.name) errors.name = "name is required";
  //     if (!values.email) errors.email = "email is required";
  //     if (!values.password) errors.password = "password is required";
  //     console.log(formik.errors);
  //     return errors;
  //   };
  const validationSchema = Yup.object({
    name: Yup.string("name should be string ").required("name is required"),
    email: Yup.string()
      .required("email is required")
      .email("invalid email format"),
    password: Yup.string().required("password is required"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="formControl">
          <label>Name</label>
          <input
            type="text"
            name="name"
            {...formik.getFieldProps("name")}
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
            // value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            <div className="validationError">{formik.errors.name}</div>
          )}
        </div>
        <div className="formControl">
          <label>Email</label>
          <input
            type="text"
            name="email"
            {...formik.getFieldProps("email")}

            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
            // value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="validationError">{formik.errors.email}</div>
          )}
        </div>
        <div className="formControl">
          <label>Password</label>
          <input
            type="text"
            name="password"
            {...formik.getFieldProps("password")}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="validationError">{formik.errors.password}</div>
          )}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
