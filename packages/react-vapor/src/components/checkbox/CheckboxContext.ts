import * as React from 'react';

export interface CheckboxContextProps {
    labelId: string;
}

export const CheckboxContext = React.createContext<CheckboxContextProps>({
    labelId: undefined,
});
