import React from "react";
import { useForm } from "../hooks/useForm";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const emptyAddFriendForm = {
  name: "",
  age: "",
  email: "",
};

function AddFriends(props) {
  const [form, setForm, handleChanges] = useForm(emptyAddFriendForm);

  const addFriend = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("/api/friends", form)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
    setForm(emptyAddFriendForm);
  };

  return (
    <form onSubmit={addFriend}>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        name="name"
        value={form.name}
        onChange={handleChanges}
      />
      <label htmlFor="age">Age: </label>
      <input
        id="age"
        type="text"
        name="age"
        value={form.age}
        onChange={handleChanges}
      />
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="text"
        name="email"
        value={form.email}
        onChange={handleChanges}
      />
      <button>Add friend</button>
    </form>
  );
}

export default AddFriends;
