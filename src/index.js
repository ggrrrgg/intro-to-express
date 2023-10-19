const {app, HOST, PORT} = require('./servers');
const express = require('express');

// Activate the server below the line

app.listen(PORT, HOST, () => {
    console.log(`Server running on port ${PORT}`);
});




