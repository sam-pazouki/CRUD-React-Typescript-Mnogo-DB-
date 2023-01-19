import { User } from "../../models/user";
import { HttpResponse } from "../protocols";

export interface IGetUsersController {
  handle(): Promise<HttpResponse<>>;
}

export interface IGetUsersRepository {
  getUser(): Promise<User[]>;
}
