import * as React from 'react';
import * as InfiniteScroll from 'react-infinite-scroll-component';
import * as _ from 'underscore';

export interface DropdownSearchInfiniteScrollOptionsProps {
    onMouseEnter: () => void;
    options: JSX.Element[];
    ulElementRefFunction: (menu: HTMLElement) => void;
    infiniteScroll: InfiniteScroll.InfiniteScrollProps;
}

export class DropdownSearchInfiniteScrollOptions extends React.Component<DropdownSearchInfiniteScrollOptionsProps, {}> {
    private id: string;

    componentWillMount() {
        this.id = _.uniqueId('infinite-dropdown');
    }

    render() {
        return (
            <div
                id={this.id}
                className='dropdown-menu'
                ref={(menu: HTMLElement) => this.props.ulElementRefFunction(menu)}
                onMouseEnter={() => this.props.onMouseEnter()}
            >
                <InfiniteScroll {...this.props.infiniteScroll} scrollableTarget={this.id} style={{...this.props.infiniteScroll.style, overflow: 'initial'}}>
                    {this.props.options}
                </InfiniteScroll>
            </div>
        );
    }
}
