const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
	{
		title: {
			type: String,
			trim: true,
			required: true,
		},
		description: {
			type: String,
			trim: true,
			required: true,
		},
		priority: {
			type: String,
			trim: true,
			required: false,
		},
		status: {
			type: String,
			required: true,
			default: 'Todo',
		},
	},
	{
		timestamps: true,
	}
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
