import {Stack,TextField, TextFieldProps} from '@mui/material'
import {DatePicker,TimePicker,DateTimePicker} from '@mui/lab'
import { SetStateAction, useState } from 'react'

export const MuiPicker = () => {
    const [selectedDate, setselectedDate] = useState<Date | null>(null)
    const [selectedTime, setselectedTime] = useState<Date | null>(null)
  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        renderInput={(params:any) => (
          <TextField {...params} />
        )}
        value={selectedDate}
        onChange={(newValue:any) => {
          setselectedDate(newValue);
        }}
      />
      <TimePicker
        label="Time Picker"
        renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
          <TextField {...params} />
        )}
        value={selectedTime}
        onChange={(newValue: SetStateAction<Date | null>) => {
          setselectedTime(newValue);
        }}
      />
    </Stack>
  );
}