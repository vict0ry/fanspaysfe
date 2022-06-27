import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom'

export default function StickyFooter() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <CssBaseline/>
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? '#ECE9F1'
                            : theme.palette.grey[800],
                }}
            >
                <Container style={{display: 'block', justifyContent: 'center'}} maxWidth="xl">
                  <Link style={{marginRight: '20px'}} to={'/'}>
                    <img src="/logo.svg" alt="" width={'150px'} />
                  </Link>
                   <Link style={{marginRight: '20px'}} to={'/'}>About us</Link>
                    <Link style={{marginRight: '20px'}} to={'/'}>Bloggers</Link>
                    <Link style={{marginRight: '20px'}} to={'/'}>Porducts</Link>
                </Container>
            </Box>
        </Box>
    );
}
