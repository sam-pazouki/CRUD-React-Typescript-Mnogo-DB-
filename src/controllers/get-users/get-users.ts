import { IGetUsersController, IGetUsersRepository } from "./protocols";

export class GetUsersController implements IGetUsersController {
  constructor(private readonly getUsersReposotory: IGetUsersRepository) {}

  async handle() {
    try {
      const users = await this.getUsersReposotory.getUser();

      return {
        statusCode: 200,
        body: users,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Unknown error.",
      };
    }
  }
}
