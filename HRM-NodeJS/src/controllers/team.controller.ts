import { Request, Response } from 'express';
import TeamService from '../services/team.service';

class TeamController {
  static async apiGetAllTeams(req: Request, res: Response) {
    try {
      const teams = await TeamService.getAllTeams();
      if (!teams) {
        return res.status(404).json('There are no team match!');
      }
      return res.status(200).json(teams);
    } catch (error) {
      return res.status(500).json(`error: ${error}`);
    }
  }

  static async apiCreateTeam(req: Request, res: Response) {
    try {
      const newTeam = await TeamService.createTeam(req.body);
      if (!newTeam) {
        return res.status(400).json('Invalid request');
      }
      return res.status(200).json('Team created successfully');
    } catch (error) {
      return res.status(500).json(`error: ${error}`);
    }
  }

  static async apiAddMemberToTeam(req: Request, res: Response) {
    try {
      const addMember = await TeamService.addMemberToTeam(req.body.teamId, req.body.userId);
      if (!addMember) {
        return res.status(400).json('Invalid request');
      }
      return res.status(200).json('Add Memeber to Team Successfully');
    } catch (error) {
      return res.status(500).json(`error: ${error}`);
    }
  }

  static async apiGetTeamsOfMember(req: Request, res: Response) {
    try {
      const teams = await TeamService.getTeamsOfMember(req.params.id);
      if (!teams) {
        return res.status(400).json('Invalid request');
      }
      return res.status(200).json(teams);
    } catch (error) {
      return res.status(500).json(`error: ${error}`);
    }
  }
}

export default TeamController;
