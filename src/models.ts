export interface IUserResponse{
    success: boolean,
    total_pages: number,
    total_users: number,
    count: number,
    page: number,
    links:{
        next_url:string,
        prev_url: string
    }
    users: IUserGet[]
}

interface IUser {
    name: string,
    email: string,
    phone: string,
    position_id: number,
}
export interface IUserSend extends IUser {
    photo: File,
    [key: string]: any
}
export interface IUserGet extends IUser {
    id: number;
    position: string;
    photo: string;
    registration_timestamp: number;
}

export interface IPosition {
    id: number,
    name:string
}