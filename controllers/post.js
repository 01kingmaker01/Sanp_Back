import mongoose from 'mongoose';
import postMsg from '../models/postMsg.js';

export const getPost = async (req, res) => {
  try {
    const postMessage = await postMsg.find({});
    res.status(200).json(postMessage);
  } catch (e) {
    console.error(e.message);
  }
};
export const createPost = async (req, res) => {
  try {
    const post = req.body;
    const newPost = new postMsg(post);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (e) {
    console.error(e.message);
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id: _id } = req.params,
      post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send(`Not Found`);

    const updatedPostOBJ = { ...post, _id };

    const updatedPost = await postMsg.findByIdAndUpdate(_id, updatedPostOBJ, {
      new: true,
    });

    res.json(updatedPost);
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`Not Found`);

    await postMsg.findByIdAndDelete(id);

    res.json({ message: 'Post Deleted Successfully' });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`Not Found`);

    const post = await postMsg.findById(id);
    const updPostLike = await postMsg.findByIdAndUpdate(
      id,
      { likeCount: post.likeCount + 1 },
      { new: true }
    );
    return res.json(updPostLike);
  } catch (e) {
    console.error(e);
  }
};
