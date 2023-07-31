import {ComponentType, FunctionComponent, PropsWithChildren} from 'react';

export interface WithServerSideProcessingProps {
    isServer?: boolean;
}

/**
 * @deprecated Use Mantine instead
 */
export const withServerSideProcessing = <T extends Record<string, unknown>>(
    Component: ComponentType<PropsWithChildren<T>>,
): ComponentType<PropsWithChildren<T & WithServerSideProcessingProps>> => {
    const WrappedComponent: FunctionComponent<PropsWithChildren<T>> = (props) => <Component {...props} isServer />;
    WrappedComponent.displayName = `withServerSideProcessing(${Component.displayName})`;
    return WrappedComponent;
};
