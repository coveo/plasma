import classNames from 'classnames';
import * as React from 'react';
import {connect} from 'react-redux';
import {IReactVaporState} from '../../../ReactVapor';
import {ValidationSelectors} from '../ValidationSelectors';

export interface IValidationMessageProps {
    id: string;
}

const mapStateToProps = (state: IReactVaporState, ownProps: IValidationMessageProps) => ({
    errors: ValidationSelectors.getErrors(ownProps.id)(state),
    warnings: ValidationSelectors.getWarnings(ownProps.id)(state),
});

export const ValidationMessageClasses = {
    error: 'text-red',
    warning: 'text-yellow',
};

export const ValidationMessageDisconnect: React.FunctionComponent<IValidationMessageProps &
    ReturnType<typeof mapStateToProps>> = ({errors, warnings}) => {
    const hasErrors = errors.length > 0;
    const hasWarnings = warnings.length > 0;
    const eitherErrorsOrWarnings = hasErrors ? errors : warnings;
    return (
        <>
            {(hasErrors || hasWarnings) &&
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

export const ValidationMessage = connect(mapStateToProps)(ValidationMessageDisconnect);
