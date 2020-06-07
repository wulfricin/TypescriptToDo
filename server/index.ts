import { json as bodyParserJson } from 'body-parser';
import express from 'express';
import * as path from 'path';
import { ModelBuilder } from '../types/models/ModelBuilder';
import { UserModel } from '../types/models/UserModel';
const app = express();
app.use(bodyParserJson());
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/user/:id', async (req, res) => {
  try {

    console.log('here');
    const user = await UserModel().findById(req.params.id).exec();
    console.log(user);
    res.status(200).json(user);
  } catch(err) {
    console.log(err);
    res.status(400).json({ err });
  }
});
app.post('/user/', async (req, res) => {
  const user = req.body;
  const userInstance = await UserModel().create(user);
  const savedUser = await userInstance.save();
  res.json(savedUser.toObject());
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// tslint:disable-next-line: no-floating-promises
ModelBuilder.assignMongoose()
  .then(() => ModelBuilder.connectToDb())
  .then(() => {
    app.listen(process.env.PORT || 8080);
  });
