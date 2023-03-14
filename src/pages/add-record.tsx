import { Box, Container, FormControl, Grid, Input, InputLabel } from "@mui/material";
import { DatePicker, DateTimeField, DateTimePicker, LocalizationProvider, MobileDateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";


const AddForm = () => {
  

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
      </LocalizationProvider>
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
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={4}>
          <h1>Add Record</h1>
          <AddForm/>
        </Grid>
        <Grid item xs={4}>
        </Grid>
      </Grid>
    </Container>
  )
}
