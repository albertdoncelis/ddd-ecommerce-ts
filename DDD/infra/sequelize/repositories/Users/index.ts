import { SequelizeUserRepository } from "./sequelize.user.repository";
import models from '../../models';

const userRepo = new SequelizeUserRepository(models);

export {
    userRepo
}