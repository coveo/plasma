import * as React from 'react';
import {Checkbox} from '../checkbox/Checkbox';
import {Label} from '../input/Label';
import {Tooltip} from '../tooltip/Tooltip';
import {IFacet} from './Facet';

export interface IFacetRowProps extends React.ClassAttributes<FacetRow> {
    facetRow: IFacet;
    facet: string;
    onToggleFacet: (facetRow: IFacet) => void;
    isChecked: boolean;
}

export const MAX_NAME_LENGTH: number = 25;

export class FacetRow extends React.Component<IFacetRowProps, any> {

    render() {
        const label: JSX.Element = this.props.facetRow.formattedName.length > MAX_NAME_LENGTH
            ? <Tooltip title={this.props.facetRow.formattedName} placement='top'>{this.props.facetRow.formattedName}</Tooltip>
            : <span>{this.props.facetRow.formattedName}</span>;

        return (
            <li className='facet-value facet-selectable'>
                <Checkbox
                    name={this.props.facetRow.name}
                    classes={['facet-value-label']}
                    checked={this.props.isChecked}
                    onClick={() => this.props.onToggleFacet(this.props.facetRow)}>
                    <Label classes={['label']}>{label}</Label>
                </Checkbox>
            </li>
        );
    }
}
