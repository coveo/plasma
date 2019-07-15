import * as React from 'react';

export interface WithServerSideProcessingProps {
    isServer?: boolean;
}

export function withServerSideProcessing<T extends {}>(
    WrappedComponent: React.ComponentType<T>
): React.ComponentType<T & WithServerSideProcessingProps> {
    return (props: T) => <WrappedComponent {...props} isServer />;
}
