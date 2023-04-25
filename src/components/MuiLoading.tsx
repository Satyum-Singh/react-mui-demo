import {Stack,} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import SaveIcon from '@mui/icons-material/Save'

export const MuiLoading = () => {
  return (
    <Stack spacing={2} direction="row">
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton variant="outlined" loadingIndicator="Loading...">
        Fetch Data
      </LoadingButton>
      <LoadingButton variant="outlined" loading loadingIndicator="Loading...">
        Fetch Data
      </LoadingButton>
      <LoadingButton variant="outlined" loadingPosition='start' startIcon={<SaveIcon></SaveIcon>} >
        Save
      </LoadingButton>
    </Stack>
  );
}