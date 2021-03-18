import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
  res.send('API');
});

const dbUrl =
    'mongodb+srv://kk632002:kk632002@memories.nuagd.mongodb.net/snap?retryWrites=true&w=majority',
  PORT = process.env.PORT || 3333;

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Connected on PORT : ${PORT}`))
  )
  .catch((e) => console.log(e));
