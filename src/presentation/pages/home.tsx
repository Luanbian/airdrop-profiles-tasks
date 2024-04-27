import { Card, Typography } from '@mui/material';
import SearchComponent from '../components/SearchBar';
import styled from '../styles/home.module.css';
import Table from '../components/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AppState } from '../../services/feature/store';
import { actions } from '../../services/feature/profiles/slice';

export interface Rows {
    wallet: string;
    username: string;
    tasks: string;
    points: string;
    accounts: string;
    lastTaskUpdated: string;
}
export interface Details {
    task: string;
    point: string;
    when: string;
    transaction: string;
}

export default function Home() {
    const dispatch = useDispatch();

    const titles = ['Wallet', 'Username', 'Tasks', 'Points', 'Accounts', 'Last Task updated', ''];
    const subtitles = ['Task', 'Point', 'When', 'Transaction'];

    const rows = [
        {
            wallet: '0x12345',
            username: 'John Doe',
            tasks: '7 Tasks',
            points: '12 M',
            accounts: '3',
            lastTaskUpdated: '2024-03-22 12:30:00',
        },
        {
            wallet: '0x12345',
            username: 'John Doe',
            tasks: '10 Tasks',
            points: '1 M',
            accounts: '2',
            lastTaskUpdated: '2024-02-19 13:46:00',
        },
        {
            wallet: '0x12345',
            username: 'John Doe',
            tasks: '13 Tasks',
            points: '512 K',
            accounts: '1',
            lastTaskUpdated: '2024-01-15 09:22:00',
        },
        {
            wallet: '0x12345',
            username: 'John Doe',
            tasks: '5 Tasks',
            points: '7 M',
            accounts: '2',
            lastTaskUpdated: '2024-02-10 12:00:00',
        },
    ];

    const details = [
        {
            task: 'Calculated VAM',
            point: '100',
            when: '2024-03-22 12:18:00',
            transaction: '0x1234567890',
        },
        {
            task: 'Calculated VAM',
            point: '100',
            when: '2024-03-22 12:18:00',
            transaction: '0x1234567890',
        },
        {
            task: 'Calculated VAM',
            point: '100',
            when: '2024-03-22 12:18:00',
            transaction: '0x1234567890',
        },
        {
            task: 'Calculated VAM',
            point: '100',
            when: '2024-03-22 12:18:00',
            transaction: '0x1234567890',
        },
    ];

    const { profile, loading, error } = useSelector((state: AppState) => state);

    useEffect(() => {
        const fetchProfile = () => {
            dispatch(actions.getProfileRequest({ id: '65e94d14bb537ed15737e6d3', token: '12345' }));
        };
        fetchProfile();
    }, []);

    const handleSearch = (value: string) => {
        console.log(value);
        console.log(profile);
    };
    const handleDebounceChange = (value: string) => {
        console.log(value);
    };

    return (
        <div className={styled.main}>
            <div className={styled.search}>
                <Typography variant='h2' sx={{ marginTop: '3%' }}>
                    Search for a wallet or username
                </Typography>
                <SearchComponent onSubmit={handleSearch} onDebouncedChange={handleDebounceChange} />
            </div>
            <Card elevation={24} square={false}>
                <Table titles={titles} rows={rows} subtitles={subtitles} details={details} />
            </Card>
        </div>
    );
}
