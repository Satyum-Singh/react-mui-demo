import {Dialog,DialogActions,Button,DialogContent,DialogTitle,DialogContentText} from '@mui/material'
import {useState} from 'react'

export const MuiDialog = () => {
    const [open, setopen] = useState(false)
  return (
    <>
      <Button onClick={()=> setopen(true)}>Open Dialog</Button>
      <Dialog open={open} onClose={()=> setopen(false)} aria-labelledby='dialog-title'>
        <DialogTitle id='dialog-title'>Submit the test?</DialogTitle>
        <DialogContent>
            <DialogContentText id='dialog-description'>Are you sure you want to submit the test? You will not be able to edit after submitting.</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button autoFocus onClick={()=>setopen(false)}>Submit</Button>
            <Button onClick={()=>setopen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}