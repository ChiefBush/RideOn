const express = require('express');
const router = express.Router();
const User = require('../models/User');

// ...existing code...

router.post('/register', async (req, res) => {
    console.log('Request Body:', req.body); // Log the request body

    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // ...existing code to handle registration...
        res.status(201).json({ user: newUser });
    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(400).json({ errors: [{ message: error.message }] });
    }
});

module.exports = router;
