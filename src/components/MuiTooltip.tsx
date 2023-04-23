import {Tooltip,IconButton} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export const MuiTooltip = () => {
  return (
    <Tooltip title="delete" placement='bottom' arrow enterDelay={500} leaveDelay={200}>
      <IconButton>
        <DeleteIcon></DeleteIcon>
      </IconButton>
    </Tooltip>
  );
}