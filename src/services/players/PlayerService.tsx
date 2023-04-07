
import { 
    IGetPlayerRequest,
    IGetPlayerResponse,
    IIndexPlayerRequest,
    IIndexPlayerResponse,
    ICreatePlayerRequest,
    ICreatePlayerResponse,
    IRemovePlayerRequest,
    IRemovePlayerResponse,
    IUpdatePlayerRequest,
    IUpdatePlayerResponse, 
} from "./PlayerService.model";
import { BASE_URL } from '../../helpers/config'

export const get = async (payload: IGetPlayerRequest): Promise<IGetPlayerResponse> => {
    return await callApi(`${BASE_URL}/api/v1/players/${payload.id}`, {}, 'GET', 'get');
}
/*
export const index = async (payload: IIndexPlayerRequest): Promise<IIndexPlayerResponse> => {
    return {id: 1};
}

export const create = async (payload: ICreatePlayerRequest): Promise<ICreatePlayerResponse> => {
    return {id: 1};
}

export const update = async (payload: IUpdatePlayerRequest): Promise<IUpdatePlayerResponse> => {
    return {id: 1};
}

export const remove = async (payload: IRemovePlayerRequest): Promise<IRemovePlayerResponse> => {
    return { id: 1};
}
*/
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