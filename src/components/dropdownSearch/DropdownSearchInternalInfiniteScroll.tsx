import * as React from 'react';
import * as _ from 'underscore';

import {DropdownSearchInfiniteScrollOptions} from './DropdownSearchInfiniteScrollOptions';

export interface IDropdownSearchInternalInfiniteScrollOptions {
    optionsPerPage: number;
    endMessage?: React.ReactNode;
    loader?: React.ReactNode;
}

export interface IDropdownSearchInternalInfiniteScrollProps
    extends IDropdownSearchInternalInfiniteScrollOptions {
    options: JSX.Element[];
    onMouseEnter: () => void;
    ulElementRefFunction: (menu: HTMLElement) => void;
}

interface IDropdownSearchInternalInfiniteScrollState {
    activeOptions: JSX.Element[];
}

export class DropdownSearchInternalInfiniteScroll extends React.Component<IDropdownSearchInternalInfiniteScrollProps, IDropdownSearchInternalInfiniteScrollState> {
    constructor(props: IDropdownSearchInternalInfiniteScrollProps, state: IDropdownSearchInternalInfiniteScrollState) {
        super(props, state);
        this.state = {
            activeOptions: props.options.slice(0, props.optionsPerPage),
        };
    }

    componentWillUpdate(nextProps: IDropdownSearchInternalInfiniteScrollProps) {
        if (!_.isEqual(this.props.options, nextProps.options)) {
            this.setState({activeOptions: nextProps.options.slice(0, this.props.optionsPerPage)});
        }
    }

    private get hasMoreOptions() {
        return this.state.activeOptions.length < this.props.options.length;
    }

    private get showEndMessage() {
        // Don't show endMessage if infinite scrolling is unused
        if (this.props.endMessage && this.props.options.length > this.props.optionsPerPage) {
            return this.props.endMessage;
        }

        return null;
    }

    private next() {
        const index = this.state.activeOptions.length;
        const additionalOptions = this.props.options.slice(index, index + this.props.optionsPerPage);
        this.setState({activeOptions: this.state.activeOptions.concat(additionalOptions)});
    }

    render() {
        return (
            <DropdownSearchInfiniteScrollOptions
                infiniteScroll={{
                    next: () => this.next(),
                    dataLength: this.state.activeOptions.length,
                    hasMore: this.hasMoreOptions,
                    endMessage: this.showEndMessage,
                    loader: this.props.loader || null,
                }}
                onMouseEnter={this.props.onMouseEnter}
                ulElementRefFunction={this.props.ulElementRefFunction}
                options={this.state.activeOptions}
            />
        );
    }
}
