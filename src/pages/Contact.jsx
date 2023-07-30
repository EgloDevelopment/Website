import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";

import Hero from "../components/Hero";

import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="text-5xl">
            <h1 className="text-6xl font-bold">Contact us.</h1>
            <p className="text-sm font-bold mt-10">связаться с нами.</p>
            <p className="animate-bounce text-5xl mt-20">↓</p>
          </div>
        </div>
      </div>
      <div className="mt-20" />
      <div className="text-center">
        <p className="text-5xl font-bold">Email</p>
        <p className="mt-5 text-lg font-semibold">
          Send an email to: <a href="mailto:contact@eglo.pw" className="underline underline-offset-8">contact@eglo.pw</a>
        </p>
        <p className="text-5xl font-bold mt-20">Eglo</p>
        <p className="mt-5 text-lg font-semibold">
          Add the user <a href="https://app.eglo.pw" target="_blank" className="underline underline-offset-8">EgloContact</a> as a friend on Eglo
        </p>
      </div>

      <div className="mb-48" />

      <Footer className="absolute bottom-0 left-0" />
    </>
  );
}

export default App;
