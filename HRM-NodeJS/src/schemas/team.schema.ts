import { Schema } from 'mongoose';
const TeamSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true
  },

  teamName: {
    type: String,
    required: true
  },

  lastUpdated: {
    type: Date,
    default: new Date()
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});
export default TeamSchema;