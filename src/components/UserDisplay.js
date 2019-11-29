import React from "react";
import './lists/styles.css'
import '../styles/genre.css';

export default function UserDisplay(props) {
  const addOrRemove = function(action) {
    let addEnabled = true;
    //for each object in the group that's passsed in 
      for (let each of props.group) {
        //if the id of the user that is being displayed is equal to the id of that object
        if (props.friend["id"] === each["friend"]["id"]) {
          //they're already in the group, cannot add them
          addEnabled = false
        }
      }
      //if add enabled is not false, it's true, or it's false
      // addEnabled !== false? addEnabled=true: addEnabled=false;
      if (addEnabled === true && action==="add") {
        return props.useMovieNight(props.friend, "add")
      } else if (addEnabled ===false && action === "remove") {
        return props.useMovieNight(props.friend, "remove")
      }
    }

  return (
    <div className="friend-card">
       <img className="user-icon" src={props.friend.icon} alt={props.friend.name}/>
       <p className="user-name-text">{props.friend.name}</p>
       {props.action==="add" && 
      <img className="friend-night" id="add" src="./images/plusfriend.svg" alt="Delete" onClick={()=>addOrRemove("add")}/>
      }
      {props.action ==="remove" &&
       <img className="friend-night" id="trash" src="./images/trash.png" alt="Delete" onClick={()=>addOrRemove("remove")}/>
      }
      <img className="friend-night" id="eye" src="./images/eye.svg" alt="info" onClick={()=>console.log(props.friend)}/>
    </div>
  );
}