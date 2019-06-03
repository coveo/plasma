import * as loremIpsum from 'lorem-ipsum';
import * as React from 'react';
import * as _ from 'underscore';
import {Loading} from '../../loading/Loading';
import {TableCollapsibleRow} from '../TableCollapsibleRow';
import {TableHeadingRow} from '../TableHeadingRow';

export interface TableRowExamplesState {
    first: boolean;
    second: boolean;
    third: boolean;
    isLoading: boolean;
}

export class TableRowExamples extends React.Component<{}, TableRowExamplesState> {
    private timeout: number;
    private firstRowCols: JSX.Element[] = [
        <td key='anything'>Anything</td>,
        <td key='something'>Something</td>,
        <td key='everything'>Everything</td>,
    ];
    private thirdContent: JSX.Element[];

    constructor(props: {}, state: TableRowExamplesState) {
        super(props, state);

        this.state = {
            isLoading: true,
            first: false,
            second: true,
            third: false,
        };
        this.thirdContent = _.map(_.range(5), (i) => <p key={i} className='pb2'>{loremIpsum({count: 1, units: 'paragraphs'})}</p>);
    }

    render() {
        return (
            <div className='mt2'>
                <div className='form-group'>
                    <label className='form-control-label'>Table rows without and with collapsible rows</label>
                    <table className='table mod-collapsible-rows'>
                        <tbody className='selected'>
                            <TableHeadingRow isCollapsible={true} opened={this.state.first} onClick={() => this.setState({first: !this.state.first})}>
                                {this.firstRowCols}
                            </TableHeadingRow>
                            <TableCollapsibleRow id='first-row' nbColumns={4} opened={this.state.first}>
                                <div className='p2'>This is the collapsible row!</div>
                            </TableCollapsibleRow>
                        </tbody>
                        <tbody className='selected'>
                            <TableHeadingRow isCollapsible={false} tableHasCollapsibleRow>
                                {this.firstRowCols}
                            </TableHeadingRow>
                        </tbody>
                        <tbody className='selected'>
                            <TableHeadingRow isCollapsible={true} opened={this.state.second} onClick={() => this.setState({second: !this.state.second})}>
                                {this.firstRowCols}
                            </TableHeadingRow>
                            <TableCollapsibleRow id='second-row' nbColumns={4} opened={this.state.second} >
                                <div className='p2'>This is the collapsible row!</div>
                            </TableCollapsibleRow>
                        </tbody>
                        <tbody className='selected'>
                            <TableHeadingRow isCollapsible={true} opened={this.state.third} onClick={() => this.onOpenThirdRow()}>
                                {this.firstRowCols}
                            </TableHeadingRow>
                            <TableCollapsibleRow id='second-row' nbColumns={4} opened={this.state.third} >
                                <div className='p2 full-content'>{this.state.isLoading ? <Loading /> : this.thirdContent}</div>
                            </TableCollapsibleRow>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    private onOpenThirdRow() {
        clearTimeout(this.timeout);
        if (!this.state.third) {
            this.setState({isLoading: true});
            this.timeout = window.setTimeout(() => this.setState({isLoading: false}), 2000);
        }

        this.setState({third: !this.state.third});
    }
}
