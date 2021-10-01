const express = require('express');
const HttpError = require("../model/http-error.js");

const cssValues = [
	{
		id: '1',
		desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		category: 'css',
		title: 'routing'
	},
	{
		id: '2',
		desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
		category: 'css',
		title: 'error'
	},
	{
		id: '3',
		desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
		category: 'css',
		title: 'middleware'
	},
	{
		id: '4',
		desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
		category: 'css',
		title: 'middleware'
	}
]
const router = express.Router();


router.get('/', (req, res, next)=>{

	res.status(200).json({message: cssValues})
});

router.get('/:id', (req, res, next)=>{
	const routeId = req.params.id;
	const filterItem = cssValues.find( item => item.id === routeId);
	// if (!filterItem) {
	// 	const error = new Error('could not find in css...');
	// 	error.code= 404;
	// 	//? pt next intodeauna return
	// 	return  next(error);
	// }

	if(!filterItem){
		return next(
			new HttpError('could not find this id...', 404)
		)
	}


	res.status(200).json({message: filterItem})
});
module.exports  = router;