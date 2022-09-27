import User from "../model/User";

export default class UserManager {
  private static user = User;

  static async registerUserData(userData: { _id: String, job: String, }): Promise<Boolean> {
    try {
        new User(userData).save();
        return true;
      } catch {
        return false;
      }
  }

  static async setUserName(userId: string, userName: string): Promise<Boolean> {
    try {
      UserManager.user.updateOne({ _id: userId }, { name: userName });
      return true;
    } catch {
      return false;
    }
  }

  static async deleteUserData(userId: string): Promise<Boolean> {
    try {
      UserManager.user.deleteOne({ _id: userId });
      return true;
    } catch {
      return false;
    }
  }

  static async getUser(userId: string) {
    try {
      return await UserManager.user.findOne({ _id: userId });
    } catch {
      return null;
    }
  }

  static async userExist(userId: string): Promise<Number> {
    try {
      const userCounts = await UserManager.user.countDocuments({ _id: userId });
      return userCounts;
    } catch {
      return 0;
    }
  }

  static async setUserMoney(userId: string, Money: number) {
    try {
      await UserManager.user.updateOne({ _id: userId }, { Coins: Money });
      return true;
    } catch {
      return false;
    }
  }
}
