import { useState } from "react";

function Component(props) {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="text-5xl">
            <h1 className="text-6xl font-bold">{props.titleEN}</h1>
            <p className="text-sm font-bold mt-10">{props.titleRU}</p>
            <p className="animate-bounce text-5xl mt-20">↓</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Component;
