import {ComponentClass, FunctionComponent} from 'react';
import {ValidationMessage} from '../components/ValidationMessage.js';

interface IWithValidationMessageHOCProps {
    id?: string;
    onlyShowMessageIfDirty?: boolean;
}

/**
 * @deprecated Use Mantine instead
 */
export const withValidationMessage =
    <T extends IWithValidationMessageHOCProps, R = any>(Component: ComponentClass<T, R> | FunctionComponent<T>) =>
    ({onlyShowMessageIfDirty, ...props}: T) =>
        (
            <>
                <Component {...(props as T)} />
                <div>
                    <ValidationMessage id={props.id!} onlyShowIfDirty={onlyShowMessageIfDirty} />
                </div>
            </>
        );
