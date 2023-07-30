import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './main.css'

import Landing from "./pages/Landing"
import Contact from "./pages/Contact"
import Pricing from "./pages/Pricing"
import Purchase from "./pages/Purchase"

import FourOhFour from "./404"
import FiveHundred from "./500"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Landing />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/pricing" element={<Pricing />} />

      <Route path="/purchase" element={<Purchase />} />

      <Route path="*" element={<FourOhFour />} />
      <Route path="/500" element={<FiveHundred />} />
    </Routes>
  </BrowserRouter>
);
