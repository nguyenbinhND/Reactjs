import { useState } from "react";

export default function useHandelChange(initialValues) {
  const [values, setValue] = useState(initialValues);

  const handelChange = (event) => {
    const type = event.target.type;
    setValue({
      ...values,
      [event.target.name]:
        type === "checkbox" ? event.target.checked : event.target.value,
    });
  };
  return {
    values,
    handelChange,
  };
}
