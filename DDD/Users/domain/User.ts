export class User {
    private _name!: string;
    private _email!: string;
    private _firstName!: string;
    private _lastName!: string;
    constructor(
        private readonly _id: string,
        private readonly _username: string,
        private readonly _password: string
        ) {}

    set setName(name: string) {
        this._name = name;
    }

    set setEmail(email: string) {
        this._email = email;
    }

    set setFirstName(firstName: string) {
        this._firstName = firstName;
    }

    set setLastName(lastName: string) {
        this._lastName = lastName;
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

    get email(): string {
        return this._email
    }
}