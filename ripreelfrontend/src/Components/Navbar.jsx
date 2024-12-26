import React, { useState } from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

function Navbar() {

    const [displayMode, setDisplayMode] = useState('Light Mode')

    const handleDisplayToggle = () => {
        setDisplayMode((prevDisplayMode) => (prevDisplayMode == 'Light Mode' ? 'Dark Mode' : 'Light Mode'))
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }} gap={16}>
                <Button sx={{ color: 'black' }}>Home</Button>
                <Button sx={{ color: 'black' }}>FAQ</Button>
                <Button sx={{ color: 'black' }} onClick={handleDisplayToggle}>{displayMode}</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar
