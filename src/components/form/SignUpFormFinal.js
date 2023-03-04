import React from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

const SignUpFormFinal = () => {
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
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "must be 20 characters or less")
          .required("required"),
        lastName: Yup.string()
          .max(20, "must be 20 characters or less")
          .required("required"),
        email: Yup.string().email().required("required"),
        intro: Yup.string()
          .max(30, "must be 30 characters or less")
          .required("required"),
        job: Yup.string()
          .max(30, "must be 30 characters or less")
          .required("required"),
        terms: Yup.boolean(),
      })}
      onSubmit={(values) => {}}
    >
      <form
        action=""
        className="p-10 w-full max-w-[500px] mx-auto"
        autoComplete="off"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName">First Name</label>
          <Field
            name="firstName"
            type="text"
            placeholder="Please enter your first name"
            className="p-4 rounded-md outline-none border border-gray-100"
          ></Field>
          <div className="text-sm text-red-500 pb-2">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="lastName">Last Name</label>
          <Field
            name="lastName"
            type="text"
            placeholder="Please enter your first name"
            className="p-4 rounded-md outline-none border border-gray-100"
          ></Field>
          <div className="text-sm text-red-500 pb-3">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="email"
            placeholder="Enter your email address"
            className="p-4 rounded-md outline-none border border-gray-100"
          ></Field>
          <div className="text-sm text-red-500 pb-3">
            <ErrorMessage name="email"></ErrorMessage>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="intro">Intro</label>
          <Field
            name="intro"
            placeholder="introduce yourself......"
            className="p-4  h-[150px] resize-none rounded-md outline-none border border-gray-100"
            as="textarea"
          ></Field>
          <div className="text-sm text-red-500 pb-3">
            <ErrorMessage name="intro"></ErrorMessage>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="job">Select your job</label>
          <Field
            name="job"
            className="p-2 rounded-md outline-none border border-gray-100"
            as="select"
          >
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">fullstack Developer</option>
          </Field>
          <div className="text-sm text-red-500 pb-3">
            <ErrorMessage name="job"></ErrorMessage>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-5">
          <Field
            name="terms"
            type="checkbox"
            className="p-2 rounded-md outline-none border border-gray-100"
          ></Field>
          <p>I accept the terms and conditions</p>
          <div className="text-sm text-red-500 pb-3">
            <ErrorMessage name="terms"></ErrorMessage>
          </div>
        </div>

        <div className="">
          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </Formik>
  );
};

export default SignUpFormFinal;
