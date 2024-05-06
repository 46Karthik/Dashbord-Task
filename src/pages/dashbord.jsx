import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ApplicationsInfoChart from './Dashbord_modules/CandleDiagram'
import InfoCard from './Dashbord_modules/infocard';
import InterviewCard from './Dashbord_modules/interviewcard';
import Jobgird from './Dashbord_modules/jobgird';
import Tablegird from './Dashbord_modules/tableGird';
import MyDatePicker from './Dashbord_modules/DatePicker';
import EventList from './Dashbord_modules/EventMainGrid';
import UserMain from './Dashbord_modules/userMain';
import UserMain2 from './Dashbord_modules/userMain copy';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function dashboard() { 
  return (
    <Box sx={{ width: '1100PX' }} >
      <Grid container spacing={2}>
      <Grid item xs={12} sx={{ display: "inline-block" }}>
        
      <h3 className='text-xl  text-left text-black  font-bold'>HR Employee</h3>
      <p style={{  fontSize: '8px' }}>Enjoy Your Selecting Potential Candidates Tracking And Management System.</p>
      </Grid>
        <Grid item xs={6} sx={{ display: "inline-block" }}>
          <Item>
            <ApplicationsInfoChart /></Item>
        </Grid>
        <Grid item xs={6} >
          <Item>
            <InfoCard />
          </Item>
        </Grid>

      </Grid>
      {/* 2 container */}
      <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid container xs={8} spacing={2} sx={{ marginTop: "3px" }}>
          <Grid item xs={12}>
            <Item><InterviewCard /></Item>
            <Item sx={{ marginTop: "3px" }}><Jobgird /></Item>
            <Item sx={{ marginTop: "3px" }}><Tablegird /></Item>
          </Grid>
        </Grid>
        <Grid container xs={4} spacing={2}  >
          <Grid item xs={12}  >
            <Item sx={{ marginTop: "15px" }}><MyDatePicker /></Item>
            <Item sx={{ marginTop: "15px" }}><EventList /></Item>
            <Item sx={{ marginTop: "15px" }}><UserMain /></Item>
            <Item sx={{ marginTop: "15px" }}><UserMain2 /></Item>
          </Grid>
        </Grid>
      </Grid>

    </Box>
  );
}