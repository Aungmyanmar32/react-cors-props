import React from "react";
import logo from "./logo.svg";
import "../App.css";
import DatePicker from "../components/DatePicker";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import BookingInfo from "../BookingInfo";
import MakeBooking from "../components/MakeBooking/MakeBooking";
import TimePicker from "../components/TimePicker/TimePicker";

function Appointment() {
  const [update, setUpdate] = React.useState<boolean>(false);
  const [page, setPage] = React.useState<number>(1);
  const updateState = () => {
    setUpdate(!update);
    const newPage = page + 1;
    setPage(newPage);
  };

  // const updatePage = () => {
  //   const newPage = page + 1;
  //   setPage(newPage);
  // };

  return (
    <div className="container App">
      {page === 1 && <DatePicker updateState={updateState} />}
      {page === 2 && <TimePicker updateState={updateState} />}
      {page === 3 && <MakeBooking updateState={updateState} />}
      {page === 4 && <BookingInfo updateState={updateState} />}
    </div>
  );
}

export default Appointment;
