import { ITeam } from '../interfaces/team.interface';
import { TeamModel } from '../models/team.model';
import { UserModel } from '../models/user.model';

class TeamService {
  static async getAllTeams() {
    try {
      const teams = TeamModel.find();
      return teams;
    } catch (error) {
      console.log(`Could not fetch teams ${error}`);
    }
  }

  static async createTeam(data: ITeam) {
    try {
      const exitedTeam = await TeamModel.findOne({ teamName: data.teamName });
      if (exitedTeam) {
        return null;
      }
      const response = await new TeamModel(data).save();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  static async addMemberToTeam(teamId: string, userId: string) {
    try {
      const exitedUser = await UserModel.findOne({ _id: userId });
      const exitedTeam = await TeamModel.find({ _id: teamId });

      if (exitedUser && exitedTeam && !exitedUser.team.toString().includes(teamId)) {
        const response = await UserModel.findByIdAndUpdate(userId, {
          $push: { team: teamId }
        });
        return response;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async getTeamsOfMember(userId: string) {
    try {
      const user = await UserModel.findOne({ _id: userId });
      const teams: string[] = [];
      user?.team.forEach(function (t) {
        teams.push(t._id.toString());
      });
      const response = await TeamModel.find({ _id: { $in: teams } });
      if (response) {
        return response;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default TeamService;
