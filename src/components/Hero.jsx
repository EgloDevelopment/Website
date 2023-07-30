import { useState, useEffect } from "react";

function Component(props) {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  let text_array = [
    "Simple. Secure. Private.",
    "Einfach. Sicher. Privatgelände.",
    "Простой. Безопасный. Частный.",
    "Prosty. Bezpieczne. Prywatny.",
    "Simple. Seguro. Privado.",
    "Jednoduchý. Zajistit. Soukromé.",
    "Simple. Sécurisé. Privé.",
  ];

  const [show, setsetShow] = useState(true);
  const [title, setTitle] = useState(text_array[0]);

  async function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  async function changeText() {
    setInterval(async function () {
      let array_num = await randomNumber(text_array.length - 1, 0);
      setsetShow(false);
      await delay(150);
      setTitle(text_array[array_num]);
      await delay(150);
      setsetShow(true);
    }, 5000);
  }

  useEffect(() => {
    changeText();
  }, []);

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div
            className={`max-w-md text-5xl transition-opacity duration-750 ${
              show ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1
              className={`text-6xl font-bold 
              }`}
            >
              {title}
            </h1>
            <p className="py-6">{props.subtext}</p>
            <p className="animate-bounce text-4xl">↓</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Component;
