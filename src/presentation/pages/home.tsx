import { Typography } from '@mui/material';
import SearchComponent from '../components/SearchBar';
import Table from '../components/Table';

export default function Home() {
    const handleSearch = (value: string) => {
        console.log(value);
    };

    const titles = ['Name', 'Email', 'Phone', 'Address', 'Actions'];
    const rows = [
        ['John Doe', 'John.doe@gmail', '123456789', '1234 Main St', 'Details'],
        ['John Doe', 'John.doe@gmail', '123456789', '1234 Main St', 'Details'],
        ['John Doe', 'John.doe@gmail', '123456789', '1234 Main St', 'Details'],
        ['John Doe', 'John.doe@gmail', '123456789', '1234 Main St', 'Details'],
    ];

    return (
        <div>
            <Typography variant='body1' sx={{ marginTop: '3%' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            </Typography>
            <SearchComponent onSubmit={handleSearch} />
            <Table titles={titles} rows={rows} />
        </div>
    );
}
