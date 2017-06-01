import * as React from 'react';
import { Svg } from '../svg/Svg';

export interface IModalHeaderOwnProps {
  id?: string;
  title: string;
  classes?: string[];
}

export interface IModalHeaderStateProps { }

export interface IModalHeaderDispatchProps {
  onClose?: () => void;
}

export interface IModalHeaderProps extends IModalHeaderOwnProps, IModalHeaderStateProps, IModalHeaderDispatchProps { }

export class ModalHeader extends React.Component<IModalHeaderProps, any> {

  close() {
    this.props.onClose();
  }

  render() {
    let classes = ['modal-header'].concat(this.props.classes);

    let closeComponent: JSX.Element = null;
    if (this.props.onClose) {
      closeComponent = (
        <span className='small-close' onClick={() => { this.close(); }}>
          <Svg svgName='close' className='icon mod-lg fill-pure-white'></Svg>
        </span>
      );
    }

    return (
      <header className={classes.join(' ')}>
        <div>
          <h1 className='inline'>{this.props.title}</h1>
          {this.props.children}
        </div>
        {closeComponent}
      </header>
    );
  }
}
