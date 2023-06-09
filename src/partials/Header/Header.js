import {useState} from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';


import {useHistory} from 'react-router-dom';

import useStyles from './Header.style';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const Header = () => {
    const classes = useStyles()
    const history = useHistory()
    

    const [menuOpen, setMenuOpen] = useState(false)
    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handleMenuClick = route => {
       history.push(route)
        handleToggleMenu()
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => handleToggleMenu()}
                    sx={{ mr: 2 }}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" className={classes.title}>
                        My App
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
                <List>
                    <ListItem button onClick={() => handleMenuClick('/')} >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>

                        <ListItemText>Home</ListItemText>
                    </ListItem>

                    <ListItem button onClick={() => handleMenuClick('/customers')}>
                        <ListItemIcon>
                            <PersonAddIcon/>
                        </ListItemIcon>

                        <ListItemText>Cadastro de Clientes</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}

export default Header