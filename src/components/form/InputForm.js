import React, { useState } from "react";
import useHandelChange from "../hooks/useHandelChange";

const InputForm = () => {
  // const [fullname, setFullName] = useState("");
  // const [message, setMessage] = useState("");
  // const [country, setCountry] = useState("");
  // const [values, setValue] = useState({
  //   fullname: "",
  //   email: "",
  //   hobby: false,
  // });

  // const handelInputChange = (event) => {
  //   const type = event.target.type;
  //   setValue({
  //     ...values,
  //     [event.target.name]:
  //       type === "checkbox" ? event.target.checked : event.target.value,
  //   });

  // if (type === "checkbox") {
  //   setValue({
  //     ...values,
  //     [event.target.name]: event.target.checked,
  //   });
  // } else {
  //   setValue({
  //     ...values,
  //     [event.target.name]: event.target.value,
  //   });
  // }
  // };

  const { values, handelChange } = useHandelChange({
    fullname: "",
    email: "",
    hobby: false,
  });
  const [nameError, setNameError] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (values.fullname === "") {
      setNameError("your full name is empty");
    } else {
      setNameError("");
    }
  };
  return (
    <div className="p-5 ">
      <form
        className="flex gap-x-3"
        autoComplete="off"
        onSubmit={handleSubmitForm}
      >
        <div className="flex flex-col gap-y-3">
          <input
            type="text"
            name="fullname"
            className="w-full max-w-[300px] p-3 border border-gray-200 rounded-lg"
            placeholder="Please Enter Your Name"
            onChange={handelChange}
          />
          {nameError}
        </div>

        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-3 border border-gray-200 rounded-lg"
          placeholder="Please Enter Your Email"
          onChange={handelChange}
        />
        {/* <input type="checkbox" name="hobby" id="" onChange={handelChange} /> */}
        <button type="submit" className="p-3 rounded-lg text-white bg-blue-500">
          Submit
        </button>
      </form>

      {/* {message}
      <textarea
        className="w-full max-w-[300px] p-3 border border-gray-200 rounded-lg"
        placeholder="Please Enter Your message"
        onChange={handelTextareaChange}
        name="message"
      ></textarea>

      {country}
      <select name="country" id="" onChange={handelSelectChange}>
        <option value="vietnam">VN</option>
        <option value="usa">USA</option>
        <option value="japan">Japan</option>
      </select> */}
    </div>
  );
};

export default InputForm;
