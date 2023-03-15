const express = require("express");
const cors = require("cors");
const availableSlot = require("./data");

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
const bookingInfo = [];

//for me
// app.get("/available", (req, res) => {
//   const choosenDate = req.query.date;
//   const choosenSlot = availableSlot.find((slot) => slot.date === choosenDate);

//   res.send(choosenSlot ? choosenSlot.slot : []);
// });

// for class
app.get("/available", (req, res) => {
  const choosenMonth = req.query.month;
  const availablityForChoosenDate = availableSlot.filter(
    (slot) => slot.month === choosenMonth
  );

  res.send(availablityForChoosenDate ? availablityForChoosenDate : []);
});

app.post("/bookingInfo", (req, res) => {
  const newBooking = req.body;
  bookingInfo.push(newBooking);
  console.log(newBooking);
  res.send({ message: "new appoiment added" });
});

app.get("/bookingInfo", (req, res) => {
  const choosenID = req.query.date;
  console.log(choosenID);
  const choosenSlot = bookingInfo.find((slot) => slot.bookID === choosenID);

  res.send(choosenSlot ? choosenSlot : {});
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
