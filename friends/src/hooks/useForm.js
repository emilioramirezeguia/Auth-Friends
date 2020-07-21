import { useState } from "react";

const emptyForm = {
  username: "",
  password: "",
};

export const useForm = () => {
  const [isLoading, setIsLoading] = useState();
  const [form, setForm] = useState(emptyForm);

  const handleChanges = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return [form, handleChanges];
};
