import React, { useState } from "react";

const InputForm = () => {
  const [fullname, setFullName] = useState("");
  // const [message, setMessage] = useState("");
  // const [country, setCountry] = useState("");
  const [values, setValue] = useState({
    fullname: "",
    email: "",
  });
  const handelInputChange = (event) => {
    setValue({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="p-5 ">
      <div className="flex gap-x-3">
        <input
          type="text"
          name="fullname"
          className="w-full max-w-[300px] p-3 border border-gray-200 rounded-lg"
          placeholder="Please Enter Your Name"
          onChange={handelInputChange}
        />

        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-3 border border-gray-200 rounded-lg"
          placeholder="Please Enter Your Email"
          onChange={handelInputChange}
        />
      </div>

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
