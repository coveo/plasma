
import * as React from 'react';
import {Label} from '../../input/Label';
import {Radio} from '../../radio/Radio';
import {IResult} from '../responseParser/ResponseParser';

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

    private isSelected() {
        return this.props.selectedResult === this.props.result.uniqueID;
    }

    private getSelectableResultItem(): JSX.Element {
        return (
            <Radio name='singleoption' value='blue' checked={this.isSelected()}>
                {this.getResultItem()}
            </Radio>
        );
    }
    private getResultItem(): JSX.Element {
        return (
            <Label>
                <div>{this.props.result.title}</div>
                <div>{this.props.result.uri}</div>
            </Label>
        );
    }

    render() {
        return (
            <div>
                {/* // TODO : review the checked attribute... */}
                {/* // TODO : add css  */}
                {/* // TODO : props to put a Radio or not  */}
                {/* // TODO : la Radio brise le concept de la listem tout serait plus clean sans... à voir si on l'a veut ou non  */}
                {/* Il faut ajouter un prop dans 2 class pour afficher la radio ou non
                    Avec cette logique c'est lent sélectionner ... */}
                <div className='form-group'>
                    {this.props.isSelectable ? this.getSelectableResultItem(): this.getResultItem()}
                </div>
            </div>
        );
    }
}
