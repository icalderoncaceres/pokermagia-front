
import {
    IGetRegisterRequest,
    IGetRegisterResponse,
    ISaveRegisterRequest,
    ISaveRegisterResponse,
} from './RegisterService.model';

export const get = async (payload: IGetRegisterRequest): Promise<IGetRegisterResponse> => {
    return {id: 1};
}

export const save = async (payload: ISaveRegisterRequest): Promise<ISaveRegisterResponse> => {
    return {id: 1};
}