export const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

export const backgroundOptions = {
    dark: {name: 'Dark', value: 'var(--coveo-app-background)'},
    light: {name: 'Light', value: 'var(--coveo-app-background)'},
};
