import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Home from './presentation/pages/home';
import { ThemeSettings } from './presentation/theme/Theme';
import { Provider } from 'react-redux';
import store, { persistor } from './services/feature/store';
import { PersistGate } from 'redux-persist/integration/react';

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
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ProviderModernize>
                    <Container>
                        <Home />
                    </Container>
                </ProviderModernize>
            </PersistGate>
        </Provider>
    );
}

export default App;
