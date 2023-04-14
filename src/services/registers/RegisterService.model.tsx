

interface IRegisterData {
    day: number
    month: number
    bank: number
    hands: number
    points: number
}

export interface IGetRegisterRequest {
    userId: number
    room: string
    day: number
    month: number
}

export interface IGetRegisterResponse {
    status: number
    data?: IRegisterData
    errors? : string[]
}

export interface ISaveRegisterRequest {
    data: IRegisterData
}

export interface ISaveRegisterResponse {
    status: number
    errors?: string[]
}

export interface IGetListRegisterRequest {
    userId: number
    room: string
}

export interface IGetListRegisterResponse {
    status: number
    list?: IRegisterData[]
    errors? : string[]
}

