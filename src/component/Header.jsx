import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from './Logo.jsx';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Home', 'Free listing', 'Service', 'Contact US', 'LogIn/Register'];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    const location = useLocation()
    return (
        <div className='mb-20'>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar component="nav" style={{ backgroundColor: 'white', color: 'black' }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Logo></Logo>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Link to={`/${item}`} key={item}>
                                    <Button sx={{ color: '#000000' }} >
                                        {location.pathname.split("/")[1] == item ?
                                            (
                                                <span className='font-bold flex flex-col justify-center items-center'>
                                                    {item}
                                                    <div className='w-3 h-3 bg-third rounded-full'></div>
                                                </span>
                                            ) : (
                                                <span>
                                                    {item}
                                                </span>
                                            )}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
                <nav className='flex justify-center'>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}

                    >
                        {drawer}
                    </Drawer>
                </nav>
            </Box>
        </div>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;
