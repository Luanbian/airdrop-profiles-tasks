import { InputBase, alpha, styled } from '@mui/material';

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '27vw',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        borderRadius: theme.shape.borderRadius,
    },
    '& .MuiInputBase-input:focus': {
        border: '1px solid #763EBD',
    },
}));
