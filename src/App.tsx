import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Home from './presentation/pages/home';
import { ThemeSettings } from './presentation/theme/Theme';

interface ProviderModernizeProps {
    children: React.ReactNode;
}

function ProviderModernize({ children }: ProviderModernizeProps) {
    const theme = ThemeSettings();

    return (
        <ThemeProvider
            theme={createTheme({
                ...theme,
                direction: theme.direction,
                palette: theme.palette,
                typography: theme.typography,
                shadows: theme.shadows,
                shape: {
                    borderRadius: theme.shape.borderRadius,
                },
            })}
        >
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}

function App() {
    return (
        <ProviderModernize>
            <Home />
        </ProviderModernize>
    );
}

export default App;
