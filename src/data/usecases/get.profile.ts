import axios from 'axios';
import { ResponseAPI } from '../../services/feature/types';

export interface profileProps {
    id: string;
    token: string;
}

export default async function profile({ id, token }: profileProps): Promise<ResponseAPI> {
    return axios.get(`https://api.example.com/profile/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
}
