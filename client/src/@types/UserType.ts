export interface IRegister {
    userName: string,
    email: string,
    password: string,
    passwordConfirm: string
}

export interface ILogin {
    email: string,
    password: string,
}

export interface IUser {
    _id: string,
    userName: string,
    email: string,
    password: string,
    passwordConfirm: string
}