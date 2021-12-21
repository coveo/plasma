import * as React from 'react';
import {ValidationMessage} from '../components/ValidationMessage';

interface IWithValidationMessageHOCProps {
    id?: string;
    onlyShowMessageIfDirty?: boolean;
}

export const withValidationMessage = <T extends IWithValidationMessageHOCProps, R = any>(
    Component: React.ComponentClass<T, R> | React.FunctionComponent<T>
) => ({onlyShowMessageIfDirty, ...props}: T) => (
    <>
        <Component {...(props as T)} />
        <div>
            <ValidationMessage id={props.id!} onlyShowIfDirty={onlyShowMessageIfDirty} />
        </div>
    </>
);
