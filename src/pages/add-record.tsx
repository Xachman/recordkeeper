import { Container, FormControl, Grid, Input, InputLabel } from "@mui/material";

const AddForm = () => {
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="hours">Hours</InputLabel>
        <Input id="hours" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="hours">Hours</InputLabel>
        <Input id="hours" />
      </FormControl>
    </>
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
