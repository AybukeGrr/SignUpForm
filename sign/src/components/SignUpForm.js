import React, { useState } from "react";
import { useFormik } from "formik";
import validations from "./Validation";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import "./style.css"

function SignUpForm() {
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        // passwordConfirm: "",
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
        <div id="form">
          <Box>
            <TextField
              id="outlined-name"
              label="First Name"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
          </Box>
          <span id="span"></span>
          <Box>
            <TextField
              id="outlined-name"
              label="Last Name"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
          </Box>
        </div>
        <br />
        <div id="form">
          <Box>
            <TextField
              id="outlined-name"
              label="E-Mail"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <div id="error">{errors.email}</div>
            )}
          </Box>
          <span id="span"></span>
          <Box>
            <TextField
              id="outlined-password-input"
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <div id="error">{errors.password}</div>
            )}
          </Box>
          <br />
        </div>
        {/* <label htmlFor="passwordConfirm">Password Confirm:</label>
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
        <br /> */}
        {/* <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={values}
          onChange={handleChange}
        >
          <div>
            <FormControlLabel
              name="gender"
              value="female"
              checked={values.gender === "female"}
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              name="gender"
              value="male"
              checked={values.gender === "male"}
              control={<Radio />}
              label="Male"
            />
          </div>
        </RadioGroup> */}
        <Button
          id="button"
          variant="contained"
          onClick={() => {
            {errors.email ||
            errors.password ||
            values.email === "" ||
            values.password === "" || values.email === <TextField>{errors.email}</TextField>
              ? alert("Please fill in the required fields.")
              : alert(
                  `${values.firstName} ${values.lastName}` +
                    " your registration has been completed successfully."
                ); }
            
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default SignUpForm;
