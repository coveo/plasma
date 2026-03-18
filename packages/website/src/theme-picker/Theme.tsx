import {createTheme, DefaultMantineColor, Plasmantine} from '@coveord/plasma-mantine';
import {FunctionComponent, ReactNode, useMemo, useState} from 'react';
import {ThemePickerProvider} from './ThemePickerContext.js';

export const Theme: FunctionComponent<{children?: ReactNode}> = ({children}) => {
    const [primaryColor, setPrimaryColor] = useState<DefaultMantineColor>('teal');
    const PlasmaWebsiteTheme = useMemo(
        () =>
            createTheme({
                primaryColor,
            }),
        [primaryColor],
    );

    return (
        <ThemePickerProvider value={{setPrimaryColor}}>
            <Plasmantine theme={PlasmaWebsiteTheme}>{children}</Plasmantine>
        </ThemePickerProvider>
    );
};
