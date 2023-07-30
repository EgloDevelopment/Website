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
            <h1 className="text-6xl font-bold">View our pricing.</h1>
            <p className="text-sm font-bold mt-10">посмотреть наши цены.</p>
            <p className="animate-bounce text-5xl mt-20">↓</p>
          </div>
        </div>
      </div>
      <div className="mt-20" />

      <div class="flex flex-wrap  justify-center">

      <div className="card w-96 bg-base-200 m-5">
        <div className="card-body">
          <h2 className="card-title">Free</h2>
          <i>Included for free when you register</i>
          <ul className="ml-2 mt-2">
            <li>- Unlimited messages</li>
            <li>- Unlimited groups</li>
            <li>- Unlimited servers</li>
            <li>- 100MB File upload limit per-message</li>
            <li>- Servers limited to 10,000 members</li>
            <li>- Ads on certain screens</li>
            <li>ㅤ</li>
            <li>ㅤ</li>
            <li>ㅤ</li>
            <li>ㅤ</li>
            <li>ㅤ</li>
          </ul>
          <div className="card-actions justify-end mt-10">
            <button
              className="btn btn-primary capitalize"
              onClick={() =>
                (window.location.href = "https://app.eglo.pw/register")
              }
            >
              Register
            </button>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-base-200 m-5">
        <div className="card-body">
          <h2 className="card-title">Personal</h2>
          <i>$7 USD per month in cryptocurrency</i>
          <ul className="ml-2 mt-2">
            <li>- Unlimited messages</li>
            <li>- Unlimited groups</li>
            <li>- Unlimited servers</li>
            <li>- 1GB File upload limit per-message</li>
            <li>- Servers limited to 100,000 members</li>
            <li>- No ads</li>
            <li>- Access to beta</li>
            <li>ㅤ</li>
            <li>ㅤ</li>
            <li>ㅤ</li>
            <li>ㅤ</li>
          </ul>
          <div className="card-actions justify-end mt-10">
            <button
              className="btn btn-primary capitalize"
              onClick={() =>
                (window.location.href = "https://app.eglo.pw/register")
              }
              disabled
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-base-200 m-5">
        <div className="card-body">
          <h2 className="card-title">Enterprise</h2>
          <i>$15 USD Per-Month/Per-User in cryptocurrency</i>
          <ul className="ml-2 mt-2">
            <li>- Unlimited messages</li>
            <li>- Unlimited groups</li>
            <li>- Unlimited servers</li>
            <li>- 5GB File upload limit per-message</li>
            <li>- No server member limit</li>
            <li>- No ads</li>
            <li>- Access to beta</li>
            <li>- Individual server</li>
            <li>- Custom URL</li>
            <li>- Priority support</li>
          </ul>
          <div className="card-actions justify-end mt-10">
            <button
              className="btn btn-primary capitalize"
              onClick={() =>
                (window.location.href = "/contact")
              }
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      </div>

      <div className="mb-48" />

      <Footer className="absolute bottom-0 left-0" />
    </>
  );
}

export default App;
