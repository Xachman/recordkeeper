import Database from "@/Database";
import { Box, Button, Container, FormControl, Grid, Input, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { DatePicker, DateTimeField, DateTimePicker, LocalizationProvider, MobileDateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import { ChangeEvent, ReactNode, useState } from "react";

const months = [
  { value: 0, label: 'January' },
  { value: 1, label: 'February' },
  { value: 2, label: 'March' },
  { value: 3, label: 'April' },
  { value: 4, label: 'May' },
  { value: 5, label: 'June' },
  { value: 6, label: 'July' },
  { value: 7, label: 'August' },
  { value: 8, label: 'September' },
  { value: 9, label: 'October' },
  { value: 10, label: 'November' },
  { value: 11, label: 'December' }
];

const AddForm = () => {
  const currentMonthIndex = new Date().getMonth();
  const [month, setMonth] = useState(currentMonthIndex);
  const year = new Date().getFullYear();
  const [daysInMonth, setDaysInMonth] = useState(new Date(year, month+1, 0).getDate());
  console.log(daysInMonth)
  const [day, setDay] = useState(new Date().getDate())
  const [hours, setHours] = useState(0);
  const [placements, setPlacements] = useState(0);
  const [videos, setVideos] = useState(0);
  const [studies, setStudies] = useState(0);
  const [notes, setNotes] = useState("");
  const [returnVisits, setReturnVisits] = useState(0);

  const inputChangeEvent = (setter: (value: any) => void) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value)
    }
  }
  
  const handleMonthChange = (event: SelectChangeEvent) => {
    const monthChange = +event.target.value ?? currentMonthIndex
    setMonth(monthChange)
    setDaysInMonth(new Date(year, monthChange+1, 0).getDate())
    setDay(1)
  }

  const handleDayChange = (event: SelectChangeEvent) => {
    setDay(+event.target.value)
  }

  return (
    <Box 
      sx={
        { 
          display: 'flex', 
          flexDirection: 'column',
          '& .MuiFormControl-root': {
            mt: "1em",
            mb: "1em"
          }
        }}
      >
      <FormControl>
        <InputLabel htmlFor="Month">Month</InputLabel>
        <Select
          labelId="month"
          id="month"
          value={String(month)}
          label="Month"
          onChange={handleMonthChange}
        >
          {months.map(month => (
            <MenuItem key={month.value} value={month.value}>
              {month.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="day">Day</InputLabel>
        <Select
          labelId="day"
          id="day"
          value={String(day)}
          label="Day"
          onChange={handleDayChange}
        >
          {[...Array(daysInMonth)].map((e, i) => {
            const day = i+1
            return (
            <MenuItem key={day} value={day}>
              {day}
            </MenuItem>
          )})}
        </Select>
      </FormControl>
      
      <FormControl>
        <InputLabel htmlFor="hours">Hours</InputLabel>
        <Input 
        type="number"
        onChange={inputChangeEvent(setHours)}
        id="hours" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="placements">Placements</InputLabel>
        <Input 
        type="number"
        onChange={inputChangeEvent(setPlacements)}
        id="placements" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="videos">Videos</InputLabel>
        <Input 
        type="number"
        onChange={inputChangeEvent(setVideos)}
        id="videos" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="studies">Studies</InputLabel>
        <Input 
        type="number"
        onChange={inputChangeEvent(setStudies)}
        id="studies" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="return-visits">Return Visits</InputLabel>
        <Input 
        type="number"
        onChange={inputChangeEvent(setReturnVisits)}
        id="retun-visits" />
      </FormControl>
      <FormControl>
        <InputLabel
         htmlFor="notes">Notes</InputLabel>
        <Input 
          multiline
          rows={4}
          type="number"
          onChange={inputChangeEvent(setNotes)}
          id="notes" />
      </FormControl>
      <Button
        variant="contained"
        onClick={() => {
          const db = new Database()
          console.log("pacements", placements)
          console.log("videos", videos)
          db.addRecord(
            hours,
            year,
            month,
            day,
            placements,
            videos,
            studies, 
            notes
          )
          window.location.href = "/"
        }}
      >Submit</Button>
    </Box>
  )
}

export default function AddRecord() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={4}>
        </Grid>
        <Grid item xs={12} md={4}>
          <h1>Add Record</h1>
          <AddForm/>
        </Grid>
        <Grid item md={4}>
        </Grid>
      </Grid>
    </Container>
  )
}
