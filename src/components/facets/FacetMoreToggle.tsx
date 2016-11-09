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

export interface IFacetMoreToggleProps extends IFacetMoreToggleOwnProps, IFacetMoreToggleStateProps, IFacetMoreToggleDispatchProps { }

export class FacetMoreToggle extends React.Component<IFacetMoreToggleProps, any> {

  handleOnChange = () => {
    if (this.props.onToggleMore) {
      this.props.onToggleMore(this.props.facet);
    }
  };

  render() {
    let isOpened = this.props.isOpened ? this.props.isOpened : false;
    let moreClasses = 'facet-value facet-selectable facet-more' + (isOpened ? ' hidden' : '');
    let moreLabel = this.props.moreLabel || 'More';

    return (
      <li className={moreClasses} onClick={(e) => e.stopPropagation()}>
        <label className='facet-value-label'>
          <div className='facet-value-label-wrapper'>
            <input type='checkbox' className='facet-checkbox-input' onChange={() => this.handleOnChange()} />
            <div className='facet-value-checkbox'>
              <span></span>
            </div>
            <span>{moreLabel}</span>
          </div>
        </label>
      </li>
    );
  }
}
