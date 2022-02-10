import classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

import {IBaseActionOptions} from '../actions/Action';
import {Button} from '../button/Button';
import {OptionalSvgChildProps, SvgChild} from '../svg/SvgChild';

export interface IBlankSlateProps extends React.ClassAttributes<BlankSlate>, Omit<OptionalSvgChildProps, 'title'> {
    title?: React.ReactNode;
    description?: React.ReactNode;
    additionalSection?: React.ReactNode;
    buttons?: IBaseActionOptions[];
    withModal?: boolean;
    classes?: string[];
    containerClasses?: string[];
    descriptionClassName?: string;
    buttonClasses?: string[];
}

export class BlankSlate extends React.Component<IBlankSlateProps> {
    static defaultProps: Partial<IBlankSlateProps> = {
        title: null,
        description: null,
        additionalSection: null,
        buttons: [],
        withModal: false,
        classes: [],
        containerClasses: [],
        descriptionClassName: '',
    };

    private getSvgTemplate() {
        return (
            <SvgChild
                svgName={this.props.svgName}
                svgClass={`icon mod-4x ${this.props.svgClass}`}
                svgChild={this.props.svgChild}
            />
        );
    }

    private getDescriptionTemplate(): JSX.Element {
        return this.props.description ? (
            <p className={this.props.descriptionClassName}>{this.props.description}</p>
        ) : null;
    }

    private getButtonsTemplate(): JSX.Element[] {
        return _.map(this.props.buttons, (buttonProps: IBaseActionOptions) => (
            <Button key={buttonProps.name} {...buttonProps} classes={this.props.buttonClasses} />
        ));
    }

    render() {
        const marginClasses: string = this.props.withModal ? 'mt2 mb2' : 'm2';
        const blankSlateClasses: string = `blankslate ${marginClasses} ${this.props.classes.join(' ')}`;
        const modalClasses: string = classNames(
            {'mod-header-padding': this.props.withModal},
            this.props.containerClasses
        );

        return (
            <div className={modalClasses}>
                <div className={blankSlateClasses}>
                    {this.getSvgTemplate()}
                    <h4>{this.props.title}</h4>
                    {this.getDescriptionTemplate()}
                    {this.getButtonsTemplate()}
                    {this.props.additionalSection}
                </div>
            </div>
        );
    }
}
