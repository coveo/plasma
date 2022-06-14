import classNames from 'classnames';
import {ReactNode, Component} from 'react';
import * as _ from 'underscore';

import {IClassName} from '../../utils/ClassNameUtils';
import {ILinkSvgProps} from '../svg/LinkSvg';

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
        const docLinkProps: ILinkSvgProps = this.props.docLink
            ? {
                  svg: {
                      svgName: 'help',
                      svgClass: 'documentation-link icon mod-20',
                      className: 'flex',
                  },
                  ...this.props.docLink,
              }
            : null;

        let closeComponent: JSX.Element = null;
        if (this.props.onClose) {
            closeComponent = (
                <span
                    className="small-close"
                    onClick={() => {
                        this.close();
                    }}
                >
                    <Svg svgName="close" className="icon mod-lg" />
                </span>
            );
        }

        return (
            <header className={classes}>
                <div className="truncate">
                    <Title
                        text={this.props.title}
                        documentationLink={docLinkProps}
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
