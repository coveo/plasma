
import * as React from 'react';
import { Label } from '../../input/Label';
import { Radio } from '../../radio/Radio';
import {IResult} from '../responseParser/ResponseParser';

export interface IResultItemProps {
    result: IResult;
    selectedResult: string;
}

export class ResultItem extends React.Component<IResultItemProps> {

    private isSelected() {
        return this.props.selectedResult === this.props.result.uniqueID;
    }

    render() {
        return (
            <div>
                {/* // TODO : review the checked attribute it's slow... */}
                {/* // TODO : add css  */}
                {/* // TODO : props to put a Radio or not  */}
                {/* // TODO : la Radio brise le concept de la listem tout serait plus clean sans... à voir si on l'a veut ou non  */}
                {/* Il faut ajouter un prop dans 2 class pour afficher la radio ou non
                    Avec cette logique c'est lent sélectionner ... */}
                <div className='form-group'>
                    <Radio name='singleoption' value='blue' checked={this.isSelected()}>
                        <Label>
                            <div>{this.props.result.title}</div>
                            <div>{this.props.result.uri}</div>
                        </Label>
                    </Radio>
                </div>
            </div>
        );
    }
}
