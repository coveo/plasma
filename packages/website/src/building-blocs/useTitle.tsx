import * as React from 'react';

export const useTitle = (title: string) => {
    React.useEffect(() => {
        window.document.title = `${title} - Plasma Design System`;
        return () => {
            window.document.title = 'Plasma Design System';
        };
    }, [title]);
};
