import {Box,TextField} from '@mui/material'
import {DateRangePicker,DateRange} from '@mui/lab'
import {useState} from 'react'
import { TextFieldProps } from '@mui/material/TextField';
export const MuiDateRangePicker = () => {
    const [value, setvalue] = useState<DateRange<Date>>([null, null]);
  return (
    <Box width="50px">
      <DateRangePicker
        startText="Check-In"
        endText="Check-out"
        value={value}
        onChange={(newValue: any) => {
          setvalue(newValue);
        }}
        renderInput={(startProps:TextFieldProps,endProps:TextFieldProps) => (
            <>
                <TextField {...startProps} />
                <Box sx={{mx:2}}>to</Box>
                <TextField {...endProps} />
            </>
        )}
      />
    </Box>
  );
}