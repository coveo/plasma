import {ComponentType} from 'react';
import {connect} from 'react-redux';
import {PlasmaState} from '../../../PlasmaState.js';
import {IButtonProps} from '../../button/Button.js';
import {ValidationSelectors} from '../ValidationSelectors.js';

export interface IWithDirtySaveButtonHOCProps {
    validationIds: string[];
    skipDirty?: boolean;
    errorMessage?: (errors: string[]) => string | undefined;
    warningMessage?: (warnings: string[]) => string | undefined;
    dirtyMessage?: (dirty: boolean[]) => string | undefined;
}

const mapStateToProps = (state: PlasmaState, ownProps: IWithDirtySaveButtonHOCProps) => ({
    dirty: ValidationSelectors.getAnyDirty(ownProps.validationIds)(state),
    errors: ValidationSelectors.getAnyError(ownProps.validationIds)(state),
    warnings: ValidationSelectors.getAnyWarning(ownProps.validationIds)(state),
});
/**
 * @deprecated Use Mantine instead
 */
export const withDirtySaveButtonHOC = <T extends IButtonProps>(Component: ComponentType<T>) => {
    type StateProps = ReturnType<typeof mapStateToProps>;
    const WrappedButton = ({
        dirty,
        errors,
        warnings,
        validationIds,
        skipDirty,
        errorMessage = (e) =>
            e?.length > 1
                ? `Some required fields are missing. Please complete them.`
                : `Cannot save because of the following error: ${e}`,
        warningMessage = (w) =>
            w?.length > 1
                ? `Some fields have warnings. Please validate them before saving.`
                : `Can save, but with the following warning: ${w}`,
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
            (skipDirty ? '' : dirtyMessage(dirty.map((d) => d.value)));

        return (
            <Component
                {...(props as unknown as T)}
                enabled={canSaveWhenDirty && !hasErrors && enabled}
                tooltip={generatedTooltip || tooltip}
            />
        );
    };
    return connect<StateProps, null, T & IWithDirtySaveButtonHOCProps>(mapStateToProps)(WrappedButton as any);
};
