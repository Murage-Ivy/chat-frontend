import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./FriendForm.css";
import { addFriend } from "./friendSlice";
function FriendForm() {
  const [friend, setFriend] = useState({
    name: "",
    email: "",
  });

  const dispatch = useDispatch();

  function handleChange(event) {
    const { value, name } = event.target;
    setFriend({ ...friend, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addFriend(friend, localStorage.getItem("user")));
    setFriend({
      name: "",
      email: "",
    });
  }
  return (
    <>
      <div className="friend-form">
        <form className="friend-form-group" onSubmit={handleSubmit}>
          <h2>Add A Friend To Your Network</h2>
          <div className="friend-input">
            <label>Name</label>
            <br />
            <input
              type="text"
              value={friend.name}
              name="name"
              onChange={handleChange}
            />
            <br />
          </div>
          <div className="friend-input">
            <label>Email</label>
            <br />
            <input
              type="email"
              value={friend.email}
              name="email"
              onChange={handleChange}
            />
            <br />
          </div>

          <button className="add-friend">Add Friend</button>
        </form>
        <img
          src="../assets/images/undraw_social_friends_re_7uaa.svg"
          alt="friends"
        />
      </div>
    </>
  );
}

export default FriendForm;
