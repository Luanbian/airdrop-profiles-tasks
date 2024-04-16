import axios from 'axios';
import { ResponseAPI } from '../../services/feature/types';

export interface UniqueProfileProps {
    id: string;
    token: string;
}

export default async function profileById({ id, token }: UniqueProfileProps): Promise<ResponseAPI> {
    return await axios.get(`http://localhost:3000/profile/search/${id}`);
}
