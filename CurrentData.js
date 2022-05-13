import mongoose from 'mongoose';

const currentData = new mongoose.Schema({
  name: { type: String, required: true },
  time: { type: String, required: true },
  arr: { type: Array(Number), required: true },
});

export default mongoose.model('currentData', currentData);
