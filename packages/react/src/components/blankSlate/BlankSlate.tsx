import {Icon} from '@coveord/plasma-react-icons';
import classNames from 'classnames';
import {Component, ReactNode} from 'react';
import * as _ from 'underscore';

import {IBaseActionOptions} from '../actions/Action.js';
import {Button} from '../button/Button.js';

export interface IBlankSlateProps {
    /**
     * Title of the blank slate
     */
    title?: ReactNode;
    /**
     * An icon to display above the title
     */
    icon?: Icon;
    /**
     * Description template to add to the blank slate
     */
    description?: ReactNode;
    /**
     * Additionnal child to add to the blank slate
     */
    additionalSection?: ReactNode;
    /**
     * Array of buttons to add to the blank slate
     */
    buttons?: IBaseActionOptions[];
    /**
     * Whether the blank slate should have the css style to fit a modal
     *
     * @default false
     *
     */
    withModal?: boolean;
    /**
     * Additional css classes that the blank slate should have
     */
    classes?: string[];
    /**
     * Additional css classes the container should have
     */
    containerClasses?: string[];
    /**
     * Additional css classes the description should have
     */
    descriptionClassName?: string;
    /**
     * Additional css classes the buttons should have
     */
    buttonClasses?: string[];
    children?: ReactNode;
}

/**
 * @deprecated Use Mantine instead
 */
export class BlankSlate extends Component<IBlankSlateProps> {
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
        return this.props.icon ? <this.props.icon height={64} /> : null;
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
