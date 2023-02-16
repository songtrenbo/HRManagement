import { IUser } from '../interfaces/user.interface';
import { UserModel } from '../models/user.model';
import { default as bcrypt } from 'bcryptjs';
import jwt from 'jsonwebtoken';

class UserService {
  static async login(username: string, password: string) {
    const userData = await UserModel.findOne({ username: username });
    if (userData && bcrypt.compareSync(password, userData.password) === true) {
      const data = {
        userId: userData._id,
        firstName: userData.firstName,
        mail: userData.mail
      };

      const token = jwt.sign(data, process.env.ACCESS_TOKEN_PRIVATE_KEY!, {
        expiresIn: 300
      });

      const refreshToken = jwt.sign({}, process.env.REFRESH_TOKEN_PRIVATE_KEY!, {
        expiresIn: '24h'
      });

      const addRefreshToken = await UserModel.findByIdAndUpdate(userData._id, {
        refreshToken: refreshToken
      });

      const response = {
        token: token
      };

      if (addRefreshToken && response) {
        return response;
      }
    } else {
      return null;
    }
  }

  static async getAllUsers() {
    try {
      const users = UserModel.find();
      return users;
    } catch (error) {
      console.log(`Could not fetch users ${error}`);
    }
  }

  static async createUser(data: IUser) {
    try {
      const exitedUser = await UserModel.findOne({ username: data.username });
      if (exitedUser || data.role === 'admin') {
        return null;
      }
      const hashPassword = await UserService.hashUserPassword(data.password);
      const newUser = {
        username: data.username,
        password: hashPassword,
        firstName: data.firstName,
        lastName: data.lastName,
        mail: data.mail,
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

  static async hashUserPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  static async getMembersFromTeam(teamId: string) {
    try {
      const response = await UserModel.find({ team: teamId });
      if (!response) {
        return null;
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export default UserService;
