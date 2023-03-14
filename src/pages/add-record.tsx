import { Box, Container, FormControl, Grid, Input, InputLabel } from "@mui/material";

const AddForm = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
        <InputLabel htmlFor="notes">Notes</InputLabel>
        <Input id="notes" />
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
