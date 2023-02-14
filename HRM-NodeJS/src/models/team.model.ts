import { model } from 'mongoose';
import { ITeam } from '../interfaces/team.interface';
import TeamSchema from '../schemas/team.schema';

export const TeamModel = model<ITeam>('Team', TeamSchema);
