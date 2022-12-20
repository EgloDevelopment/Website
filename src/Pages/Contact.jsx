import { useState, useEffect } from "react";
import "../App.css";
import Sidebar from "../Components/Sidebar/Sidebar";
import Footer from "../Components/Footer/Footer";

function App() {
  const [Status, setStatus] = useState(null);
  const [Email, setEmail] = useState("");
  const [Problem, setProblem] = useState("");
  const [Desc, setDesc] = useState("");
  const Contact = async () => {
    const response = await fetch("https://backend.eglo.pw/v1/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: Email,
      }),
    });
    const data = await response.json();
    setData(data);
    setData(data);
    if (data.status === true) {
      setStatus(true);
    } else {
      if (data.status === false) {
        setStatus(false);
      }
    }
  };
  useEffect(() => {}, []);
  return (
    <div className="App">
      {Status === false && (
        <div className="toast toast-center toast-top w-full">
          <div className="alert alert-error">
            <div>
              <span>{data.error}</span>
            </div>
          </div>
        </div>
      )}
      {Status === true && (
        <div className="toast toast-center toast-top w-full">
          <div className="alert alert-success">
            <div>
              <span>{data.success}</span>
            </div>
          </div>
        </div>
      )}
      <Sidebar />

      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col mt-[-150px]">
          <div className="text-5xl font-extrabold">
            <span className="bg-clip-text text-transparent select-none bg-gradient-to-r from-pink-500 to-violet-500">
              Contact us
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-44">
        <div className="m-10 card w-96 bg-none text-neutral-content">
          <div className="card-body items-center text-center">
            <div className="form-control w-full max-w-xs">
              <p className="font-mono text-xl mb-6">
                Please fill out all fields
              </p>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">What is your email?</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered input-primary w-full max-w-xs"
                  onChange={(event) => setEmail(event.target.value)}
                  value={Email}
                />
              </div>
              <div className="form-control w-full max-w-xs mt-8">
                <label className="label">
                  <span className="label-text">
                    What type of problem are you having?
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-bordered input-primary w-full max-w-xs"
                  onChange={(event) => setProblem(event.target.value)}
                  value={Problem}
                />
              </div>
              <div className="form-control w-full max-w-xs mt-8">
                <label className="label">
                  <span className="label-text">
                    Can you describe the problem for us?
                  </span>
                </label>
                <textarea
                  type="text"
                  className="input input-bordered input-primary w-full max-w-xs p-2"
                  onChange={(event) => setDesc(event.target.value)}
                  value={Desc}
                />
              </div>
            </div>
            <div className="card-actions justify-end mt-6">
              <button className="btn btn-primary btn-wide" onClick={Contact}>
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
