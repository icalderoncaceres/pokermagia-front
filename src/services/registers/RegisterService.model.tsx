

interface IRegisterData {
    day: number
    month: number
    bank: number
    hands: number
    comodin: number
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
    userId: number
    room: string
    data: IRegisterData,
    images?: {id: string, b64: string}[]
}

export interface ISaveRegisterResponse {
    status: number
    bank: number
    hands: number
    comodin: number
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

export interface IGetMonthlyRequest {
    userId: number
    month: number
    room: string
}

export interface IGetMonthlyResponse {
    status: number
    list?: any[]
    errors?: string[]
}

export interface ISaveMonthlyRequest {
    userId: number
    data: {
        week: number,
        comodin: number
    }[]
    room: string
}

export interface ISaveMonthlyResponse {
    status: number
    error?: string[]
}
