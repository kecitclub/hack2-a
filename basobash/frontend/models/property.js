import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  roomSharing: {
<<<<<<< HEAD
type: Boolean,
required: true
  },
  roommates: {
type: Number,
required: false,
default: 0,

=======
    type: Boolean,
    required: true,
  },
  roommates: {
    type: Number,
    required: false,
    default: 0,
>>>>>>> c424111ba08c5fa69aef0163400a9491e1482703
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  kitchen: {
    type: Number,
    required: true,
  },
  sharedBy: {
    type: [{ type: mongoose.Schema.Types.ObjectId }],
    required: false,
    default: [],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Property =
  mongoose.models.Property || mongoose.model("Property", propertySchema);

export default Property;
