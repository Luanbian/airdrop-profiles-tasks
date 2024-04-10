import { Typography } from '@mui/material';
import SearchComponent from '../components/SearchBar';

export default function Home() {
    const handleSearch = (value: string) => {
        console.log(value);
    };

    return (
        <div>
            <Typography variant='body1' sx={{ marginTop: '3%' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            </Typography>
            <SearchComponent onSubmit={handleSearch} />
        </div>
    );
}
