import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { connect } from './config/database';
import { userRoute } from './routes/user.route';
import { teamRoute } from './routes/team.route';

const app = express();
dotenv.config();

connect();

//body-parser config;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/user', userRoute);
app.use('/team', teamRoute);

const port: string = process.env.PORT || '5000';

app.get('/', (req, res) => {
  res.send('API Work');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
