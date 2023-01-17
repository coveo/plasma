import {ComponentType, FunctionComponent, ReactNode} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import * as _ from 'underscore';

import {Loading} from '../../loading/Loading.js';
import {ISelectOwnProps} from '../SelectConnected.js';
import {SelectSelector} from '../SelectSelector.js';

export interface SelectWithInfiniteScrollProps {
    totalEntries: number;
    next: () => void;
}

/**
 * @deprecated Use Mantine Select instead: https://mantine.dev/core/select/
 */
export const selectWithInfiniteScroll = <P extends Omit<ISelectOwnProps, 'button'>>(
    Component: ComponentType<P>
): ComponentType<P & SelectWithInfiniteScrollProps> => {
    const mapStateToProps = createStructuredSelector({
        isOpened: SelectSelector.getSelectOpened,
    });

    const ComponentWithInfiniteScroll: FunctionComponent<
        React.PropsWithChildren<P & SelectWithInfiniteScrollProps & ReturnType<typeof mapStateToProps>>
    > = (props) => {
        const dataLength = _.size(props.items);
        const hasMore = props.totalEntries - dataLength > 0;

        const itemsWrapper = (items: ReactNode[]): ReactNode => (
            <InfiniteScroll
                dataLength={dataLength}
                hasMore={hasMore}
                loader={<Loading className="p2 full-content-x" />}
                next={props.next}
                scrollableTarget={`${props.id}-container`}
                style={{overflow: 'initial'}}
                hasChildren={items.length > 0 || props.isLoading}
            >
                {items}
            </InfiniteScroll>
        );

        return <Component {...(props as P)} wrapItems={props.isOpened ? itemsWrapper : undefined} />;
    };
    ComponentWithInfiniteScroll.displayName = `withInfiniteScroll(${Component.displayName})`;
    ComponentWithInfiniteScroll.defaultProps = {
        totalEntries: 0,
    } as Partial<P & SelectWithInfiniteScrollProps & ReturnType<typeof mapStateToProps>>;

    // @ts-ignore
    return connect(mapStateToProps)(ComponentWithInfiniteScroll);
};
