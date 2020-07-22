import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriends from "./AddFriends";

function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((response) => {
        setFriends(response.data);
      })
      .catch((error) => console.log(error));
  }, [friends]);

  return (
    <div>
      <h3>Add a Friend</h3>
      <AddFriends />
      {friends.map((friend) => {
        return (
          <div key={friend.id}>
            <h3>{friend.name}</h3>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Friends;
