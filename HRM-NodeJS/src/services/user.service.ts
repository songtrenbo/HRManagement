import { IUser } from '../interfaces/user.interface';
import { UserModel } from '../models/user.model';

class UserService {
  static async getAllUsers() {
    try {
      const users = UserModel.find();
      return users;
    } catch (error) {
      console.log(`Could not fetch users ${error}`);
    }
  }
  static async newUser(data: IUser) {
    try {
      const newUser = {
        username: data.username,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        DoB: data.DoB,
        status: data.status,
        role: data.role,
        team: data.team,
        lastUpdated: new Date()
      };
      const response = await new UserModel(newUser).save();
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export default UserService;
