import {FunctionComponent} from 'react';

export const LoadingSpinner: FunctionComponent<any> = () => (
    <div role="alert" aria-busy="true" className={'loading-spinner'}></div>
);
