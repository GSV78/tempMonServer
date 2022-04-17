import express from 'express';
import mongoose from 'mongoose';
import { getData, sendData } from './Requester/requester.js';
import router from './router.js';
import cors from 'cors';
// import fileUpload from 'express-fileupload';

const PORT = process.env.PORT || 3001;
const DB_URL = 'mongodb://localhost:27017/tempMonitor';

const app = express();

app.use(express.json());

// let allowedOrigins = ['http://localhost:3000'];

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.indexOf(origin) === -1) {
//         var msg =
//           'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
//         return callback(new Error(msg), false);
//       }
//       return callback(null, true);
//     },
//   }),
// );
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
