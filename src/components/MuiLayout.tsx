import {Box,Stack,Divider} from '@mui/material'


export const MuiLayout = () => {
  return (
    <Stack
        sx={{
            border:'1px solid black',
            borderRadius:'15px'
        }}
        direction='column'
        spacing={2}
        divider={<Divider orientation='vertical' flexItem></Divider>}
    >
    <Box sx={{
        backgroundColor:"primary.main",
        color:"black",
        p:"16px",
        width:"100px",
        height:"100px",
        '&:hover':{
            backgroundColor:"grey",
            color:"white"
        },
    }}>
        Box 1
    </Box>
    <Box
        display='flex'
        height='100px'
        width='100px'
        bgcolor='success.light'
        p={2}
    >
        Box 2
    </Box>
    </Stack>
  )
}


