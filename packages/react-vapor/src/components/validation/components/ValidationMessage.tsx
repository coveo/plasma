import classNames from 'classnames';
import * as React from 'react';
import {connect} from 'react-redux';
import {IReactVaporState} from '../../../ReactVapor';
import {IDispatch} from '../../../utils';
import {ValidationActions} from '../ValidationActions';
import {ValidationSelectors} from '../ValidationSelectors';

export interface IValidationMessageProps {
    id: string;
    onlyShowIfDirty?: boolean;
}

const mapStateToProps = (state: IReactVaporState, ownProps: IValidationMessageProps) => ({
    isDirty: ValidationSelectors.getIsDirty(ownProps.id)(state),
    errors: ValidationSelectors.getErrors(ownProps.id)(state),
    warnings: ValidationSelectors.getWarnings(ownProps.id)(state),
});

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IValidationMessageProps) => ({
    cleanMessage: () => dispatch(ValidationActions.cleanMessage(ownProps.id)),
});

export const ValidationMessageClasses = {
    error: 'validation-error',
    warning: 'validation-warning',
};

export const ValidationMessageDisconnect: React.FunctionComponent<
    IValidationMessageProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
> = ({onlyShowIfDirty, isDirty, errors, warnings, cleanMessage}) => {
    React.useEffect(() => () => cleanMessage(), []);

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
                        className={classNames({
                            [ValidationMessageClasses.error]: hasErrors,
                            [ValidationMessageClasses.warning]: !hasErrors,
                        })}
                    >
                        {value}
                    </span>
                ))}
        </>
    );
};

export const ValidationMessage = connect(mapStateToProps, mapDispatchToProps)(ValidationMessageDisconnect);
