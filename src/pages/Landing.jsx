import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";

import Hero from "../components/Hero";

import Footer from "../components/Footer";

import InfoCard from "../components/Info-card";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="mt-20" />
      
      <div className="text-center mb-64">
        <p className="text-5xl font-bold">Why Eglo?</p>
        <p className="mt-5 text-lg font-semibold px-10">
          Why would you need a secure communication platform?
        </p>
      </div>

      <InfoCard
        title="Over 5,500,000,000 Unencrypted Messages"
        text="There are over 5.5 Billion messages that are sent every day, all of
          them unencrypted, and readable by everyone, Hackers, The Government,
          your ISP, and even your neighbor. Together we are changing that."
      />

      <InfoCard
        title="End-to-End"
        text="All messages are sent with End-to-End encryption, making sure only the
        people you want, can see your message."
      />

      <InfoCard
        title="Mass Messaging, Made Simple"
        text="With Eglo, you can create servers with up to 10,000 people, all
        encrypted."
      />

      <InfoCard
        title="Secure File Uploading"
        text="Eglo provides encrypted, file and image uploads, up to 100MB on the
        free plan."
      />

      <InfoCard
        title="Privacy"
        text="Here at Eglo, we are strong advocates of privacy, we do not collect
        data on our users, simple as that."
      />

      <InfoCard
        title="Independently Owned"
        text="We are a startup company, we run our own servers, and are not owned by
        a larger tech company that harvests your data."
      />
      
      <InfoCard
        title="Anonymous Payments"
        text="We offer a generous free plan, but in case you need more, you can
        subscribe with any crypto-currency of your choice."
      />

      <div className="mb-48" />

      <Footer className="absolute bottom-0 left-0" />
    </>
  );
}

export default App;
