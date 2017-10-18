import * as React from 'react';
import * as _ from 'underscore';
import { IBaseActionOptions } from '../actions/Action';
import { Button } from '../button/Button';
import { Svg } from '../svg/Svg';

export interface IBlankSlateProps extends React.ClassAttributes<BlankSlate> {
  title?: string;
  description?: string;
  buttons?: IBaseActionOptions[];
  withModal?: boolean;
  classes?: string[];
  svgName?: string;
  svgClass?: string;
  descriptionSvgName?: string;
  descriptionSvgClass?: string;
}

export class BlankSlate extends React.Component<IBlankSlateProps, void> {
  static defaultProps: Partial<IBlankSlateProps> = {
    title: '',
    buttons: [],
    withModal: false,
    classes: [],
    svgClass: '',
    descriptionSvgClass: '',
  };

  private getSvgTemplate(): JSX.Element {
    return this.props.svgName
      ? <Svg svgName={this.props.svgName} svgClass={`icon mod-4x ${this.props.svgClass}`} />
      : null;
  }

  private getDescriptionSvg(): JSX.Element {
    return this.props.descriptionSvgName
      ? <Svg svgName={this.props.descriptionSvgName} svgClass={`icon mod-2x mr1 ${this.props.descriptionSvgClass}`} />
      : null;
  }

  private getDescriptionTemplate(): JSX.Element {
    return this.props.description
      ? (<p>
        {this.getDescriptionSvg()}
        {this.props.description}
      </p>)
      : null;
  }

  private getButtonsTemplate(): JSX.Element[] {
    return _.map(this.props.buttons, (buttonProps: IBaseActionOptions) => <Button key={buttonProps.name} {...buttonProps} />);
  }

  render() {
    const marginClasses: string = this.props.withModal ? 'mt2 mb2' : 'm2';
    const blankSlateClasses: string = `blankslate ${marginClasses} ${this.props.classes.join(' ')}`;
    const modalClasses: string = this.props.withModal ? 'mod-header-padding' : '';

    return (
      <div className={modalClasses}>
        <div className={blankSlateClasses}>
          {this.getSvgTemplate()}
          <h1>{this.props.title}</h1>
          {this.getDescriptionTemplate()}
          {this.getButtonsTemplate()}
        </div>
      </div>
    );
  }
}
