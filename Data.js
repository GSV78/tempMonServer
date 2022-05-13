import mongoose from 'mongoose';

const Data = new mongoose.Schema({
  day: { type: String, required: true },
  time: { type: String, required: true },
  t1: { type: Number },
  t2: { type: Number },
  t3: { type: Number },
  t4: { type: Number },
  t5: { type: Number },
  t6: { type: Number },
  t7: { type: Number },
  t8: { type: Number },
  t9: { type: Number },
  t10: { type: Number },
  t11: { type: Number },
  t12: { type: Number },
  arr: { type: Array(Number), required: true },
});

export default mongoose.model('Data', Data);
