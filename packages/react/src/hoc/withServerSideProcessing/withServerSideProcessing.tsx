import {ComponentType, FunctionComponent} from 'react';

export interface WithServerSideProcessingProps {
    isServer?: boolean;
}

/**
 * @deprecated Use Mantine instead
 */
export const withServerSideProcessing = <T extends Record<string, unknown>>(
    Component: ComponentType<React.PropsWithChildren<T>>
): ComponentType<React.PropsWithChildren<T & WithServerSideProcessingProps>> => {
    const WrappedComponent: FunctionComponent<React.PropsWithChildren<T>> = (props) => (
        <Component {...props} isServer />
    );
    WrappedComponent.displayName = `withServerSideProcessing(${Component.displayName})`;
    return WrappedComponent;
};
