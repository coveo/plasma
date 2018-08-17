
import * as React from 'react';
import * as _ from 'underscore';
import {IContentProps} from '../../content/Content';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {ListBox} from '../../listBox/ListBox';
import {IResult} from '../responseParser/ResponseParser';
import {ResultItem} from '../resultItem/ResultItem';
import * as styles from './ResultList.scss';

export interface IResultListProps {
    results: IResult[];
    isSelectable?: boolean;
    onClick?: (result: IResult) => void;
}

export interface IResultListState {
    selectedResult?: string;
}

export class ResultList extends React.Component<IResultListProps, IResultListState> {
    static defaultProps: IResultListProps = {
        results: [],
        isSelectable: false,
    };

    constructor(props: IResultListProps) {
        super(props);
        this.state = {selectedResult: ''};
    }

    private onClick(resultItemBox: IItemBoxProps) {
        if (!this.props.isSelectable) {
            return;
        }

        const resultID: string = resultItemBox.value;
        this.setState({selectedResult: resultID});

        if (this.props.onClick) {
            const result: IResult = this.getResultByID(resultID);
            this.props.onClick(result);
        }
    }

    private getResultByID(value: string): IResult {
        return _.find(this.props.results, (result: IResult) => result.uniqueID === value);
    }

    private getResultsItems(): IItemBoxProps[] {
        const items: IItemBoxProps[] = [];
        _.forEach(this.props.results, (result: IResult) => {
            const resultItem: IContentProps = {
                content: () => <ResultItem result={result} isSelectable={this.props.isSelectable} selectedResult={this.state.selectedResult} />,
            };
            const getItemBox: IItemBoxProps = {value: result.uniqueID, displayValue: ' ', append: resultItem};
            items.push(getItemBox);
        });
        return items;
    }

    render() {
        const listBoxMaxHeight: string = this.props.isSelectable ? styles.resultListBoxSearch : styles.resultListBoxPreview;
        const resultListClasses: string[] = [styles.resultListBox, listBoxMaxHeight];

        return (
            <div>
                <ListBox
                    items={this.getResultsItems()}
                    selected={[this.state.selectedResult]}
                    onOptionClick={(resultItemBox: IItemBoxProps) => this.onClick(resultItemBox)}
                    classes={resultListClasses}
                />
            </div>
        );
    }
}
