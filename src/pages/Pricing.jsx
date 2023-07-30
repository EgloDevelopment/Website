import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";

import HeroBasic from "../components/Hero-basic";

import Footer from "../components/Footer";

import PriceCard from "../components/Price-card";

function App() {
  return (
    <>
      <Navbar />

      <HeroBasic titleEN="View our pricing." titleRU="посмотреть наши цены." />

      <div className="mt-20" />

      <div className="flex flex-wrap justify-center">
        <PriceCard
          title="Free"
          price="Included for free when you register"
          point1="- Unlimited messages"
          point2="- Unlimited groups"
          point3="- Unlimited servers"
          point4="- 100MB File upload limit per-message"
          point5="- Servers limited to 10,000 members"
          point6="- Ads on certain screens"
          buttonLocation="https://app.eglo.pw/register"
          buttonText="Register"
        />

        <PriceCard
          title="Personal"
          price="$7 USD per month in cryptocurrency"
          point1="- Unlimited messages"
          point2="- Unlimited groups"
          point3="- Unlimited servers"
          point4="- 1GB File upload limit per-message"
          point5="- Servers limited to 100,000 members"
          point6="- No ads"
          point7="- Access to beta"
          buttonLocation="/purchase?plan=personal"
          buttonText="Purchase"
        />

        <PriceCard
          title="Enterprise"
          price="$15 USD Per-Month/Per-User in cryptocurrency"
          point1="- Unlimited messages"
          point2="- Unlimited groups"
          point3="- Unlimited servers"
          point4="- 5GB File upload limit per-message"
          point5="- No server member limit"
          point6="- No ads"
          point7="- Access to beta"
          point8="- Individual server"
          point9="- Custom URL"
          point10="- Priority support"
          buttonLocation="/contact"
          buttonText="Contact sales"
        />
      </div>

      <div className="mb-48" />

      <Footer className="absolute bottom-0 left-0" />
    </>
  );
}

export default App;
