import * as React from 'react';

export interface WithServerSideProcessingProps {
    isServer?: boolean;
}

export const withServerSideProcessing = <T extends Record<string, unknown>>(
    Component: React.ComponentType<T>
): React.ComponentType<T & WithServerSideProcessingProps> => {
    const WrappedComponent: React.FunctionComponent<T> = (props) => <Component {...props} isServer />;
    WrappedComponent.displayName = `withServerSideProcessing(${Component.displayName})`;
    return WrappedComponent;
};
