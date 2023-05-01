
import {
    IGetRegisterRequest,
    IGetRegisterResponse,
    ISaveRegisterRequest,
    ISaveRegisterResponse,
    IGetListRegisterRequest,
    IGetListRegisterResponse,
    IGetMonthlyRequest,
    IGetMonthlyResponse,
    ISaveMonthlyRequest,
    ISaveMonthlyResponse
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
    const data = {
        userId: payload.userId,
        room: payload.room,
        bank: payload.data.bank,
        hands: payload.data.hands,
        comodin: payload.data.comodin,
        day: payload.data.day,
        month: payload.data.month,
    }
    return await callApi(`${BASE_URL}/api/v1/registers/saveRegister`, data, 'POST', 'saveRegister');
}

export const getMonthly = async (payload: IGetMonthlyRequest): Promise<IGetMonthlyResponse> => {
    const data = {
        userId: payload.userId,
        room: payload.room,
        month: payload.month
    }
    return await callApi(`${BASE_URL}/api/v1/registers/getMonthly`, data, 'POST', 'getMonthly');
}

export const saveMonthly = async (payload: ISaveMonthlyRequest): Promise<ISaveMonthlyResponse> => {
    const data = {
        userId: payload.userId,
        room: payload.room,
        data: payload.data
    }
    return await callApi(`${BASE_URL}/api/v1/registers/saveMonthly`, data, 'POST', 'saveMonthly');
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