import {useMantineColorScheme} from '@mantine/core';
import type {Decorator} from '@storybook/react-vite';
import {useEffect} from 'react';

export const useColorScheme: Decorator = (Story, context) => {
    const {setColorScheme} = useMantineColorScheme();
    useEffect(() => {
        setColorScheme(context.globals.backgrounds.value);
    }, [context.globals.backgrounds.value]);

    return <Story />;
};
