import axios from 'axios';
import { ResponseAPI } from '../../services/feature/types';

export interface UniqueProfileProps {
    id: string;
    token: string;
}

export default async function profileId({ id, token }: UniqueProfileProps): Promise<ResponseAPI> {
    return axios.get(`https://api.example.com/profile/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
}
