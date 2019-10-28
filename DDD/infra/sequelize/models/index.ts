import * as fs from 'fs';
import * as path from 'path';
import config from '../config/config'
import * as Sequelize from 'sequelize'

const sequelize = config.connection;

let models: any = {};
let modelsLoaded: boolean = false;

function toCamelCase (str: string): string {
    const _ = str.indexOf("_");
    if (~_) {
        return toCamelCase(str.substring(0, _)
            + str.substring(_ + 1)
                .substring(0, 1)
                .toUpperCase()
            + str.substring(_ + 2)
        )
    }
    return str.substring(0, 1).toUpperCase() + str.substring(1);
}

const createModels = () => {
    if (modelsLoaded) return models;

    const modelsList = fs.readdirSync(path.resolve(__dirname, "./"))
        .filter((t) => ~t.indexOf('.js') && !~t.indexOf("index") && !~t.indexOf("map"))
        .map((model) => sequelize.import(`${__dirname}/${model}`))

    modelsList.forEach((_, i) => {
        const modelName = toCamelCase(modelsList[i].name)
        models[modelName] = modelsList[i];
    })

    Object.keys(models).forEach(modelName => {
        if (models[modelName].associate) {
            models[modelName].associate(models);
        }
    })
    models['sequelize'] = sequelize;
    modelsLoaded = true

    return models;
}

export default createModels();