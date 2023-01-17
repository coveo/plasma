import {CrossSize24Px} from '@coveord/plasma-react-icons';
import classNames from 'classnames';
import {Component, ReactNode} from 'react';
import * as _ from 'underscore';

import {IClassName} from '../../utils/ClassNameUtils.js';
import {ILinkSvgProps} from '../linkSvg/LinkSvg.js';
import {Title} from '../title/Title.js';

export interface IModalHeaderOwnProps {
    /**
     * Id of the modal header
     */
    id?: string;
    /**
     * Title of the modal
     */
    title: ReactNode;
    /**
     * Additionnal CSS class for the header
     */
    classes?: IClassName;
    /**
     * Props of the link to documentation
     */
    docLink?: ILinkSvgProps;
    /**
     * id for the html element
     */
    htmlId?: string;
    children?: ReactNode;
}

export interface IModalHeaderStateProps {
    lastOpened: boolean;
}

export interface IModalHeaderDispatchProps {
    onClose: () => void;
}

export interface IModalHeaderProps
    extends IModalHeaderOwnProps,
        Partial<IModalHeaderStateProps>,
        Partial<IModalHeaderDispatchProps> {}

/**
 * @deprecated Use Mantine Modal instead: https://mantine.dev/core/modal/
 */
export class ModalHeader extends Component<IModalHeaderProps> {
    static defaultProps: Partial<IModalHeaderProps> = {
        lastOpened: true,
    };

    private canClose: boolean;

    componentDidMount() {
        this.canClose = this.props.lastOpened;
    }

    componentDidUpdate() {
        this.canClose = false;
        _.defer(() => (this.canClose = this.props.lastOpened));
    }

    close() {
        if (this.canClose) {
            this.props.onClose?.();
        }
    }

    render() {
        const classes = classNames('modal-header', this.props.classes);
        let closeComponent: JSX.Element = null;
        if (this.props.onClose) {
            closeComponent = (
                <button
                    className="small-close"
                    onClick={() => {
                        this.close();
                    }}
                >
                    <CrossSize24Px height={24} />
                </button>
            );
        }

        return (
            <header className={classes}>
                <div className="truncate">
                    <Title
                        text={this.props.title}
                        documentationLink={this.props.docLink}
                        classes={['regular']}
                        htmlId={this.props.htmlId}
                    />
                </div>
                {this.props.children}
                {closeComponent}
            </header>
        );
    }
}
