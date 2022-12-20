import { useState, useEffect } from "react";
import "../App.css";
import Sidebar from "../Components/Sidebar/Sidebar";
import Footer from "../Components/Footer/Footer";

function App() {
  useEffect(() => {}, []);
  //If you are seeing this, wow, the dedication, people like you make the world a better place, keep exploring
  return (
    <div className="App">
      <Sidebar />
      <input type="checkbox" id="NF" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Alert</h3>
          <p className="py-4">Eglo services will be down as we are migrating to ToastDB.</p>
          <div className="modal-action">
            <label htmlFor="NF" className="btn">
              Ok
            </label>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col mt-[-150px]">
          <div className="text-5xl font-extrabold">
            <span className="bg-clip-text text-transparent select-none bg-gradient-to-r from-pink-500 to-violet-500">
              Super easy
            </span>
          </div>
          <div className="mt-5 flex items-center justify-center">
            <div className="bg-indigo-600 shadow-lg shadow-indigo-600/75 rounded-lg h-16 w-40 text-3xl hover:mb-5 duration-300">
              <p className="text-white italic font-semibold font-mono select-none text-center mt-3">
                Privacy
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-[200px]">
        <div className="text-2xl font-extrabold text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
            - Features -
          </span>
          <p className="text-sm italic opacity-50">Hover for info</p>
        </div>
      </div>

      <div className="flex items-center justify-center mt-[10px]">
        <div className="text-1xl font-extrabold text-center">
          <div
            className="tooltip mt-3"
            data-tip="Bring your own encryption keys for your data"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
              Bring your own keys
            </span>
          </div>
          <br />
          <div
            className="tooltip mt-3"
            data-tip="We use our own software, so you don't have to worry about trusting other companies, except us, with your data"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
              Custom software
            </span>
          </div>
          <br />
          <div
            className="tooltip mt-3"
            data-tip="You can access Eglo on every device, everywhere"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
              Easy access
            </span>
          </div>
          <br />
          <div
            className="tooltip mt-3"
            data-tip="You decide what information we save about you, not us. You can disable logging and tracking entirely"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
              Logging
            </span>
          </div>
          <br />
          <div
            className="tooltip mt-3"
            data-tip="We offer extreme customization, you can choose what code runs on the servers and disable that code entirely"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
              Advanced
            </span>
          </div>
          <br />
          <div
            className="tooltip mt-3"
            data-tip="We live in the United States of America, so we are available anytime, but we would prefer to be contacted around 1800 UTC"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
              Easy support
            </span>
          </div>
          <br />
        </div>
      </div>

      <div className="flex items-center justify-center mt-[200px]">
        <div className="text-2xl font-extrabold text-center">
          <span className="mt-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Why us?
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[10px]">
        <p className="text-lg font-mono m-2 text-center w-[700px]">
          We are a United States and Europe based company, with a strong
          emphasis on privacy, Currently we operate on a "only-needed" policy,
          where the only data we store is the data that is absolutely required
          for our services to function, this helps us stay free, and you more
          private. Our services are designed to be used in a "high-risk"
          enviroment, where the user may be at risk, so we have implemented
          security features, such as if you press the Escape key three times, it
          will exit the page, and a few more things. Currently we have numerous
          servers with numerous URL's setup, so you never have to worry about us
          getting blocked. If you have any questions, please{" "}
          <a className="link" href="/contact">
            contact us
          </a>
          .
        </p>
      </div>

      <div className="flex items-center justify-center mt-[200px]">
        <div className="text-2xl font-extrabold text-center">
          <span className="mt-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            What we offer
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[10px]">
        <div className="flex items-center justify-center m-5">
          <div className="stats shadow m-1 w-80">
            <div className="stat w-96">
              <div className="stat-figure text-primary"></div>
              <div className="stat-value text-primary">Proxy</div>
              <div className="stat-desc">No logs proxy</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[-25px]">
        <div className="flex items-center justify-center m-5">
          <div className="stats shadow m-1 w-80">
            <div className="stat w-96">
              <div className="stat-figure text-accent">DEVELOPING</div>
              <div className="stat-value text-primary">Email</div>
              <div className="stat-desc">Secure email client</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[-25px]">
        <div className="flex items-center justify-center m-5">
          <div className="stats shadow m-1 w-80">
            <div className="stat w-96">
              <div className="stat-figure text-primary"></div>
              <div className="stat-value text-primary">Messaging</div>
              <div className="stat-desc">Encrypted messager</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[-25px]">
        <div className="flex items-center justify-center m-5">
          <div className="stats shadow m-1 w-80">
            <div className="stat w-96">
              <div className="stat-figure text-accent">DEVELOPING</div>
              <div className="stat-value text-primary">Phone</div>
              <div className="stat-desc">Secure calling</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[-25px]">
        <div className="flex items-center justify-center m-5">
          <div className="stats shadow m-1 w-80">
            <div className="stat w-96">
              <div className="stat-figure text-accent">DEVELOPING</div>
              <div className="stat-value text-primary">Texting</div>
              <div className="stat-desc">Message real phones</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[-25px]">
        <div className="flex items-center justify-center m-5">
          <div className="stats shadow m-1 w-80">
            <div className="stat w-96">
              <div className="stat-figure text-accent">DEVELOPING</div>
              <div className="stat-value text-primary">VPN</div>
              <div className="stat-desc">Free VPN server</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[-25px]">
        <div className="flex items-center justify-center m-5">
          <div className="stats shadow m-1 w-80">
            <div className="stat w-96">
              <div className="stat-figure text-accent">DEVELOPING</div>
              <div className="stat-value text-primary">Wallet</div>
              <div className="stat-desc">Easy crypto management</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5">
        <p className="font-mono text-xl">
          Convinced?{" "}
          <a className="link" href="https://app.eglo.pw/register">
            Signup
          </a>
          .
        </p>
      </div>

      <Footer />

      <div className="fixed m-3 bottom-0 right-0 z-50">
        <span className="flex h-3 w-3 ml-32">
          <span className="animate-ping relative inline-flex rounded-full h-3 w-3 bg-sky-500 mt-2 z-50"></span>
        </span>
        <label htmlFor="NF" className="btn position-absolute">
          Alert
        </label>
      </div>
    </div>
  );
}

export default App;
