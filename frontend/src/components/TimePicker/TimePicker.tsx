import { useEffect, useState } from "react";
import DatePicker from "../DatePicker";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import "./Timepicker.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MakeBooking from "../MakeBooking/MakeBooking";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

interface Slot {
  time: string;
  total: number;
  booked: number;
  availableSlot: number;
}

interface Props {
  updateState: () => void;
}
export default function TimePicker({ updateState }: Props) {
  const date = localStorage.getItem("date");
  console.log(date);

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:5000/available?date=${date}`
      );
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
  }, [date]);

  const handleClick = (time: string) => {
    localStorage.setItem("time", time);

    updateState();
  };

  return (
    <div className="container">
      <Box>
        <div className="conTable">
          <h1>{date}</h1>
          <TableContainer component={Paper}>
            <Table
              sx={{
                width: "90%",
                margin: "2px auto",
              }}
              aria-label="basic table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="center">Time</TableCell>
                  <TableCell align="center">Total</TableCell>
                  <TableCell align="center">Booked</TableCell>
                  <TableCell align="center">Available</TableCell>

                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
          {data &&
            data.map((slot: Slot) => {
              if (slot.availableSlot === 0) {
                return (
                  //
                  <TableContainer component={Paper} key={slot.time}>
                    <Table
                      sx={{
                        width: "90%",
                        margin: "2px auto",
                      }}
                      aria-label="basic table"
                    >
                      <TableBody>
                        <TableRow key={slot.time}>
                          <TableCell align="left">{slot.time}</TableCell>
                          <TableCell align="left">{slot.total}</TableCell>
                          <TableCell align="left">{slot.booked}</TableCell>
                          <TableCell align="right">
                            {slot.availableSlot}
                          </TableCell>
                          <TableCell align="right">
                            <button disabled>choose</button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                );
              }

              return (
                //
                <TableContainer component={Paper} key={slot.time}>
                  <Table
                    sx={{
                      width: "90%",
                      margin: "2px auto",
                    }}
                    aria-label="basic table"
                  >
                    <TableBody>
                      <TableRow key={slot.time}>
                        <TableCell align="left">{slot.time}</TableCell>
                        <TableCell align="left">{slot.total}</TableCell>
                        <TableCell align="left">{slot.booked}</TableCell>
                        <TableCell align="right">
                          {slot.availableSlot}
                        </TableCell>
                        <TableCell align="right">
                          <button
                            onClick={() => {
                              handleClick(slot.time);

                              updateState();
                            }}
                          >
                            choose
                          </button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              );
            })}
        </div>
      </Box>
    </div>
  );
}
