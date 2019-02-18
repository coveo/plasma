import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

import {IClassName} from '../../utils/ClassNameUtils';
import {callIfDefined} from '../../utils/FalsyValuesUtils';
import {ILinkSvgProps} from '../svg/LinkSvg';
import {Svg} from '../svg/Svg';
import {Title} from '../title/Title';

export interface IModalHeaderOwnProps {
    id?: string;
    title: string;
    classes?: IClassName;
    docLink?: ILinkSvgProps;
}

export interface IModalHeaderStateProps {
    lastOpened: boolean;
}

export interface IModalHeaderDispatchProps {
    onClose: () => void;
}

export interface IModalHeaderProps extends IModalHeaderOwnProps, Partial<IModalHeaderStateProps>, Partial<IModalHeaderDispatchProps> {}

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
        if (this.canClose) {
            callIfDefined(this.props.onClose);
        }
    }

    render() {
        const classes = classNames('modal-header', this.props.classes);
        const docLinkProps: ILinkSvgProps = this.props.docLink
            ? {
                svg: {
                    svgName: 'help',
                    svgClass: 'fill-orange icon mod-20',
                },
                ...this.props.docLink,
            }
            : null;

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
                <div className='truncate'>
                    <Title
                        text={this.props.title}
                        documentationLink={docLinkProps}
                        classes={['regular']}
                    />
                </div>
                {this.props.children}
                {closeComponent}
            </header>
        );
    }
}
