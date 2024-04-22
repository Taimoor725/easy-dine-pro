import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Box } from '@mui/material';

export default function BasicDateTimePicker() {
  return (
    <Box
      className='w-full h-full'
      style={{
        backgroundColor: 'pink',
        color: 'white',
        fontSize: '14px', // Adjust font size
        fontFamily: 'Arial, sans-serif', // Adjust font family
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={['DateTimePicker']}
          style={{
            width: '200px', // Adjust width
            height: '40px', // Adjust height
            backgroundColor: 'black', // Adjust background color
          }}
        >
          <DateTimePicker
            label="Basic date time picker"
            style={{
              color: 'white', // Adjust text color
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
}
