import { Svg } from '../svg/Svg';
import { IReduxStatePossibleProps } from '../../utils/ReduxUtils';
import { FacetMoreToggleConnected } from './FacetMoreToggleConnected';
import { FacetMoreToggle } from './FacetMoreToggle';
import { FacetMoreRowsConnected } from './FacetMoreRowsConnected';
import { FacetMoreRows } from './FacetMoreRows';
import { FacetRow } from './FacetRow';
import * as React from 'react';
import * as _ from 'underscore';

export interface IFacet {
  name: string;
  formattedName: string;
}

export interface IFacetOwnProps extends React.ClassAttributes<Facet> {
  facet: IFacet;
  facetRows: IFacet[];
  toggleFacet: (facet: string, facetRow: IFacet) => void;
  clearFacet: (facet: string) => void;
}

export interface IFacetStateProps extends IReduxStatePossibleProps {
  isOpened?: boolean;
  selectedFacetRows?: IFacet[];
}

export interface IFacetDispatchProps {
  onRender?: (facet: string) => void;
  onDestroy?: (facet: string) => void;
  onToggleFacet?: (facet: string, facetRow: IFacet) => void;
  onClearFacet?: (facet: string) => void;
}

export interface IFacetProps extends IFacetOwnProps, IFacetStateProps, IFacetDispatchProps { }

export class Facet extends React.Component<IFacetProps, any> {

  private buildFacet = (facetRow: IFacet) => {
    this.props.toggleFacet(this.props.facet.name, facetRow);
    if (this.props.onToggleFacet) {
      this.props.onToggleFacet(this.props.facet.name, facetRow);
    }
  };

  private clearFacet = () => {
    this.props.clearFacet(this.props.facet.name);
    if (this.props.onClearFacet) {
      this.props.onClearFacet(this.props.facet.name);
    }
  };

  componentWillMount() {
    if (this.props.onRender) {
      this.props.onRender(this.props.facet.name);
    }
  }

  componentWillUnmount() {
    if (this.props.onDestroy) {
      this.props.onDestroy(this.props.facet.name);
    }
  }

  render() {
    let selectedRows: IFacet[] = this.props.selectedFacetRows || [];
    let removeSelectedClass: string = 'facet-header-eraser' + (selectedRows.length ? '' : ' hidden');
    let allRows: IFacet[] = _.union(selectedRows, this.props.facetRows);
    let facetRows: IFacet[] = _.uniq(allRows, false, item => item.name);
    let rows: JSX.Element[] = _.map(facetRows, (facetRow: IFacet) => {
      return (<FacetRow
        key={facetRow.name}
        facet={this.props.facet.name}
        facetRow={facetRow}
        onToggleFacet={this.buildFacet}
        isChecked={_.contains(_.pluck(selectedRows, 'name'), facetRow.name)}
        />);
    });
    let moreRowsToggle: JSX.Element = rows.length > 5 ?
      (this.props.withReduxState ? <FacetMoreToggleConnected facet={this.props.facet.name} /> : <FacetMoreToggle facet={this.props.facet.name} />) :
      null;
    let moreRows: JSX.Element = moreRowsToggle ?
      (this.props.withReduxState ? <FacetMoreRowsConnected facet={this.props.facet.name} facetRows={rows.splice(5)} /> : <FacetMoreRows facet={this.props.facet.name} facetRows={rows.splice(5)} />) :
      null;
    let facetClasses: string = this.props.facet.name + ' facet' + (this.props.isOpened ? ' facet-opened' : '');

    return (
      <div className={facetClasses}>
        <div className='facet-header'>
          <div
            className={removeSelectedClass}
            onClick={() => this.clearFacet()}>
            <Svg svgName='clear' className='icon fill-medium-grey' />
          </div>
          <div className='facet-header-title bold text-medium-blue'>{this.props.facet.formattedName}</div>
        </div>
        <ul className='facet-values'>
          {rows}
          {moreRowsToggle}
        </ul>
        {moreRows}
      </div>
    );
  }
}
