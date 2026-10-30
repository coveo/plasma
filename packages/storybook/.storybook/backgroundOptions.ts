export const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

/**
 * The color scheme last picked in the toolbar (persisted by Mantine), falling back to the OS preference on first visit.
 */
export const getPreferredColorScheme = (): 'dark' | 'light' => {
    const stored = localStorage.getItem('mantine-color-scheme-value');
    if (stored === 'dark' || stored === 'light') {
        return stored;
    }
    return prefersDark ? 'dark' : 'light';
};

export const backgroundOptions = {
    dark: {name: 'Dark', value: 'var(--coveo-app-background)'},
    light: {name: 'Light', value: 'var(--coveo-app-background)'},
};
