const mongoose = require('mongoose');

function connectToDB() {
    mongoose.connect(process.env.DB_CONNECT)
        .then(() => console.log('Connected to DB'))
        .catch(err => {
            console.error('Error connecting to the database:', err.message);
            process.exit(1); // Exit the process with failure
        });
}

module.exports = connectToDB;
