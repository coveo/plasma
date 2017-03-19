import * as React from 'react';
import { Svg } from '../svg/Svg';

export interface IModalOwnProps {
  id: string;
  title: string;
  headerClasses?: string[];
  classes?: string[];
}

export interface IModalStateProps {
  isOpened?: boolean;
}

export interface IModalDispatchProps {
  onClose?: (id: string) => void;
  onDestroy?: (id: string) => void;
  onRender?: (id: string) => void;
}

export interface IModalProps extends IModalOwnProps, IModalStateProps, IModalDispatchProps { }

export class Modal extends React.Component<IModalProps, any> {

  componentWillMount() {
    if (this.props.onRender) {
      this.props.onRender(this.props.id);
    }
  }

  componentWillUnmount() {
    if (this.props.onDestroy) {
      this.props.onDestroy(this.props.id);
    }
  }

  close() {
    if (this.props.onClose) {
      this.props.onClose(this.props.id);
    }
  }

  render() {
    let headerClasses = ['modal-header'].concat(this.props.headerClasses);
    let classes = ['modal-container'].concat(this.props.classes);
    if (this.props.isOpened) {
      classes.push('opened');
    }

    return (
      <div className={classes.join(' ')}>
        <div className='modal-content'>
          <header className={headerClasses.join(' ')}>
            <h1>{this.props.title}</h1>
            <span className='small-close' onClick={() => { this.close(); }}>
              <Svg svgName='close' className='icon mod-lg fill-pure-white'></Svg>
            </span>
          </header>
          {this.props.children}
        </div>
      </div>
    );
  }
}
