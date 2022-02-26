const express = require('express');
const router = new express.Router();
const {
	getTasks,
	getTaskById,
	createTask,
	deleteTask,
	updateTask,
	changeStatus,
} = require('../controller/task.js');

router.get('', getTasks);
router.get('/:id', getTaskById);
router.post('/create', createTask);
router.patch('/edit/:id', updateTask);
router.delete('/delete/:id', deleteTask);
router.patch('/change-status/:id', changeStatus);

module.exports = router;
