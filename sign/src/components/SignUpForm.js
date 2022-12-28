import React from "react";
import { useFormik } from "formik";
import validations from "./Validation";

function SignUpForm() {
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        gender: "male",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: validations,
    });
  return (
    <div>
      <h1> SignUpForm</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="aaaa@gmail.com"
        />
        {errors.email && touched.email && <div>{errors.email}</div>}
        <br />
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="******"
        />
        {errors.password && touched.password && <div>{errors.password}</div>}
        <br />
        <label htmlFor="passwordConfirm">Password Confirm:</label>
        <input
          name="passwordConfirm"
          type="password"
          value={values.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="******"
        />
        {errors.passwordConfirm && touched.passwordConfirm && (
          <div>{errors.passwordConfirm}</div>
        )}
        <br />
        <span>Male</span>
        <input
          name="gender"
          type="radio"
          value="male"
          onChange={handleChange}
          checked={values.gender === "male"}
        />
        <br />
        <span>Female</span>
        <input
          name="gender"
          type="radio"
          value="female"
          onChange={handleChange}
          checked={values.gender === "female"}
        />
        <br />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
