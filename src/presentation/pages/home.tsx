import { Card, Typography } from '@mui/material';
import SearchComponent from '../components/SearchBar';
import styled from '../styles/home.module.css';
import Table from '../components/Table';

export default function Home() {
    const handleSearch = (value: string) => {
        console.log(value);
    };
    const handleDebounceChange = (value: string) => {
        console.log(value);
    };

    const titles = ['Wallet', 'Username', 'Tasks', 'Points', 'Accounts', 'Last Task updated', ''];
    const rows = [
        ['0x12345', 'John Doe', '7 Tasks', '12 M', '3', '2024-03-22 12:30:00', 'Details'],
        ['0x12345', 'John Doe', '10 Tasks', '1 M', '2', '2024-02-19 13:46:00', 'Details'],
        ['0x12345', 'John Doe', '13 Tasks', '512 K', '1', '2024-01-15 09:22:00', 'Details'],
        ['0x12345', 'John Doe', '5 Tasks', '7 M', '2', '2024-02-10 12:00:00', 'Details'],
    ];
    const subtitles = ['Task', 'Point', 'When', 'Transaction'];
    const details = [
        ['Calculated VAM', '100', '2024-03-22 12:18:00', '0x1234567890'],
        ['Calculated VAM', '100', '2024-03-22 12:18:00', '0x1234567890'],
        ['Calculated VAM', '100', '2024-03-22 12:18:00', '0x1234567890'],
        ['Calculated VAM', '100', '2024-03-22 12:18:00', '0x1234567890'],
    ];

    return (
        <div className={styled.main}>
            <Typography variant='h2' sx={{ marginTop: '3%' }}>
                Search for a wallet or username
            </Typography>
            <SearchComponent onSubmit={handleSearch} onDebouncedChange={handleDebounceChange} />
            <Card elevation={24} square={false}>
                <Table titles={titles} rows={rows} subtitles={subtitles} details={details} />
            </Card>
        </div>
    );
}
