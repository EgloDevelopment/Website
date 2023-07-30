import { useState } from "react";

function Component(props) {
  return (
    <>
      <div className="card w-96 bg-base-200 m-5">
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <i>{props.price}</i>
          <ul className="ml-2 mt-2">
            <li>{props.point1}</li>
            <li>{props.point2}</li>
            <li>{props.point3}</li>
            <li>{props.point4}</li>
            <li>{props.point5}</li>
            <li>{props.point6}</li>
            <li>{props.point7}</li>
            <li>{props.point8}</li>
            <li>{props.point9}</li>
            <li>{props.point10}</li>
            <li>{props.point11}</li>
          </ul>
          <div className="card-actions justify-end mt-20">
            <button
              className="absolute m-5 bottom-0 right-0 btn btn-primary capitalize"
              onClick={() => (window.location.href = props.buttonLocation)}
            >
              {props.buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Component;
