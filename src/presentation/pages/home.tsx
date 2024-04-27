import { Card, Typography } from '@mui/material';
import SearchComponent from '../components/SearchBar';
import styled from '../styles/home.module.css';
import Table from '../components/Table';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    const titles = ['Wallet', 'Username', 'Tasks', 'Points', 'Accounts', 'Last Task updated', ''];

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

    const handleSearch = (value: string) => {
        console.log(value);
    };
    const handleDebounceChange = (value: string) => {
        console.log(value);
    };
    const navigateToDetails = () => {
        navigate('/123');
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
                <Table titles={titles} rows={rows} BtnTitle='Details' onClick={navigateToDetails} />
            </Card>
        </div>
    );
}
