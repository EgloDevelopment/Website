import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";

import Hero from "../components/Hero";

import Footer from "../components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="mt-20" />
      <div className="text-center">
        <p className="text-5xl font-bold">Why Eglo?</p>
        <p className="mt-5 text-lg font-semibold px-10">
          Why would you need a secure communication platform?
        </p>
      </div>

      <div className="lg:text-center lg:-ml-3 mt-64 ml-3 pr-5">
        <h1 className="text-4xl font-bold">
          Over 5,500,000,000 Unencrypted Messages
        </h1>
        <p className="mt-6 font-semibold">
          There are over 5.5 Billion messages that are sent every day, all of
          them unencrypted, and readable by everyone, Hackers, The Government,
          your ISP, and even your neighbor. Together we are changing that.
        </p>
      </div>

      <div className="lg:text-center lg:-ml-3 mt-32 ml-3 pr-5">
        <h1 className="text-4xl font-bold">End-to-End</h1>
        <p className="mt-6 font-semibold">
          All messages are sent with End-to-End encryption, making sure only the
          people you want, can see your message.
        </p>
      </div>

      <div className="lg:text-center lg:-ml-3 mt-32 ml-3 pr-5">
        <h1 className="text-4xl font-bold">Mass Messaging, Made Simple</h1>
        <p className="mt-6 font-semibold">
          With Eglo, you can create servers up to 10,000 people, all encrypted.
        </p>
      </div>

      <div className="lg:text-center lg:-ml-3 mt-32 ml-3 pr-5">
        <h1 className="text-4xl font-bold">Secure File Uploading</h1>
        <p className="mt-6 font-semibold">
          Eglo provides encrypted, file and image uploads, up to 100MB on the
          free plan.
        </p>
      </div>

      <div className="lg:text-center lg:-ml-3 mt-32 ml-3 pr-5">
        <h1 className="text-4xl font-bold">Privacy</h1>
        <p className="mt-6 font-semibold">
          Here at Eglo, we are strong advocates of privacy, we do not collect
          data on our users, simple as that.
        </p>
      </div>

      <div className="lg:text-center lg:-ml-3 mt-32 ml-3 pr-5">
        <h1 className="text-4xl font-bold">Independently Owned</h1>
        <p className="mt-6 font-semibold">
          We are a startup company, we run our own servers, and are not owned by
          a larger tech company that harvests your data.
        </p>
      </div>

      <div className="lg:text-center lg:-ml-3 mt-32 ml-3 pr-5">
        <h1 className="text-4xl font-bold">Anonymous Payments</h1>
        <p className="mt-6 font-semibold">
          We offer a generous free plan, but in case you need more, you can
          subscribe with any crypto-currency of your choice.
        </p>
      </div>


      <div className="mb-48" />

      <Footer className="absolute bottom-0 left-0" />
    </>
  );
}

export default App;
