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
    const subtitles = ['Taks', 'Status', 'Due Date', 'Points'];
    const details = [
        ['Discord', 'In Progress', '12/12/2021', '5'],
        ['Discord', 'In Progress', '12/12/2021', '5'],
        ['Discord', 'In Progress', '12/12/2021', '5'],
        ['Discord', 'In Progress', '12/12/2021', '5'],
    ];

    return (
        <div>
            <Typography variant='body1' sx={{ marginTop: '3%' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            </Typography>
            <SearchComponent onSubmit={handleSearch} />
            <Table titles={titles} rows={rows} subtitles={subtitles} details={details} />
        </div>
    );
}
