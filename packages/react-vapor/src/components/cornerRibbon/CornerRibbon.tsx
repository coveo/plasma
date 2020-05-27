import classNames from 'classnames';
import * as React from 'react';

export const DEFAULT_CORNER_RIBBON_CLASSNAME = 'corner-ribbon';
export const DEFAULT_CORNER_RIBBON_CONTAINER_CLASSNAME = 'ribbon-container';

export enum PlacementY {
    Top = 'top',
    Bottom = 'bottom',
}

export enum PlacementX {
    Left = 'left',
    Right = 'right',
}

export interface ICornerRibbonProps {
    label?: string;
    placementY?: PlacementY;
    placementX?: PlacementX;
    extraClasses?: string[];
}

export class CornerRibbon extends React.Component<ICornerRibbonProps> {
    static defaultProps: Partial<ICornerRibbonProps> = {
        placementY: PlacementY.Top,
        placementX: PlacementX.Right,
        extraClasses: [],
    };

    render() {
        const className = classNames(
            DEFAULT_CORNER_RIBBON_CLASSNAME,
            this.props.placementY,
            this.props.placementX,
            this.props.extraClasses
        );
        return <div className={className}>{this.props.label}</div>;
    }
}
