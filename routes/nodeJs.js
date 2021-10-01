const express = require('express');
const HttpError = require('../model/http-error.js');

const routesControllers = require('../controllers/routes-controllers');


const router = express.Router();

router.get('/', routesControllers.getAllNodeRoutes);

router.get('/:pid', routesControllers.getNodeRoutesById);

router.post('/post', routesControllers.createNewPosts);


module.exports = router;

// if (!filterItem) {
// 	return res.status(404).json({message: `no route with this id: ${routeId}`});
// }
// if(!filterItem){
// 	const error = new Error('could not find ...');
// 	error.code= 404;
// 	throw error;
// }