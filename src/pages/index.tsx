import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box } from '@mui/system'
import { Container, FormControl, FormHelperText, Grid, Input, InputLabel, Paper, styled } from '@mui/material'
import { InsertEmoticon } from '@mui/icons-material'

const inter = Inter({ subsets: ['latin'] })

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AddForm = () => {
  return (
    <>
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
