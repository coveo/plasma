import * as React from 'react';

export interface WithInfiniteScrollProps {
    isServer?: boolean;
}

export function withInfiniteScroll<T extends {}>(
    Component: React.ComponentType<T>
): React.ComponentType<T & WithInfiniteScrollProps> {
    const WrappedComponent: React.FunctionComponent<T> = (props) => <Component {...props} />;
    WrappedComponent.displayName = `withInfiniteScroll(${Component.displayName})`;
    return WrappedComponent;
}
