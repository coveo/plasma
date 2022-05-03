import {createContext} from 'react';

export interface CheckboxContextProps {
    labelId: string;
}

export const CheckboxContext = createContext<CheckboxContextProps>({
    labelId: undefined,
});
