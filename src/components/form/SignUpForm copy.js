import React from "react";
import { useFormik } from "formik";

const SignUpForm = () => {
  const formik = useFormik({
    initialValue: {
      firstName: "",
    },
    onSubmit: (values) => {},
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Please enter your first name"
          className="p-4 rounded-md outline-none border border-gray-100"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
      </div>
      <div className="">
        <button className="w-full p-4 bg-blue-600 text-white font-semibold">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
