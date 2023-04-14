
import {
    IGetRegisterRequest,
    IGetRegisterResponse,
    ISaveRegisterRequest,
    ISaveRegisterResponse,
    IGetListRegisterRequest,
    IGetListRegisterResponse
} from './RegisterService.model';
import {BASE_URL} from '../../helpers/config';

export const get = async (payload: IGetRegisterRequest): Promise<IGetRegisterResponse> => {
    const data = {
        day: payload.day,
        month: payload.month,
        userId: payload.userId,
        room: payload.room
    }
    return await callApi(`${BASE_URL}/api/v1/registers/get`, data, 'POST', 'getList');

}

export const getList = async (payload: IGetListRegisterRequest): Promise<IGetListRegisterResponse> => {
    const data = {
        userId: payload.userId,
        room: payload.room
    }
    return await callApi(`${BASE_URL}/api/v1/registers/getList`, data, 'POST', 'getList');
}

export const save = async (payload: ISaveRegisterRequest): Promise<ISaveRegisterResponse> => {
    return {status: 200};
}

const callApi = async (url: string, data: any, method: string, action: string): Promise<any> => {
    try {
        const response = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });
        return response.json();
    } catch (error) {
        throw new Error(`Error occurred with the ${action} endpoint`);
    }    
}