const HttpError = require("../model/http-error.js");

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


const getNodeRoutesById =(req, res, next) => {
	const routeId = req.params.pid;
	const filterItem = test.find(el => el.id === routeId);
	if(!filterItem){
		throw new HttpError('could not find this id...', 404);
	}
	res.status(200).json({message: filterItem});
};
const getAllNodeRoutes =(req, res, next) => {
	res.status(200).json(test);
};

const createNewPosts = (req, res, next)=>{
	const {desc, category, title, id} = req.body;
	const createdPost = {
		title,
		category,
		desc,
		id
	}
	test.push(createdPost) // sau unshift dc vreaus a fie primul
	res.status(201).json({message: createdPost})
}

// o varianta!!
// module.exports = getNodeRoutesById;
// module.exports = getAllNodeRoutes;

exports.getNodeRoutesById = getNodeRoutesById;
exports.getAllNodeRoutes = getAllNodeRoutes;
exports.createNewPosts = createNewPosts;
