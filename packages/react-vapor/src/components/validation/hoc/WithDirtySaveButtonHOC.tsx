import * as React from 'react';
import {connect} from 'react-redux';
import {IReactVaporState} from '../../../ReactVapor';
import {IButtonProps} from '../../button/Button';
import {ValidationSelectors} from '../ValidationSelectors';
import {InferableComponentEnhancer} from './connectHOC';

export interface IWithDirtySaveButtonHOCProps {
    validationIds: string[];
    skipDirty?: boolean;
    errorMessage?: (errors: string[]) => string | undefined;
    warningMessage?: (warnings: string[]) => string | undefined;
    dirtyMessage?: (dirty: boolean[]) => string | undefined;
}

const mapStateToProps = (state: IReactVaporState, ownProps: IWithDirtySaveButtonHOCProps) => ({
    dirty: ValidationSelectors.getAnyDirty(ownProps.validationIds)(state),
    errors: ValidationSelectors.getAnyError(ownProps.validationIds)(state),
    warnings: ValidationSelectors.getAnyWarning(ownProps.validationIds)(state),
});

export const withDirtySaveButtonHOC = <T extends IButtonProps>(Component: React.ComponentType<T>) => {
    type StateProps = ReturnType<typeof mapStateToProps>;
    const WrappedButton = ({
        dirty,
        errors,
        warnings,
        validationIds,
        skipDirty,
        errorMessage = (e) => `Cannot save because of the following errors: ${e.join('\n')}`,
        warningMessage = (w) => `Can save but with warnings: ${w.join('\n')}`,
        dirtyMessage = (d) => d.length === 0 && `Cannot save when there are no changes`,
        enabled,
        tooltip,
        ...props
    }: T & IWithDirtySaveButtonHOCProps & StateProps) => {
        const hasErrors = errors.length > 0;
        const hasWarnings = warnings.length > 0;
        const isDirty = dirty.length > 0;
        const canSaveWhenDirty = skipDirty ? true : isDirty;
        const generatedTooltip =
            (hasErrors && errorMessage(errors.map((error) => error.value))) ||
            (hasWarnings && canSaveWhenDirty && warningMessage(warnings.map((warning) => warning.value))) ||
            dirtyMessage(dirty.map((d) => d.value));

        return (
            <Component
                {...((props as unknown) as T)}
                enabled={canSaveWhenDirty && !hasErrors && enabled}
                tooltip={generatedTooltip || tooltip}
            />
        );
    };
    const enhance = connect(mapStateToProps) as InferableComponentEnhancer<StateProps>;
    return enhance(WrappedButton);
};
