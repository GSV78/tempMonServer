import mongoose from 'mongoose';

const Data = new mongoose.Schema({
  day: { type: String, required: true },
  time: { type: String, required: true },
  t1: { type: Number, required: true },
  t2: { type: Number, required: true },
  t3: { type: Number, required: true },
  t4: { type: Number, required: true },
  t5: { type: Number, required: true },
  t6: { type: Number, required: true },
  t7: { type: Number, required: true },
  t8: { type: Number, required: true },
  t9: { type: Number, required: true },
  t10: { type: Number, required: true },
  t11: { type: Number, required: true },
  t12: { type: Number, required: true },
});

export default mongoose.model('Data', Data);
