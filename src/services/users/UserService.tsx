
import {
    ILoginUserRequest,
    ILoginUserResponse,
    IGetUserRequest,
    IGetUserResponse,
    ICreateUserRequest,
    ICreateUserResponse,
    IIndexUserRequest,
    IIndexUserResponse,
    IUpdateUserRequest,
    IUpdateUserResponse,
    IChangeStateUserRequest,
    IChangeStateUserResponse,
    IAutoLoginUserRequest,
    IAutoLoginUserResponse,
    ROLES,
} from './UserService.model';
import {BASE_URL} from '../../helpers/config'

export const login = async (payload: ILoginUserRequest): Promise<ILoginUserResponse> => {
    const data = {
        email: payload.email,
        password: payload.password
    }
    return {
        status: 422,
        data: {
            user: {
                id: 1,
                name: 'Ivan',
                last_name: 'Calderon',
                email: 'ivan@mail.com',
                role: ROLES.PLAYER,
                avatar: ''

            },
            token: 'zbdj-ckdk-cdkd-123',
        }
    }
    // return await callApi(`${BASE_URL}/api/v1/users/login`, data, 'POST', 'login');
}

export const autoLogin = async (payload: IAutoLoginUserRequest): Promise<IAutoLoginUserResponse> => {
    const data = {
        email: payload.email,
        token: payload.token
    }

    return await callApi(`${BASE_URL}/api/v1/users/autoLogin`, data, 'POST', 'autoLogin');
}

export const index = async (payload: IIndexUserRequest): Promise<IIndexUserResponse> => {
    let filters = '';

    if(payload.filter) {
        if (payload.filter.str) {
            filters += `?str=${payload.filter.str}`;
        }
        if (payload.filter.role) {
            filters += `${filters === '' ? '?' : '&'}role=${payload.filter.role};`
        }
    }
    return await callApi(`${BASE_URL}/api/v1/users/index/${filters}`, {}, 'GET', 'index');
}

export const get = async (payload: IGetUserRequest): Promise<IGetUserResponse> => {
    return await callApi(`${BASE_URL}/api/v1/users/${payload.id}`, {}, 'GET', 'get');
}

export const create = async (payload: ICreateUserRequest): Promise<ICreateUserResponse> => {
    const data = {
        user: payload.user
    }
    return await callApi(`${BASE_URL}/api/v1/users/create`, data, 'POST', 'create');
}

export const update = async (payload: IUpdateUserRequest): Promise<IUpdateUserResponse> => {
    const data = {
        user: payload.user
    }
    return await callApi(`${BASE_URL}/api/v1/users/update`, data, 'POST', 'update');
}

export const changeState = async (payload: IChangeStateUserRequest): Promise<IChangeStateUserResponse> => {
    const data = {
        userId: payload.userId
    }
    return await callApi(`${BASE_URL}/api/v1/users/changeState`, data, 'POST', 'changeState');
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
