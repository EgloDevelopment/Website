import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";

import HeroBasic from "../components/Hero-basic";

import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <HeroBasic titleEN="Contact us." titleRU="связаться с нами." />

      <div className="mt-20" />
      <div className="text-center">
        <p className="text-5xl font-bold">Email</p>
        <p className="mt-5 text-lg font-semibold">
          Send an email to:{" "}
          <a
            href="mailto:contact@eglo.pw"
            className="underline underline-offset-8"
          >
            contact@eglo.pw
          </a>
        </p>
        <p className="text-5xl font-bold mt-20">Eglo</p>
        <p className="mt-5 text-lg font-semibold">
          Add the user{" "}
          <a
            href="https://app.eglo.pw"
            target="_blank"
            className="underline underline-offset-8"
          >
            EgloContact
          </a>{" "}
          as a friend on Eglo
        </p>
      </div>

      <div className="mb-48" />

      <Footer className="absolute bottom-0 left-0" />
    </>
  );
}

export default App;
