import { model } from 'mongoose';
import { IUser } from '../interfaces/user.interface';
import UserSchema from '../schemas/users.schema';

export const UserModel = model<IUser>('User', UserSchema);
