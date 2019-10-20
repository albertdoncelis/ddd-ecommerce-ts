import { UserRepoInterface } from './UserRepo.interface'
import { User } from '../domain/User';

export class SeqUserRepository implements UserRepoInterface {

    constructor(private readonly model: any) {}
    
    getUserById(userId: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    getUserByName(username: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async exists(t: User): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}