import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import * as _ from 'underscore';

import {Loading} from '../../loading/Loading';
import {ISelectOwnProps} from '../SelectConnected';

export interface SelectWithInfiniteScrollProps {
    totalEntries: number;
    next: () => void;
}

export function selectWithInfiniteScroll<P extends Omit<ISelectOwnProps, 'button'>>(
    Component: React.ComponentType<P>
): React.ComponentType<P & SelectWithInfiniteScrollProps> {
    const ComponentWithInfiniteScroll: React.FunctionComponent<P & SelectWithInfiniteScrollProps> = (props) => {
        const dataLength = _.size(props.items);
        const hasMore = props.totalEntries - dataLength > 0;

        function itemsWrapper(items: React.ReactNode): React.ReactNode {
            return (
                <InfiniteScroll
                    dataLength={dataLength}
                    hasMore={hasMore}
                    loader={<Loading className="p2 full-content-x" />}
                    next={props.next}
                    scrollableTarget={props.id}
                    scrollThreshold={1}
                    style={{overflow: 'initial'}}
                >
                    {items}
                </InfiniteScroll>
            );
        }

        return <Component {...(props as P)} wrapItems={itemsWrapper} />;
    };
    ComponentWithInfiniteScroll.displayName = `withInfiniteScroll(${Component.displayName})`;
    ComponentWithInfiniteScroll.defaultProps = {
        totalEntries: 0,
    } as Partial<P & SelectWithInfiniteScrollProps>;
    return ComponentWithInfiniteScroll;
}
