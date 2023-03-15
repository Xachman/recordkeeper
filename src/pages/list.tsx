import Database from "@/Database";
import styled from "@emotion/styled";
import { Delete } from "@mui/icons-material";
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const RecordList = () => {
  const [records, setRecords] = useState<any[]>([])
  const [update, setUpdate] = useState(0)

  useEffect(() => {
    new Database().listRecords().then(records => {
      setRecords(records)
    })
  }, [update])


  const deleteRecord = (key: number) => {
    return () => {
      console.log(key)
      new Database().deleteRecord(key)
      setUpdate(update+1)
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Hours</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((record, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {(record.month+1)+"/"+record.day+"/"+record.year}
              </TableCell>
              <TableCell align="right">{record.hours}</TableCell>
              <TableCell align="right">
                <Button
                  onClick={deleteRecord(record.key)}><Delete /></Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )

}

export default function List() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={4}>
        </Grid>
        <Grid item xs={12} md={4}>
          <h1>List</h1>
          <RecordList/>
        </Grid>
        <Grid item md={4}>
        </Grid>
      </Grid>
    </Container>
  )
}