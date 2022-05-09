import {ComponentType, FunctionComponent} from 'react';

export interface WithServerSideProcessingProps {
    isServer?: boolean;
}

export const withServerSideProcessing = <T extends Record<string, unknown>>(
    Component: ComponentType<T>
): ComponentType<T & WithServerSideProcessingProps> => {
    const WrappedComponent: FunctionComponent<T> = (props) => <Component {...props} isServer />;
    WrappedComponent.displayName = `withServerSideProcessing(${Component.displayName})`;
    return WrappedComponent;
};
