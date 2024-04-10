import { createTheme } from '@mui/material';
import { ThemeSettings } from './Theme';

export default function ThemeConfig() {
    const theme = ThemeSettings();
    return createTheme({
        ...theme,
        direction: theme.direction,
        palette: theme.palette,
        typography: theme.typography,
        shadows: theme.shadows,
        shape: {
            borderRadius: theme.shape.borderRadius,
        },
    });
}
