import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box } from '@mui/system'
import { Container, FormControl, FormHelperText, Grid, Input, InputLabel, Paper, styled } from '@mui/material'
import { InsertEmoticon } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import Database from '@/Database'

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const inter = Inter({ subsets: ['latin'] })

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Home() {
  const [records, setRecords] = useState<any[]>([])
  const monthIndex = new Date().getMonth();
  let monthHours = 0
  let monthPlacements = 0
  let monthVideos = 0
  let monthReturns = 0
  let monthStudies = 0


  useEffect(() => {
    new Database().listRecords().then(records => {
      setRecords(records)
    })
  }, [])

  records.map(record => {
    console.log("record", record.month)
    console.log("month", monthIndex)
    if (record.month == monthIndex) {
      console.log("record", record)
      console.log("month", monthIndex)
      monthHours+=record.hours
      monthPlacements+=record.placements
      monthVideos+=record.videos 
      monthReturns+=record.returnVisits 
      monthStudies+=record.studies
    }
  })
 
  console.log(monthStudies)
  
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sm={2} md={4}>
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          {
          monthHours > 0 ?
          <>
            <h3>Month Of {monthNames[monthIndex]}</h3>
            <Grid container spacing={2}>
              <Grid item xs={4}>Hours:</Grid> 
              <Grid item xs={6}>{monthHours}</Grid>
              <Grid item xs={4}>Placements:</Grid> 
              <Grid item xs={6}>{monthPlacements}</Grid>
              <Grid item xs={4}>Videos:</Grid> 
              <Grid item xs={6}>{monthVideos}</Grid>
              <Grid item xs={4}>Returns:</Grid> 
              <Grid item xs={6}>{monthReturns}</Grid>
              <Grid item xs={4}>Studies:</Grid> 
              <Grid item xs={6}>{monthStudies}</Grid>
            </Grid>
          </>

          :
          <h3>No Records Yet</h3>
        }
        </Grid>
        <Grid item sm={2} md={4}>
        </Grid>
      </Grid>
    </Container>
  )
}
