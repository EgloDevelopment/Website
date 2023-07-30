import { useState } from "react";

function Component(props) {
  return (
    <>
      <footer className="static footer p-10 bg-base-200 text-base-content left-0 bottom-0">
        <div>
          <img className="w-5 h-5" src="/logo.png" />
          <p>
            <b>Eglo Development.</b>
            <br />
            "Don't be the weakest link in the chain."
          </p>
        </div>
        <div>
          <span className="footer-title">Locations</span>
          <a className="link link-hover" href="/">Home</a>
          <a className="link link-hover" href="/pricing">Pricing</a>
          <a className="link link-hover" href="https://uptime.eglo.pw" target="_blank">Uptime</a>
          <a className="link link-hover" href="/contact">Contact</a>
          <a className="link link-hover" href="https://app.eglo.pw/login" target="_blank">Login</a>
          <a className="link link-hover" href="https://app.eglo.pw/register" target="_blank">Register</a>
          <a className="link link-hover" href="https://app.eglo.pw/recover-send" target="_blank">Forgot Password</a>
          <a className="link link-hover" href="https://cdn.eglo.pw/api/public/dl/IhZzVEgQ?inline=true" target="_blank">Donate</a>
        </div>
        <div>
          <span className="footer-title">What we use</span>
          <a className="link link-hover" href="https://a-ads.com" target="_blank">Ads service</a>
          <a className="link link-hover" href="https://uptime.kuma.pet/" target="_blank">Uptime Kuma</a>
          <a className="link link-hover" href="https://ackee.electerious.com/" target="_blank">Ackee</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover" href="https://cdn.eglo.pw/api/public/dl/YUYgHlMY?inline=true" target="_blank">Terms of use</a>
          <a className="link link-hover" href="https://cdn.eglo.pw/api/public/dl/HvkvC2mD?inline=true" target="_blank">Privacy policy</a>
          <a className="link link-hover" href="https://cdn.eglo.pw/api/public/dl/tGA1y4Sm?inline=true" target="_blank">Acceptable use</a>
        </div>
      </footer>
    </>
  );
}

export default Component;
