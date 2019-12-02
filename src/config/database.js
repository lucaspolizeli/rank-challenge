import mongoose from 'mongoose';

mongoose.connect(
  `mongodb://${process.env.HOST_MONGO}:${process.env.PORT_HOST_MONGO}/rank-challenge-notification`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

export default mongoose;
