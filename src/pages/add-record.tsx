import { Box, Container, FormControl, Grid, Input, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { DatePicker, DateTimeField, DateTimePicker, LocalizationProvider, MobileDateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import { ReactNode, useState } from "react";

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
  const [month, setMonth] = useState(0);
  
  const handleMonthChange = (event: SelectChangeEvent) => {
    setMonth(+event.target.value ?? currentMonthIndex)
  }

  return (
    <Box 
      sx={{ display: 'flex', flexDirection: 'column' }}
      >
      <FormControl>
        <InputLabel htmlFor="hours">Hours</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={month}
          label="Age"
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
        <InputLabel htmlFor="hours">Hours</InputLabel>
        <Input id="hours" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="placements">Placements</InputLabel>
        <Input id="placements" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="videos">Videos</InputLabel>
        <Input id="videos" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="studies">Studies</InputLabel>
        <Input id="studies" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="return-visits">Return Visits</InputLabel>
        <Input id="retun-visits" />
      </FormControl>
      <FormControl>
        <InputLabel
         htmlFor="notes">Notes</InputLabel>
        <Input 
          multiline
          rows={4}
          id="notes" />
      </FormControl>
    </Box>
  )
}

export default function Home() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={4}>
        </Grid>
        <Grid item xs={12} md={4}>
          <h1>Add Records</h1>
          <AddForm/>
        </Grid>
        <Grid item md={4}>
        </Grid>
      </Grid>
    </Container>
  )
}
