import { User } from "../domain/User";
import { RepoInterface } from "../../common/repo/Repo.interface";

export interface UserRepoInterface extends RepoInterface<User> {
    getUserById(userId: string): Promise<User>;
    getUserByName(username: string): Promise<User>;
}
