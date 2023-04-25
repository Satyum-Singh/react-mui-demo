import {Stack,CircularProgress,LinearProgress} from '@mui/material'

export const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color="success" />
      <CircularProgress variant="determinate" value={60} />

      <LinearProgress></LinearProgress>
      <LinearProgress color='success'></LinearProgress>
      <LinearProgress variant="determinate" value={70}></LinearProgress>
    </Stack>
  );
}