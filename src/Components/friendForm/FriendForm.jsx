import React from "react";
import "./FriendForm.css";
function FriendForm() {
  return (
    <>
    

      <div className="friend-form">
        <form className="friend-form-group">
        <h2>Add A Friend To Your Network</h2>
          <div className="friend-input">
            <label>Name</label>
            <br />
            <input type="text" />
            <br />
          </div>
          <div className="friend-input">
            <label>Email</label>
            <br />
            <input type="email" />
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
