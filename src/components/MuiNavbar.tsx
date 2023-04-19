import {AppBar , Toolbar ,Stack ,IconButton,Button,Typography,Menu,MenuItem} from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {useState} from 'react';

export const MuiNavbar = () => {
    const [anchorEl,setanchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event : React.MouseEvent<HTMLButtonElement>) => {
        setanchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setanchorEl(null)
    }
  return (
    <Stack>
      <AppBar position="static" color="primary" sx={{ borderRadius: 5 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemonIcon></CatchingPokemonIcon>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PokemonGO
          </Typography>
          <Stack direction="row">
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">About Us</Button>
            <Button color="inherit">Inventory</Button>
            <Button color="inherit">Sales</Button>
            <Button
              color="inherit"
              id="resources-button"
              onClick={handleClick}
              aria-controls={open ? "resources-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Resources
            </Button>
          </Stack>
          <Menu
            id="resources-menu"
            anchorEl={anchorEl}
            open={open}
            MenuListProps={{
              "aria-labelledby": "resources-button",
            }}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose}>Blog</MenuItem>
            <MenuItem onClick={handleClose}>Podcast</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Stack>
  );
}

