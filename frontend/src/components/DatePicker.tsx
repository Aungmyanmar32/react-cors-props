import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const fetchData = async (date: Dayjs | null) => {
  const choosenDate = date?.format("DD-MM-YYYY");
  const url = `http://localhost:5000/available?date=${choosenDate}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

interface Props {
  updateState: () => void;
}
export default function DatePicker({ updateState }: Props) {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    fetchData(newValue);
    let pickedDate: any = newValue?.format("DD-MM-YYYY");
    localStorage.setItem("date", pickedDate);
    updateState();
  };

  return (
    <div className="container">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <h2>Choose available Date</h2>
          <DesktopDatePicker
            label="Choose Date"
            inputFormat="DD/MM/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  );
}
