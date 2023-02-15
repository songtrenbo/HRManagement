import { Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
  static async apiGetAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      if (!users) {
        return res.status(404).json('There are no user match!');
      }
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json(`error: ${error}`);
    }
  }

  static async apiCreateUser(req: Request, res: Response) {
    try {
      const newUser = await UserService.createUser(req.body);
      if (!newUser) {
        return res.status(400).json('Invalid request');
      }
      return res.status(200).json('Account created successfully');
    } catch (error) {
      return res.status(500).json(`error: ${error}`);
    }
  }

  static async apiGetMembersFromTeam(req: Request, res: Response) {
    try {
      const getMember = await UserService.getMembersFromTeam(req.params.id);
      if (!getMember) {
        return res.status(400).json('Invalid request');
      }
      return res.status(200).json(getMember);
    } catch (error) {
      return res.status(500).json(`error: ${error}`);
    }
  }
}

export default UserController;
