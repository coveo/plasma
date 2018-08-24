import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';
import {IClassName} from '../../utils/ClassNameUtils';
import {TooltipPlacement} from '../../utils/TooltipUtils';
import {Svg} from '../svg/Svg';
import {Tooltip} from '../tooltip/Tooltip';

export interface IModalHeaderOwnProps {
    id?: string;
    title: string;
    classes?: IClassName;
    docLink?: {
        url: string;
        tooltip: string;
    };
}

export interface IModalHeaderStateProps {
    lastOpened?: boolean;
}

export interface IModalHeaderDispatchProps {
    onClose?: () => void;
}

export interface IModalHeaderProps extends IModalHeaderOwnProps, IModalHeaderStateProps, IModalHeaderDispatchProps {}

export class ModalHeader extends React.Component<IModalHeaderProps, {}> {
    static defaultProps: Partial<IModalHeaderProps> = {
        lastOpened: true,
    };

    private canClose: boolean;

    componentDidMount() {
        this.canClose = this.props.lastOpened;
    }

    componentDidUpdate() {
        this.canClose = false;
        _.defer(() => this.canClose = this.props.lastOpened);
    }

    close() {
        if (this.canClose && this.props.onClose) {
            this.props.onClose();
        }
    }

    render() {
        const classes = classNames('modal-header', this.props.classes);

        let closeComponent: JSX.Element = null;
        if (this.props.onClose) {
            closeComponent = (
                <span className='small-close' onClick={() => {this.close();}}>
                    <Svg svgName='close' className='icon mod-lg fill-pure-white' />
                </span>
            );
        }

        return (
            <header className={classes}>
                <div>
                    {this.getTitle()}
                    {this.getDocLink()}
                    {this.props.children}
                </div>
                {closeComponent}
            </header>
        );
    }

    private getTitle(): JSX.Element {
        const titleClass: string = classNames({
            inline: !!this.props.children || !!this.props.docLink,
        });
        return <h1 className={titleClass}>{this.props.title}</h1>;
    }

    private getDocLink(): JSX.Element {
        return this.props.docLink
            ? (
                <Tooltip
                    title={this.props.docLink.tooltip}
                    placement={TooltipPlacement.Bottom}
                >
                    <a
                        href={this.props.docLink.url}
                        target='_blank'
                        className='inline-doc-link ml1'
                    >
                        <Svg svgName='help' className='mod-lg icon fill-orange' />
                    </a>
                </Tooltip>
            )
            : null;
    }
}
