import { UserRepoInterface } from "../../../../Users/repo/UserRepo.interface";
import { User } from "../../../../Users/domain/User";

export class SequelizeUserRepository implements UserRepoInterface {

    constructor(private readonly models: any) {}

    exists(t: User): Promise<boolean> {
        throw new Error("todo")
    }

    getUserById(userId: string): Promise<User> {
        throw new Error("todo")
    }

    getUserByName(username: string): Promise<User> {
        throw new Error("todo")
    }

}