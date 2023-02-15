import { Schema } from 'mongoose';
const TeamSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true
  },

  teamName: {
    type: String,
    required: true,
    unique: true
  },

  lastUpdated: {
    type: Date,
    default: new Date()
  }
});
export default TeamSchema;
