import {FunctionComponent} from 'react';

export const PlasmaLoading: FunctionComponent<React.PropsWithChildren<unknown>> = () => (
    <div className="plasma-spinner">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
        <div className="bounce4" />
    </div>
);
