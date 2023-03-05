import React from "react";
import { Form, Field, ErrorMessage, Formik, useField } from "formik";
import * as Yup from "yup";

const SignUpFormFinalComponent = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      // validationSchema={Yup.object({
      //   firstName: Yup.string().required("required"),
      //   lastName: Yup.string().required("required"),
      //   email: Yup.string().email().required("required"),
      //   intro: Yup.string().required("required"),
      //   job: Yup.string().required("required"),
      //   terms: Yup.boolean().oneOf([true], "please check the terms"),
      // })}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          actions.resetForm({
            firstName: "",
            lastName: "",
            email: "",
            intro: "",
            job: "",
            terms: false,
          });
          actions.setSubmitting(false);
        }, 5000);
      }}
    >
      {(formik) => {
        return (
          <Form
            action=""
            className="p-10 w-full max-w-[500px] mx-auto"
            autoComplete="off"
          >
            <MyInput
              label="First Name"
              name="firstName"
              id="firstName"
              placeholder="Enter your first name"
            ></MyInput>
            <MyInput
              label="Last Name"
              name="lastName"
              id="lastName"
              placeholder="Enter your last name"
            ></MyInput>
            <MyInput
              label="Email address"
              name="email"
              id="email"
              type="email"
              placeholder="Enter your email address"
            ></MyInput>
            <MyTextarea
              label="Intro"
              name="intro"
              id="intro"
              type="email"
              placeholder="introduce yourself......"
            ></MyTextarea>
            <MySelectBox label="Select your job" name="job" id="job">
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">fullstack Developer</option>
            </MySelectBox>
            <MyCheckBox name="terms">
              <p>I accept the terms and conditions</p>
            </MyCheckBox>

            <div className="">
              <button
                type="submit"
                className="w-full p-4 bg-blue-600 text-white font-semibold"
                disabled={formik.isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
        {...props}
        {...field}
        className="p-4 rounded-md outline-none border border-gray-100"
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500 pb-2">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        className="p-4 rounded-md outline-none border border-gray-100 h-[150px] resize-none"
        type="text"
        {...props}
        {...field}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500 pb-2">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MySelectBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        className="p-4 rounded-md outline-none border border-gray-100 "
        {...props}
        {...field}
      ></select>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500 pb-2">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckBox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2">
      <label className="flex items-center gap-2">
        <input type="checkbox" {...props} {...field} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500 pb-2">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SignUpFormFinalComponent;
