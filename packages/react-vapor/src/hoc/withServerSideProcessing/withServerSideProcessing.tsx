import * as React from 'react';

export interface WithServerSideProcessingProps {
    isServer?: boolean;
}

export function withServerSideProcessing<T extends {}>(
    Component: React.ComponentType<T>
): React.ComponentType<T & WithServerSideProcessingProps> {
    const WrappedComponent: React.FunctionComponent<T> = (props) => <Component {...props} isServer />;
    WrappedComponent.displayName = `ServerSide${Component.displayName}`;
    return WrappedComponent;
}
