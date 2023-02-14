import { Schema } from 'mongoose';

const UserSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true
  },

  username:{
    type: String,
    unique: true
  },

  password:{
    type: String
  },

  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },

  mail: {
    type: String,
    required: true,
    unique: true
  },

  phone: {
    type: String,
    unique: true
  },
  DoB: {
    type: Date,
    required: true
  },

  status: {
    type: String,
    enum: ['available', 'unavailable'],
    default: 'unavailable'
  },

  role: {
    type: String,
    enum: ['member', 'leader', 'admin'],
    default: 'member'
  },

  team: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
    required: true
  },

  lastUpdated: {
    type: Date,
    default: new Date()
  }
});

export default UserSchema;