import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import axios from "axios";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

function App() {
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [planName, setPlanName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [wallet, setWallet] = useState("");

  const [error, setError] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  let plan_name = searchParams.get("plan");

  async function exchange(symbol) {
    await axios
      .get(
        "https://api.coinconvert.net/convert/usd/" + symbol + "?amount=" + price
      )
      .then((response) => {
        if (response.data) {
          setSymbol(symbol);
          if (symbol === "BTC") {
            setAmount(response.data.BTC);
            setWallet("bc1q0cf4027cm9wgppcsfxt9ep7qvd3w6ulgzafrjj");
          }

          if (symbol === "ETH") {
            setAmount(response.data.ETH);
            setWallet("0x9e6DCE6439C0E93a7d6162966D1d0769ed929013");
          }

          if (symbol === "XMR") {
            setAmount(response.data.XMR);
            setWallet(
              "459bBaBAvKuhLs4bpNomV98i8At2B171DAvdETR9s9U71sz18wXtaQM3kzhjaTi1f8PafqXyBgG3ZNQAL5pE41M2CksNmib"
            );
          }

          if (symbol === "DOGE") {
            setAmount(response.data.DOGE);
            setWallet("D8cBfE97wnWPmjsUJQn4s9843mrQwxej5K");
          }
        } else {
          window.location.href = "/500";
        }
      });
  }

  async function getPlanPrice() {
    if (plan_name === "personal") {
      setPrice("7");
      setPlanName("Personal plan");
    } else {
      setPrice("69420");
      setPlanName("Lol");
    }
  }

  useEffect(() => {
    if (plan_name) {
      getPlanPrice();
    }
  }, [plan_name]);

  return (
    <>
      <Navbar />

      <div className="mt-44" />

      <div className="flex flex-wrap justify-center">
        <div className="card w-96 bg-base-200 m-5">
          <div className="card-body">
            <h2 className="card-title">{planName}</h2>

            <i>${price} in cryptocurrency (one-month)</i>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text mb-2">Crypto symbols: </span>
              </label>

              <button
                className="btn btn-outline capitalize mb-5"
                onClick={() => exchange("BTC")}
              >
                Bitcoin
              </button>

              <button
                className="btn btn-outline capitalize mb-5"
                onClick={() => exchange("ETH")}
              >
                Ethereum
              </button>

              <button
                className="btn btn-outline capitalize mb-5"
                onClick={() => exchange("XMR")}
              >
                Monero
              </button>

              <button
                className="btn btn-outline capitalize"
                onClick={() => exchange("DOGE")}
              >
                Dogecoin
              </button>
            </div>

            <a
              href="https://cdn.eglo.pw/api/public/dl/Uol8Igpn?inline=true"
              target="_blank"
              className="underline underline-offset-8 text-center mt-8"
            >
              How to pay
            </a>

            {wallet && (
              <>
                <div className="mt-10 text-center">
                  <p className="font-bold">
                    {symbol}: {amount}
                  </p>

                  <p className="font-bold break-all mt-3">
                    Address: {wallet}
                  </p>
                </div>
              </>
            )}

            <div className="card-actions justify-end mt-20 text-center">
              <p>
                <a href="/contact" className="underline underline-offset-8">
                  Contact us
                </a>{" "}
                to use a different cryptocurrency.
              </p>
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
