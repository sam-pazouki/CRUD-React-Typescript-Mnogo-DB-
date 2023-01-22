import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUser(): Promise<User[]> {
    return [
      {
        firstName: "Sam",
        lastName: "Pazouki",
        email: "sam_pazoki@yahoo.com",
        password: "1234",
      },
    ];
  }
}
