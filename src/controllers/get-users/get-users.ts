import { IGetUsersRepository } from "./protocols";

export class { IGetUsersController, IGetUserRepository } from "./protocols";

export class GetUsersController implements IGetUsersController {
    constructor(getUsersReposotory: IGetUsersRepository){
        this.getUsersRepository =getUsersReposotory
    }
    handle() {
        
    }
}