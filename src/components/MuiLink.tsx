import {Stack,Link} from '@mui/material'

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#">Link</Link>
      <Link href="#" color='secondary' underline='none'>Link</Link>
    </Stack>
  );
}