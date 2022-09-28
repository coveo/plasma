import {FunctionComponent} from 'react';

/**
 * @deprecated Use Mantine Input instead: https://mantine.dev/core/input/
 */
export const InputDescription: FunctionComponent<React.PropsWithChildren<unknown>> = ({children}) => (
    <section className="help-text">{children}</section>
);
