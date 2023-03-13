import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";

const schemaValidation = Yup.object({
  firstName: Yup.string().required().max(10, "must be 10 character"),
});

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
    watch,
    reset,
    setFocus,
  } = useForm({ resolver: yupResolver(schemaValidation), mode: "onChange" });

  // const onSubmit = (values) => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve();
  //       console.log(values);
  //     }, 5000);
  //   });
  // };
  // const Submit = async(values) => {
  //  const response = await axios.get('https://hn.algolia.com/api/v1/search?query=react')
  //  return response.data
  //  //tra ve 1 promise
  // };
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  const watchShowAge = watch("showAge", false);
  const onSubmit = async (values) => {
    if (isValid === true) {
      console.log("send data to backend");
    }
    //tra ve 1 promise

    reset({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Please enter your first name"
          className="p-4 rounded-md outline-none border border-gray-100"
          {...register("firstName")}
          // {...register("firstName", { required: true, maxLength: 10 })}
          // {...register("firstName", {
          //   required: true,
          //   maxLength: 10,
          // })}
        />

        {errors?.firstName && (
          <div className="text-red-500 text-sm">
            {errors.firstName?.message}
          </div>
        )}

        {errors?.firstName?.type === "maxLength" && (
          <div className="text-red-500 text-sm">must be 10 or less</div>
        )}
        {/* {errors?.firstName?.type === "maxLength" && (
          <div className="text-red-500 text-sm">
            Must be 10 characters or less
          </div>
        )} */}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Please enter your first name"
          className="p-4 rounded-md outline-none border border-gray-100"
          {...register("lastName")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          placeholder="Please enter your email"
          className="p-4 rounded-md outline-none border border-gray-100"
          {...register("email")}
        />
      </div>

      <div className="flex flex-col gap-2 mb-5 mt-3 ">
        <input type="checkbox" {...register("showAge")} />
        {watchShowAge && <input type="number" placeholder="enter number" />}
      </div>

      <div className="">
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold"
        >
          {isSubmitting ? (
            <div
              className="mx-auto w-5 h-5 border-2 border-white border-t-2 
          border-t-transparent rounded-full animate-spin"
            ></div>
          ) : (
            " Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default SignUpFormHook;
