export class User {
    private _name!: string;

    constructor(
        private readonly _id: string,
        private readonly _username: string,
        private readonly _password: string
        ) {}

    set setName(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    get username(): string {
        return this._username;
    }

    get password(): string {
        return this._password
    }
}