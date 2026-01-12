import classNames from 'clsx';
import {PropsWithChildren, FunctionComponent, useEffect} from 'react';
import {connect} from 'react-redux';

import {PlasmaState} from '../../../PlasmaState';
import {IDispatch} from '../../../utils';
import {ValidationActions} from '../ValidationActions';
import {ValidationSelectors} from '../ValidationSelectors';

export interface IValidationMessageProps {
    id: string;
    onlyShowIfDirty?: boolean;
}

const mapStateToProps = (state: PlasmaState, ownProps: IValidationMessageProps) => ({
    isDirty: ValidationSelectors.getIsDirty(ownProps.id)(state),
    errors: ValidationSelectors.getErrors(ownProps.id)(state),
    warnings: ValidationSelectors.getWarnings(ownProps.id)(state),
});

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IValidationMessageProps) => ({
    cleanMessage: () => dispatch(ValidationActions.cleanMessage(ownProps.id)),
});

export const ValidationMessageDisconnect: FunctionComponent<
    PropsWithChildren<
        IValidationMessageProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
    >
> = ({onlyShowIfDirty, isDirty, errors, warnings, cleanMessage}) => {
    useEffect(() => () => void cleanMessage(), []);

    const hasDirty = !onlyShowIfDirty || isDirty.some((dirty) => dirty.value);
    const hasErrors = errors.length > 0;
    const hasWarnings = warnings.length > 0;
    const eitherErrorsOrWarnings = hasErrors ? errors : warnings;
    return (
        <>
            {hasDirty &&
                (hasErrors || hasWarnings) &&
                eitherErrorsOrWarnings.map(({validationType, value}) => (
                    <span
                        key={validationType}
                        className={classNames('text', {
                            'mod-error': hasErrors,
                            'mod-warning': !hasErrors,
                        })}
                    >
                        {value}
                    </span>
                ))}
        </>
    );
};
/**
 * @deprecated Use Mantine instead
 */
export const ValidationMessage = connect(mapStateToProps, mapDispatchToProps)(ValidationMessageDisconnect);
