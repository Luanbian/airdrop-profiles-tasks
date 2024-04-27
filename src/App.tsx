import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import store, { persistor } from './services/feature/store';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeConfig from './presentation/theme/theme.config';
import Router from './presentation/components/router';

interface ProviderModernizeProps {
    children: React.ReactNode;
}

function ProviderModernize({ children }: ProviderModernizeProps) {
    return (
        <ThemeProvider theme={ThemeConfig()}>
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
                        <Router />
                    </Container>
                </ProviderModernize>
            </PersistGate>
        </Provider>
    );
}

export default App;
