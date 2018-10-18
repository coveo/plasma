import * as React from 'react';
import * as _ from 'underscore';

import {DropdownSearchInfiniteScrollOptions} from './DropdownSearchInfiniteScrollOptions';

export interface IDropdownSearchAutoInfiniteScrollOptions {
    optionsPerPage: number;
    endMessage?: React.ReactNode;
    loader?: React.ReactNode;
}

export interface IDropdownSearchAutoInfiniteScrollProps
    extends IDropdownSearchAutoInfiniteScrollOptions {
    options: JSX.Element[];
    onMouseEnter: () => void;
    ulElementRefFunction: (menu: HTMLElement) => void;
}

interface IDropdownSearchAutoInfiniteScrollState {
    activeOptions: JSX.Element[];
}

export class DropdownSearchAutoInfiniteScroll extends React.Component<IDropdownSearchAutoInfiniteScrollProps, IDropdownSearchAutoInfiniteScrollState> {
    constructor(props: IDropdownSearchAutoInfiniteScrollProps, state: IDropdownSearchAutoInfiniteScrollState) {
        super(props, state);
        this.state = {
            activeOptions: props.options.slice(0, props.optionsPerPage),
        };
    }

    componentWillUpdate(nextProps: IDropdownSearchAutoInfiniteScrollProps) {
        if (!_.isEqual(this.props.options, nextProps.options)) {
            this.setState({activeOptions: nextProps.options.slice(0, this.props.optionsPerPage)});
        }
    }

    private get hasMoreOptions() {
        return this.state.activeOptions.length < this.props.options.length;
    }

    private get showEndMessage() {
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
