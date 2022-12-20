import { useState } from "react";
import "../../App.css";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content mt-[110px]">
        <div>
          <span className="footer-title">Services</span>
          <a href="/contact" className="link link-hover">
            Proxy
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Learn</a>
          <a className="link link-hover">Docs</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">Acceptable use</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Sidebar;
