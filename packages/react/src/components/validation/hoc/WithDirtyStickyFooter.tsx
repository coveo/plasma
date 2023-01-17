import {ComponentClass, FunctionComponent} from 'react';
import {connect} from 'react-redux';

import {PlasmaState} from '../../../PlasmaState.js';
import {IStickyFooterProps} from '../../stickyFooter/StickyFooter.js';
import {ValidationSelectors} from '../ValidationSelectors.js';

export interface IWithDirtyStickyFooterOwnProps {
    validationIds: string[];
    isOpened?: boolean;
}

const mapStateToProps = (state: PlasmaState, {validationIds}: IWithDirtyStickyFooterOwnProps) => ({
    isDirty: ValidationSelectors.isDirty(validationIds)(state),
});
/**
 * @deprecated Use Mantine instead
 */
export const withDirtyStickyFooterHOC = <T extends IStickyFooterProps>(
    Component: ComponentClass<T> | FunctionComponent<T>
) => {
    type NewOwnProps = Omit<T, 'isOpened'> & IWithDirtyStickyFooterOwnProps;
    type StateProps = ReturnType<typeof mapStateToProps>;
    const WrappedStickyFooter: FunctionComponent<NewOwnProps & StateProps> = ({
        isDirty,
        validationIds,
        isOpened = false,
        ...props
    }) => <Component {...(props as any)} isOpened={isDirty || isOpened} />;

    return connect<StateProps, null, React.PropsWithChildren<NewOwnProps>>(mapStateToProps)(WrappedStickyFooter as any);
};
