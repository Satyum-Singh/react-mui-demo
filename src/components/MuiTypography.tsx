import {Typography} from '@mui/material'

const MuiTypography = () => {
  return (
    <div>
        {/* Heading */}
      <Typography variant='h1'>h1 heading</Typography>
      <Typography variant='h2'>h2 heading</Typography>
      <Typography variant='h3'>h3 heading</Typography>
      <Typography variant='h4'>h4 heading</Typography>
      <Typography variant='h5'>h5 heading</Typography>
      <Typography variant='h6'>h6 heading</Typography>

        {/* Subtitle */}
      <Typography variant='subtitle1'>Subtitle 1</Typography>
      <Typography variant='subtitle2'>Subtitle 2</Typography>

        {/* Body */}
        <Typography variant='body1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nam quidem velit inventore molestias harum quibusdam asperiores odio nemo, natus cumque hic, accusamus sapiente praesentium ex nihil qui minus esse?
        </Typography>
        <Typography variant='body2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam suscipit dicta veniam minima quaerat expedita rem deleniti, aperiam pariatur officiis eos rerum accusantium soluta eveniet debitis ex minus repellendus dolore.
        </Typography>
    </div>
  )
}

export default MuiTypography
