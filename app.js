const express = require('express');
// const bodyParser =require('body-parser');
const cors = require('cors');

const individualRoutes = require('./routes/nodeJs');

const app = express();
app.use(cors());

app.use('/api/node', individualRoutes);

app.listen(5000);