import {Box,Stack,Divider,Grid,Paper} from '@mui/material'


export const MuiLayout = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
      <Stack
        sx={{
          
          // borderRadius:'15px'
        }}
        direction="column"
        spacing={4}
        divider={<Divider orientation="vertical" flexItem></Divider>}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "black",
            p: "16px",
            width: "100px",
            height: "100px",
            "&:hover": {
              backgroundColor: "grey",
              color: "white",
            },
          }}
        >
          Box 1
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        >
          Box 2
        </Box>
        <Grid rowSpacing={1} columnSpacing={1} container>
          <Grid item xs={6}>
            <Box p={2} bgcolor="primary.light">
              Item 1
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box p={2} bgcolor="primary.light">
              Item 2
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box p={2} bgcolor="primary.light">
              Item 3
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box p={2} bgcolor="primary.light">
              Item 4
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  );
}


