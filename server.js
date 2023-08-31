const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<user>:<password>@coursedata.6v5cpou.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Failed to connect to MongoDB', err);
});

// const fs = require('fs');
// const csvParser = require('csv-parser');
// const mongoose = require('mongoose');
// const express = require('express');
// const cors = require('cors');
// const Class = require('./models/Class');
//
// //require('dotenv').config();
//
// const app = express();
// app.use(cors());
// app.use(express.json());
//
// // Connect to MongoDB
// mongoose.connect('mongodb+srv://hzt7wt:Raffi1234@coursedata.6v5cpou.mongodb.net/?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });
//
// const db = mongoose.connection;
//
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log("Connected to the database!");
// });
//
// mongoose.connection.on('connected', () => {
//     console.log('Connected to MongoDB');
// });
//
// mongoose.connection.on('error', (err) => {
//     console.error('Failed to connect to MongoDB', err);
// });
//
// db.once('open', function() {
//     console.log("Connected to the database!");
//
//     fs.createReadStream('/Users/eliherman/Desktop/classData.csv')
//         .pipe(csvParser())
//         .on('data', (row) => {
//             const newClass = new Class(row);
//             newClass.save();
//         })
//         .on('end', () => {
//             console.log('CSV file successfully processed');
//         });
// });
//
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });
//
// //const Class = require('./models/Class');
//
// app.get('/api/classes', async (req, res) => {
//     try {
//         const classes = await Class.find();
//         res.json(classes);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });
//
