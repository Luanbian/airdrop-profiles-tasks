import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../services/feature/store';
import { useEffect } from 'react';
import { actions } from '../../services/feature/profiles/slice';

export default function Details() {
    const dispatch = useDispatch();
    const { profile, loading, error } = useSelector((state: AppState) => state);

    useEffect(() => {
        const fetchProfile = () => {
            dispatch(actions.getProfileRequest({ id: '65e94d14bb537ed15737e6d3', token: '12345' }));
        };
        fetchProfile();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <h1>Details</h1>
            <p>{profile.data._id}</p>
        </>
    );
}
