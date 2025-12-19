import Newsletter from "../models/NewsLetterModel.js";

export const subscribe = async (req, res) => {
  try {
    const emailExists = await Newsletter.findOne({ email: req.body.email });
    if (emailExists) {
      return res.status(400).json({ message: "Already subscribed" });
    }

    const subscriber = await Newsletter.create(req.body);
    res.status(201).json(subscriber);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find();
    res.status(200).json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
