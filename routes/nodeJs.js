const express = require('express');

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
	}
]


const router = express.Router();

router.get('/', (req, res, next)=>{
	res.status(200).json(test)
});

router.get('/:pid', (req, res, next)=>{
	const routeId = req.params.pid;
	const filterItem = test.filter( el => el.id === routeId);


	res.status(200).json({message: filterItem})
});

module.exports  = router;