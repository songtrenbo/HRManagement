import { Document, Types } from 'mongoose';

export interface ITeam extends Document {
  id: Types.ObjectId;
  teamName: string;
  lastUpdated: Date;
  user: Types.ObjectId;
}
