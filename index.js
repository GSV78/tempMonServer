import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import path from 'path';
const __dirname = path.resolve();
// import fileUpload from 'express-fileupload';

const PORT = process.env.PORT || 3001;
const DB_URL = 'mongodb://localhost:27017/tempMonitor';

const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use('/api', router);

async function startApp() {
  try {
    mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
    app.listen(PORT, () => console.log('Server started on port ' + PORT));
  } catch (error) {
    console.log(error);
  }
}
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
});

startApp();
