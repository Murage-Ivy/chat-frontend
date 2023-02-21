import React from "react";
import "./Card.css";

function Card() {
  return (
    <>
      <div className="user-card">
        <img
          src="https://img.freepik.com/free-photo/studio-shot-positive-dark-skinned-girl-wears-round-transparent-glasses_273609-28025.jpg?w=740&t=st=1676559006~exp=1676559606~hmac=ceffa8bc3368416d7072a946cf678b887552f9adfe6e3bfeb92b1aa11b60eb09"
          alt="person"
        />
        <div className="short-info">
          <h4>ALice Lambert</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit....</p>
        </div>
      </div>
    </>
  );
}

export default Card;
