import * as React from 'react';

export interface IFacetMoreToggleOwnProps extends React.ClassAttributes<FacetMoreToggle> {
    facet: string;
    moreLabel?: string;
}

export interface IFacetMoreToggleStateProps {
    isOpened?: boolean;
}

export interface IFacetMoreToggleDispatchProps {
    onToggleMore?: (facet: string) => void;
}

export interface IFacetMoreToggleProps
    extends IFacetMoreToggleOwnProps,
        IFacetMoreToggleStateProps,
        IFacetMoreToggleDispatchProps {}

export const FACET_TOGGLE_MORE_LABEL: string = 'More';

export class FacetMoreToggle extends React.Component<IFacetMoreToggleProps, any> {
    private handleOnChange = () => {
        if (this.props.onToggleMore) {
            this.props.onToggleMore(this.props.facet);
        }
    };

    render() {
        const isOpened: boolean = this.props.isOpened ? this.props.isOpened : false;
        const moreClasses: string = 'facet-value facet-selectable facet-more' + (isOpened ? ' hidden' : '');
        const moreLabel: string = this.props.moreLabel || FACET_TOGGLE_MORE_LABEL;

        return (
            <li className={moreClasses} onClick={(e) => e.nativeEvent.stopImmediatePropagation()}>
                <label className="coveo-checkbox-label facet-value-label">
                    <input
                        type="checkbox"
                        className="coveo-checkbox facet-checkbox-input"
                        onChange={() => this.handleOnChange()}
                    />
                    <span className="facet-more-button"></span>
                    <span className="label">{moreLabel}</span>
                </label>
            </li>
        );
    }
}
