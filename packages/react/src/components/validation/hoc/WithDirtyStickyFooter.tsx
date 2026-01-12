import {PropsWithChildren, ComponentClass, FunctionComponent} from 'react';
import {PropsWithChildren, connect} from 'react-redux';

import {PropsWithChildren, PlasmaState} from '../../../PlasmaState';
import {PropsWithChildren, IStickyFooterProps} from '../../stickyFooter/StickyFooter';
import {PropsWithChildren, ValidationSelectors} from '../ValidationSelectors';

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
    Component: ComponentClass<T> | FunctionComponent<T>,
) => {
    type NewOwnProps = Omit<T, 'isOpened'> & IWithDirtyStickyFooterOwnProps;
    type StateProps = ReturnType<typeof mapStateToProps>;
    const WrappedStickyFooter: FunctionComponent<NewOwnProps & StateProps> = ({
        isDirty,
        validationIds,
        isOpened = false,
        ...props
    }) => <Component {...(props as any)} isOpened={isDirty || isOpened} />;

    return connect<StateProps, null, PropsWithChildren<NewOwnProps>>(mapStateToProps)(WrappedStickyFooter as any);
};
