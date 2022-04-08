import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
// import fileUpload from 'express-fileupload';

const PORT = 3001;
const DB_URL = 'mongodb://localhost:27017/tempMonitor';

const app = express();

app.use(express.json());
// app.use(express.static('static'));
// app.use(fileUpload({}));
app.use('/api', router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
    app.listen(PORT, () => console.log('Server started on port ' + PORT));
  } catch (error) {
    console.log(error);
  }
}

startApp();
