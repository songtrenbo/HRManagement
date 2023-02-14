import { Document, Types } from 'mongoose';

export interface IUser extends Document {
  id: Types.ObjectId;
  username: string,
  password: string,
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  DoB: Date;
  status: 'available' | 'unavailable';
  role: 'member' | 'leader' | 'admin';
  team: Types.ObjectId;
  lastUpdated: Date;
}
