import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { Search, SearchIconWrapper, StyledInputBase } from './index.styled';

interface SearchBarProps {
    onSubmit: (value: string) => void;
    onDebouncedChange: (value: string) => void;
}

export default function SearchComponent({ onSubmit, onDebouncedChange }: SearchBarProps) {
    const [inputValue, setInputValue] = useState('');
    const [debouncedValue] = useDebounce(inputValue, 500);

    useEffect(() => {
        onDebouncedChange(debouncedValue);
    }, [debouncedValue, onDebouncedChange]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        onSubmit(inputValue);
    };

    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                value={inputValue}
                onChange={handleInputChange}
                placeholder='Search…'
            />
            <Button onClick={handleSubmit}>Search</Button>
        </Search>
    );
}
