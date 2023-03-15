import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import Appointment from "./pages/Appointment";
import CheckBooking from "./pages/CheckBooking";
import Layout from "./pages/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="check" element={<CheckBooking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
