import mongoose from '../../config/database';

const notificationShema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  keyword: {
    type: String,
    required: true
  },
  frequency: {
    type: Number,
    required: true
  }
});

export default mongoose.model('Notification', notificationShema);
