import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './main.css'

import Landing from "./pages/Landing"

import FourOhFour from "./404"
import FiveHundred from "./500"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Landing />} />

      <Route path="/settings" element={<Landing />} />

      <Route path="*" element={<FourOhFour />} />
      <Route path="/500" element={<FiveHundred />} />
    </Routes>
  </BrowserRouter>
);
