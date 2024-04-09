import { useEffect } from 'react';
import * as locales from '@mui/material/locale';
import { Direction, createTheme } from '@mui/material/styles';

import { baseDarkTheme, baselightTheme } from './DefaultColors';
import LightThemeColors from './LightThemeColors';
import { darkshadows, shadows } from './Shadows';
import DarkThemeColors from './DarkThemeColors';
import typography from './Typography';
import components from './Components';
import customizer from './customizer';
import palette from './Palette';

interface Config {
    direction: string;
    theme: string;
}

export const BuildTheme = (config: Config = {} as Config) => {
    const themeOptions = LightThemeColors.find((theme) => theme.name === config.theme);
    const darkthemeOptions = DarkThemeColors.find((theme) => theme.name === config.theme);
    const defaultTheme = customizer.activeMode === 'dark' ? baseDarkTheme : baselightTheme;
    const defaultShadow = customizer.activeMode === 'dark' ? darkshadows : shadows;
    const themeSelect = customizer.activeMode === 'dark' ? darkthemeOptions : themeOptions;
    const baseMode = {
        palette: {
            mode: customizer.activeMode,
        },
        shape: {
            borderRadius: customizer.borderRadius,
        },
        shadows: defaultShadow,
        typography,
    };
    // @ts-expect-error destructuring
    const theme = createTheme({
        ...baseMode,
        ...defaultTheme,
        ...locales,
        ...themeSelect,
        direction: config.direction as Direction,
        palette,
    });

    // @ts-expect-error destructuring
    theme.components = components(theme);

    return theme;
};

const ThemeSettings = () => {
    const { activeTheme, activeDir } = customizer;

    const theme = BuildTheme({
        direction: activeDir,
        theme: activeTheme,
    });

    useEffect(() => {
        document.dir = activeDir as string;
    }, [activeDir]);

    return theme;
};

export { ThemeSettings };
