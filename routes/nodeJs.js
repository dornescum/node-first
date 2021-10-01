const express = require('express');
const HttpError = require('../model/http-error.js');

const test = [
	{
		id: '1',
		desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		category: 'nodeJs',
		title: 'routing'
	},
	{
		id: '2',
		desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
		category: 'nodeJs',
		title: 'error'
	},
	{
		id: '3',
		desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
		category: 'nodeJs',
		title: 'middleware'
	},
	{
		id: '4',
		desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
		category: 'css',
		title: 'middleware'
	}
];


const router = express.Router();

router.get('/', (req, res, next) => {
	res.status(200).json(test);
});

router.get('/:pid', (req, res, next) => {
	const routeId = req.params.pid;
	const filterItem = test.find(el => el.id === routeId);

	// if (!filterItem) {
	// 	return res.status(404).json({message: `no route with this id: ${routeId}`});
	// }
	// if(!filterItem){
	// 	const error = new Error('could not find ...');
	// 	error.code= 404;
	// 	throw error;
	// }
	if(!filterItem){
		throw new HttpError('could not find this id...', 404);
	}

	res.status(200).json({message: filterItem});

});


module.exports = router;