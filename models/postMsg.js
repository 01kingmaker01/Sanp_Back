import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model('postMsg', postSchema);
