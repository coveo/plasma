import * as classNames from 'classnames';
import * as React from 'react';
import {JSXRenderable} from '../../utils/JSXUtils';
import {TooltipPlacement} from '../../utils/TooltipUtils';
import {Svg} from '../svg/Svg';
import {Tooltip} from '../tooltip/Tooltip';

export interface ILabeledValueProps {
    label: string;
    value: JSXRenderable;
    fullRow?: true;
    information?: string;
    informationPlacement?: TooltipPlacement;
}

export const LabeledValue = (props: ILabeledValueProps) => {
    const informationSVG = !!props.information
        ? (
            <Tooltip
                title={props.information}
                placement={props.informationPlacement || TooltipPlacement.Top}>
                <Svg svgName='info-14' svgClass='icon fill-medium-grey' />
            </Tooltip>
        )
        : null;

    return (
        <div className={classNames('box padded', {'full-content-x': !!props.fullRow})}>
            <header className='label'>
                <span className={classNames({mr1: !!props.information})}>
                    {props.label}
                </span>
                {informationSVG}
            </header>
            <section className='value'>{props.value}</section>
        </div>
    );
};
