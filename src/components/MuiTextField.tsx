import { Stack,TextField,InputAdornment } from '@mui/material'
import { useState } from 'react'

export const MuiTextField = () => {

    const[value, setValue] =useState('')
    

  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={2}>
        <TextField label='Name' color='secondary' variant='outlined'></TextField>
        <TextField label='Name' color='success' variant='filled'></TextField>
        <TextField label='Name' color='info' variant='standard'></TextField>
      </Stack>

      <Stack direction='row' spacing={2}>
        <TextField label='Small Text Field' size='small' variant='outlined'></TextField>
        <TextField label='Medium Text Field' size='medium' variant='filled'></TextField>
      </Stack>


      
      <Stack direction='row' spacing={2}>
        <TextField label='Form Input' required value={value} onChange={(e)=>setValue(e.target.value)}
        error={!value}
        helperText={!value ? 'Required' : 'Do not share it someone'}
        ></TextField>
        <TextField label='Password' type='password' helperText='Do not share it.'></TextField>
        <TextField label='Aadhar Number' type='password' value="1234" disabled helperText='You cannot change it.'></TextField>
        <TextField label='Read Only' InputProps={{readOnly :true}}></TextField>
      </Stack>

      <Stack direction='row' spacing={2}>
        <TextField label='Amount' InputProps={{
          startAdornment: <InputAdornment position='start'>$</InputAdornment>
        }} ></TextField>
        <TextField label='Weight' InputProps={{
          endAdornment: <InputAdornment position='end'>Kg</InputAdornment>
        }} ></TextField>
      </Stack>
    </Stack>
  )
}
