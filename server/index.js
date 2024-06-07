// 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 9000;

// ueing Middleware for secruity 
app.use(cors());
app.use(express.json());

// Buliding Connection between MongoDB databse
mongoose.connect('mongodb://localhost:27017/todoApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dataBase = mongoose.connection;
dataBase.on('error', console.error.bind(console, 'Error in connection'));
dataBase.once('open', () => {
  console.log('Connected to MongoDB !!');
});

// Routes
app.use('/api/todos', require('./routes/todos'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
