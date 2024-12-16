import React, { useState } from 'react';
import { TextField, Button, Typography, Tabs, Tab, Box } from '@mui/material';

const AuthPage = () => {
    const [activeTab, setActiveTab] = useState(0); // 0 for Sign In, 1 for Sign Up
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (activeTab === 0) {
            console.log('Sign In Data:', formData);
        } else {
            console.log('Sign Up Data:', formData);
        }
        setFormData({ email: '', password: '' });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', maxWidth: '400px', margin: '0 auto' }}>
            <Tabs
                value={activeTab}
                onChange={(e, newValue) => setActiveTab(newValue)}
                variant="fullWidth"
            >
                <Tab label="Sign In" />
                <Tab label="Sign Up" />
            </Tabs>

            <Box mt={2} style={{ width: '100%' }}>
                <Typography variant="h4" component="h1" align="center">
                    {activeTab === 0 ? 'Sign In' : 'Sign Up'}
                </Typography>
                <form style={{ width: '100%', marginTop: '1rem' }} onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                        style={{ marginTop: '1rem' }}
                    >
                        {activeTab === 0 ? 'Sign In' : 'Sign Up'}
                    </Button>
                </form>
            </Box>
        </div>
    );
};

export default AuthPage;
