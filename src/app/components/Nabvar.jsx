'use client'

import { useState } from 'react'
import PaymentsIcon from '@mui/icons-material/Payments'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import { AccountCircle } from '@mui/icons-material'
import Link from 'next/link'
import { 
    Box, 
    Divider, 
    Drawer, 
    List, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText, 
    Typography, 
    Toolbar, 
    AppBar, 
    Menu,
    MenuItem
} from '@mui/material'

export const Nabvar = () => {

    const [anchorEl, setAnchorEl] = useState(null)

    const handleMenu = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const [openDrawer, setOpenDrawer] = useState(false)

    const handleOpen = () => {
        setOpenDrawer(true)
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}} variant="dense">

                    <IconButton onClick={ handleOpen } edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>

            
                    <Box>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Cerrar sesión</MenuItem>

                        </Menu>
                    </Box>

                </Toolbar>
            </AppBar>

            <Drawer
                anchor="left"
                open={ openDrawer }
                onClose={ () => setOpenDrawer(false) }
            >
                <Box 
                    sx={{
                        width: '250px', 
                        height: '100%', 
                        backgroundColor: '#EFF1F1'
                    }}
                >
                    <Box sx={{ padding: '5px 10px' }}>
                        <Typography variant='h4'>ICONO</Typography>
                    </Box>

                    <Divider />
                    
                    <List>
                        <ListItemButton component={Link} to="/bancos">
                            <ListItemIcon>
                                <AccountBalanceIcon />
                            </ListItemIcon>
                            <ListItemText primary='Bancos' />
                        </ListItemButton>
                    </List>

                    <List>
                        <ListItemButton component={Link} to="/cuentas">
                            <ListItemIcon>
                                <PaymentsIcon />
                            </ListItemIcon>
                            <ListItemText primary='Cuentas' />
                        </ListItemButton>
                    </List>

                    <List>
                        <ListItemButton component={Link} to="/transacciones">
                            <ListItemIcon>
                                <CurrencyExchangeIcon />
                            </ListItemIcon>
                            <ListItemText primary='Transacciones' />
                        </ListItemButton>
                    </List>
                </Box>
            </Drawer>
        </>
    )
}
