import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  // Cach 1
  //   if (!values.firstName && !values.lastName) {
  //     errors.firstName = "required";
  //     errors.lastName = "required";
  //   } else if (values.firstName.length > 20 && values.lastName.length > 20) {
  //     errors.firstName = "must be 20 characters or less";
  //     errors.lastName = "must be 20 characters or less";
  //   } else if (values.firstName.length > 20) {
  //     errors.firstName = "must be 20 characters or less";
  //   } else if (values.lastName.length > 20) {
  //     errors.lastName = "must be 20 characters or less";
  //   }

  //Cach 2
  if (!values.firstName) {
    errors.firstName = "required";
  } else if (values.firstName.length > 20) {
    errors.firstName = "must be 20 characters or less";
  }

  if (!values.firstName) {
    errors.lastName = "required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "must be 20 characters or less";
  }
  return errors;
};

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Please enter your first name"
          className="p-4 rounded-md outline-none border border-gray-100"
          value={formik.touched.firsName && formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.firstName ? (
          <div className="text-sm text-red-500">{formik.errors.firstName}</div>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Please enter your first name"
          className="p-4 rounded-md outline-none border border-gray-100"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-sm text-red-500">{formik.errors.lastName}</div>
        ) : null}
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
  );
};

export default SignUpForm;
