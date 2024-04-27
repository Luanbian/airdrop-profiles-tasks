import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../services/feature/store';
import { useEffect } from 'react';
import { actions } from '../../services/feature/profiles/slice';
import { useParams } from 'react-router-dom';
import getProfiles from '../../data/usecases/get.profiles';

export default function Details() {
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();

    const { profile, loading } = useSelector((state: AppState) => state);

    useEffect(() => {
        const fetchProfile = () => {
            dispatch(actions.getProfileRequest({ id: '65e94d14bb537ed15737e6d3', token: '12345' }));
        };
        if (id) {
            fetchProfile();
        }
    }, [id, dispatch]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <h1>Details</h1>
            <p>{profile.data._id}</p>
            <p>{id}</p>
            <button onClick={getProfiles}>teste</button>
        </>
    );
}
