
import * as React from 'react';
import * as classNames from 'classnames';
import * as styles from './ResultItem.scss';
import {Radio} from '../../radio/Radio';
import {IResult} from '../responseParser/ResponseParser';
import {Label} from '../../input/Label';
import {Field} from '../buildFromResult/BuildFromResult';

export interface IResultItemProps {
    result: IResult;
    selectedResult: string;
    isSelectable?: boolean;
}

export class ResultItem extends React.Component<IResultItemProps> {
    static defaultProps: IResultItemProps = {
        result: null,
        isSelectable: false,
        selectedResult: '',
    };

    private get isSelected() {
        return this.props.selectedResult === this.props.result.uniqueID;
    }

    private getRadio(): JSX.Element {
        return (
            <div>
                <Radio checked={this.isSelected}>
                    <Label classes={[styles.radioLabelContainer]} />
                </Radio>
            </div>
        );
    }

    private getResultItem(): JSX.Element {
        return (
            <div className={'mt2 mb2'}>
                <div className={'h2 text-dark-blue mb1'}>{this.props.result.title}</div>
                <div className={'text-medium-blue mb1'}>
                    <span className={'h3'}>URI</span>
                    <span className={'ml1'}>{this.props.result.uri}</span>
                </div>
                {this.getDefinedFieldExpressions()}
            </div>
        );
    }

    private getDefinedFieldExpressions(): JSX.Element {
        return (
            <div className={'text-medium-blue'}>
                {this.props.result.objectType ?  <span className={'mr1'}><span className={'text-darker-blue semibold'}>{Field.ObjectType}=</span>{this.props.result.objectType}</span> : null}
                {this.props.result.fileType ?  <span className={'mr1'}><span className={'text-darker-blue semibold'}>{Field.FileType}=</span>{this.props.result.fileType}</span> : null}
                {this.props.result.connectorType ?  <span className={'mr1'}><span className={'text-darker-blue semibold'}>{Field.ConnectorType}=</span>{this.props.result.connectorType}</span> : null}
                {this.props.result.sourceType ?  <span className={'mr1'}><span className={'text-darker-blue semibold'}>{Field.SourceType}=</span>{this.props.result.sourceType}</span> : null}
            </div>
        );
    }

    render() {
        const containerClasses: string = classNames(
            'material-card',
            styles.resultItemContainer,
            {
                'with-hover': this.props.isSelectable,
                'with-active': this.props.isSelectable,
                'border': this.isSelected,
            }
        );

        const contentClasses: string = classNames(
            'inline-flex',
            styles.resultItemContent
        );

        const borderIfSelected: string = this.isSelected ? ` ${styles.resultItemBorder}` : '';

        return (
            <div className={containerClasses + borderIfSelected}>
                <span className={contentClasses}>
                    {this.props.isSelectable ? this.getRadio() : null}
                    {this.getResultItem()}
                </span>
            </div>
        );
    }
}
