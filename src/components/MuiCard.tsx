import {Box,Card,CardContent,Typography,CardActions,Button,CardMedia} from '@mui/material'
export const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia component='img' height='140' image='https://source.unsplash.com/random' alt='Unsplash Image'>
            
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React is a javascript library fpr building user interfaces. React
            can be used as a base in the development of single-page or mobile
            application.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
