import { Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
  static async apiGetAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      if (!users) {
        res.status(404).json('There are no user match!');
      }
      res.json(users);
    } catch (error) {
      res.status(500).json(`error: ${error}`);
    }
  }

  static async apiCreateUser(req: Request, res: Response) {
    try {
      const newUser = await UserService.newUser(req.body);
      res.json(newUser);
    } catch (error) {
      res.status(500).json(`error: ${error}`);
    }
  }
}

export default UserController;
