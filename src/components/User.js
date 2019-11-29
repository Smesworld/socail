import React from "react";

//this one shows up when there is no favorite. It's just an add symbol.
export default function User(props) {

  return (
    <div className="user">
      <h1>{props.user.name}</h1>
      <button type="button" onClick={props.logout}>Logout</button>
    </div>
  );
}