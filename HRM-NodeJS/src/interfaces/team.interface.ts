import { Document, Types } from 'mongoose';

export interface ITeam extends Document {
  _id: Types.ObjectId;
  teamName: string;
  lastUpdated: Date;
}
