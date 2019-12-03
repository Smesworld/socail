import './MovieBox.scss'
import React from "react";
import { Draggable } from "react-beautiful-dnd"
import Popup from "reactjs-popup";
import MovieInfo from '../MovieInfo';

export default function MovieBox(props) {
  const contentStyle = {
    // maxWidth: "300px",
    // height: "200px",
    borderRadius: "20px"
  };

  return (
    <Draggable draggableId={props.id.toString()} index={props.index}>
      {(provided) => (
        <div className="movie_box"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="tiny_poster">
            <img src={props.img} alt={props.title}/>
          </div>
          {props.removeLaterMovie &&
            // <div className="remove" onClick={() => props.removeLaterMovie(props.id)}>
            <img className="remove" src="./images/trash-button.png" alt="Delete" onClick={() => props.removeLaterMovie(props.id)}/>
            // </div>
          }
          <Popup className="popup" trigger=
            {
              <div className="info">
                <img className="info" id="eye" src="./images/eyebackground.png" alt="info"/>
              </div>
            }
            modal
            contentStyle={contentStyle}
          >
            {close => <MovieInfo img={props.img} title={props.title} description={props.description} close={close}/>}
          </Popup>
        </div>
      )}
    </Draggable>
  );
}