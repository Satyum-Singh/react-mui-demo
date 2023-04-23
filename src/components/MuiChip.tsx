import {Stack,Chip,Avatar} from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'

export const MuiChip = () => {

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip" color="primary" size="small" icon={<FaceIcon />} />
      <Chip
        label="Chip-outlined"
        color="secondary"
        size='small'
        variant='outlined'
        avatar={<Avatar>V</Avatar>}
      />
      <Chip
        label="Chip-outlined"
        color="success"
        size="small"
        onClick={() => alert("Clicked")}
      />
      <Chip
        label="Delete"
        color="error"
        size="small"
        onClick={() => alert("Clicked")}
        onDelete={()=>alert('Delete Handler Called')}
      />
    </Stack>
  );
}