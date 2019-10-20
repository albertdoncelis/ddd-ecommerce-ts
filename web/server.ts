import mongoose, { Mongoose } from "mongoose";
import { Sequelize } from 'sequelize';

(async () => {
const nosql = new Mongoose()
.createConnection('', {
    useNewUrlParser: true
});

const sql = new Sequelize({
    database: 'somedb',
    dialect: 'sqlite',
    username: 'root',
    password: ''
});
const dbdata = [
    {"mongodb": nosql},
    {"sequelize": sql}
]



})();