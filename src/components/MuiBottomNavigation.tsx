import { BottomNavigation,BottomNavigationAction } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import {useState} from 'react'


export const MuiBottomNavigation = () => {
    const [value,setValue] = useState(0)
  return (
    <BottomNavigation sx={{ Width: "100%", position: "absolute", bottom: 0 }} value={value} onChange={(event,newValue) => {setValue(newValue)}}
        showLabels
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Person" icon={<PersonIcon />} />
    </BottomNavigation>
  );
}