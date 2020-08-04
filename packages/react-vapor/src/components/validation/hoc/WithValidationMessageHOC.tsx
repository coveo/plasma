import * as React from 'react';
import {ValidationMessage} from '../components/ValidationMessage';

export const withValidationMessage = <T extends {id?: string}, R = any>(
    Component: React.ComponentClass<T, R> | React.FunctionComponent<T>
) => (props: T) => (
    <>
        <Component {...(props as T)} />
        <div>
            <ValidationMessage id={props.id!} />
        </div>
    </>
);
