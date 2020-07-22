import { useState } from "react";

export const useForm = (initialForm) => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState(initialForm);

  const handleChanges = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return [form, setForm, handleChanges, isLoading, setIsLoading];
};
