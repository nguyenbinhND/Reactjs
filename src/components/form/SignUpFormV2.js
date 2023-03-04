import React from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

const SignUpFormV2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(10, "must be 20 characters or less")
          .required("required"),
        lastName: Yup.string()
          .max(10, "must be 20 characters or less")
          .required("required"),
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

export default SignUpFormV2;
