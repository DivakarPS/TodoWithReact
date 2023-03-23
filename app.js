const express = require('express');
const app = express();
const ApiRoutes = require('./routes/tasks');
const connect = require('./config/mongoose');
const Task = require('./models/tasks');

const PORT = 3000;

app.use(express.json());
app.use(express.static('./public'));
app.use(express.urlencoded());
app.use('/api',ApiRoutes);

app.listen(PORT, async () => {
    console.log(`Server is listening on PORT no: ${PORT}`);
    connect();
    // await Task.create({
    //     name: "CN videos",
    //     completed: false
    // });
});