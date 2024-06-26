import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Grid } from '@mui/material';

export default function ResponsiveDatePickers() {
  return (
    <Grid >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={[
            'DatePicker',
            'MobileDatePicker',
            'DesktopDatePicker',
            'StaticDatePicker',
          ]}
        >
          <DemoItem>
            <StaticDatePicker defaultValue={dayjs('2022-04-17')} />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </Grid>
  );
}
