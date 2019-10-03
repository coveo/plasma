import * as classNames from 'classnames';
import * as React from 'react';
import {TooltipPlacement} from '../../utils/TooltipUtils';
import {Svg} from '../svg/Svg';
import {Tooltip} from '../tooltip/Tooltip';
import {InputDescription} from './InputDescription';

export interface ILabeledInputProps {
    label?: string;
    description?: React.ReactNode;
    className?: string;
    information?: string;
    informationPlacement?: TooltipPlacement;
}

export const LabeledInput: React.FunctionComponent<ILabeledInputProps> = ({
    label,
    children,
    description,
    className,
    information,
    informationPlacement,
}) => {
    const informationSVG = !!information ? (
        <Tooltip title={information} placement={informationPlacement || TooltipPlacement.Top}>
            <Svg svgName="info-14" svgClass="icon fill-medium-grey" />
        </Tooltip>
    ) : null;

    return (
        <>
            <header className={classNames('label', 'text-light-blue', className)}>
                <span>{label}</span>
                {informationSVG}
            </header>
            {children}
            {!!description && <InputDescription>{description}</InputDescription>}
        </>
    );
};
