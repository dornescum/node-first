const express = require('express');
const bodyParser =require('body-parser');
const cors = require('cors');

const individualRoutes = require('./routes/nodeJs');
const cssRoutes = require('./routes/css')

const app = express();
app.use(cors());
// verifica tot ce trece  si automat da next la urmatorul middleware
app.use(bodyParser.json());

app.use('/api/node', individualRoutes);
app.use('/api/css', cssRoutes);

app.use((error, req, res, next)=>{
	if (res.headerSent){
		return next(error)
	}
	res.status(error.code || 500);
	res.json({message: error.message || 'an unknown error'})
})

app.listen(5000);