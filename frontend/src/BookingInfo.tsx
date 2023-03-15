import { Box, Typography, Card, Button } from "@mui/material";
import * as React from "react";
import QRCode from "react-qr-code";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import DateRangeIcon from "@mui/icons-material/DateRange";
interface Slot {
  bookID: string;
  name: string;
  phNumer: string;
  nrcID: string;
  email: string;
  choosenDate: string;
  choosenTime: string;
}

interface Props {
  updateState: () => void;
}

interface Data {
  bookID: string;
  choosenDate: string;
  choosenTime: string;
  email: string;
  name: string;
  nrcID: string;
  phNumer: string;
}

export default function BookingInfo({ updateState }: Props) {
  let bookingID: any = localStorage.getItem("ID");

  const [data, setData] = React.useState<Data>();
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:5000/bookingInfo?date=${bookingID}`
      );
      const newData = await response.json();

      setData(newData);
      console.log(bookingID);
    };

    fetchData();
  }, []);
  //WhQD2qC8Tx
  console.log(data);
  return (
    <div className="container">
      <div>
        <h4>You are Booked an Appointment , successfully!</h4>
        <Card sx={{ width: "50vw", m: "5px auto" }}>
          <QRCode
            value={bookingID}
            bgColor="LightCyan"
            fgColor="black"
            size={150}
          />
          <h1>{data?.bookID}</h1>
          <div>
            <Card
              sx={{
                width: "50vw",
                m: "5px auto",
                backgroundColor: "lightgreen",
                textAlign: "left",
              }}
            >
              <h2></h2>
              <h3>Name : {data?.name}</h3>
              <h3>NRC : {data?.nrcID}</h3>
            </Card>
            <Card
              sx={{
                width: "50vw",
                m: "5px auto",
                backgroundColor: "lightblue",
                textAlign: "left",
                padding: "0px 2px",
                fontSize: "2rem",
              }}
            >
              <div>
                <AccessTimeOutlinedIcon />
                <span>{data?.choosenTime}</span>
              </div>
              <div>
                <DateRangeIcon />
                {data?.choosenDate}
              </div>
            </Card>
          </div>
        </Card>
        <Button variant="contained" onClick={window.print}>
          Download
        </Button>
      </div>
    </div>
  );
}
