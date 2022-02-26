const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const taskRoutes = require('./routers/task');

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;

mongoose
	.connect(
		'mongodb+srv://mahdifrhn:Frhn0521369@cluster0.bmct7.mongodb.net/Task-Getir?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() =>
		app.listen(PORT, () =>
			console.log(`Server Running on Port: http://localhost:${PORT}`)
		)
	)
	.catch((error) => console.log(`${error} did not connect`));
