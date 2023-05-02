
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
    const response = await fetch(`${BASE_URL}/api/v1/players/get/${payload.id}`);
    return response.json();
}
export const index = async (payload: IIndexPlayerRequest): Promise<IIndexPlayerResponse> => {
    const response = await fetch(`${BASE_URL}/api/v1/players/index`);
    return response.json();
}

export const create = async (payload: ICreatePlayerRequest): Promise<ICreatePlayerResponse> => {
    const data = {
        name: payload.player.name || '',
        last_name: payload.player.last_name || '',
        phone: payload.player.phone || '',
        email: payload.player.email || '',
        password: payload.player.password || '',
        notes: payload.player.notes || '',
        country: payload.player.country || '',
        level: payload.player.level || '',
        room: payload.player.room || '',
    }
    return await callApi(`${BASE_URL}/api/v1/players/create`, data, 'POST', 'create');
}

export const update = async (payload: IUpdatePlayerRequest): Promise<IUpdatePlayerResponse> => {
    const data = {
        id: payload.id || 0,
        name: payload.player.name || '',
        last_name: payload.player.last_name || '',
        phone: payload.player.phone || '',
        email: payload.player.email || '',
        password: payload.player.password || '',
        notes: payload.player.notes || '',
        country: payload.player.country || '',
        level: payload.player.level || '',
        room: payload.player.room || '',
    }
    return await callApi(`${BASE_URL}/api/v1/players/update`, data, 'POST', 'update');
}
/*

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