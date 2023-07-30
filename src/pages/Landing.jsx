import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";

import Hero from "../components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="mt-20" />
      <div className="text-center">
        <p className="text-5xl font-bold">Why Eglo?</p>
        <p className="mt-5 text-lg font-semibold">
          Why would you need a secure communication platform?
        </p>
      </div>

      <div className="lg:text-center lg:-ml-3 mt-64 ml-3">
        <h1 className="text-4xl font-bold">
          Over 5,500,000,000 Unencrypted Messages
        </h1>
        <p className="mt-6">
          There are over 5.5 Billion messages that are sent every day, all of
          them unencrypted, and readable by everyone, Hackers, The Government,
          your ISP, and even your neighbor. Together we are changing that.
        </p>
      </div>

      <div className="lg:text-center lg:-ml-3 mt-44 ml-3">
        <h1 className="text-4xl font-bold">
          Mass Messaging, Made Simple
        </h1>
        <p className="mt-6">
          With Eglo, you can create servers up to 10,000 people, all encrypted.
        </p>
      </div>

      <div className="lg:text-center lg:-ml-3 mt-44 ml-3">
        <h1 className="text-4xl font-bold">
          Secure File Uploading
        </h1>
        <p className="mt-6">
          Eglo provides encrypted, free, file uploads, up to 100MB on the free plan.
        </p>
      </div>


      <div className="mb-48" />
    </>
  );
}

export default App;
