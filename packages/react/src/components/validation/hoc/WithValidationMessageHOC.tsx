import {ComponentClass, FunctionComponent} from 'react';

interface IWithValidationMessageHOCProps {
    id?: string;
    onlyShowMessageIfDirty?: boolean;
}

export const withValidationMessage = <T extends IWithValidationMessageHOCProps, R = any>(
    Component: ComponentClass<T, R> | FunctionComponent<T>
) => ({onlyShowMessageIfDirty, ...props}: T) => (
    <>
        <Component {...(props as T)} />
        <div>
            <ValidationMessage id={props.id!} onlyShowIfDirty={onlyShowMessageIfDirty} />
        </div>
    </>
);
