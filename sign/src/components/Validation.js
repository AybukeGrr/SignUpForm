import React from 'react'
import * as yup from "yup";

const validations = yup.object().shape({
    email: yup.string().email("Geçerli bir mail girin.").required("bu alan zorunlu"),
    password: yup.string().min(8).required(),
    passwordConfirm: yup.string().oneOf([yup.ref("password")]).required(),
})

export default validations