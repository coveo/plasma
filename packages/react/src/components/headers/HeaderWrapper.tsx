import classNames from 'classnames';
import {ReactNode, Component} from 'react';
import * as _ from 'underscore';

import {Content, IContentProps} from '../content/Content.js';
import {ITabsHeaderProps, TabsHeader} from './TabsHeader.js';

export interface IHeaderWrapperProps extends ITabsHeaderProps {
    /**
     * Text that appears above the tabs in the header wrapper
     */
    description?: string | ReactNode;
    /**
     * Action buttons displayed in the right portion of the header
     */
    actions?: IContentProps[];
    /**
     * Additional CSS classes to set on the HeaderWrapper element
     */
    classes?: string[];
    /**
     * Whether the header displays a border on the bottom
     *
     * @default true
     */
    hasBorderBottom?: boolean;
    /**
     * Whether the header has padding
     *
     * @default true
     */
    hasPadding?: boolean;
    children?: ReactNode;
}

/**
 * @deprecated Use Mantine instead
 */
export class HeaderWrapper extends Component<IHeaderWrapperProps> {
    static defaultProps: Partial<IHeaderWrapperProps> = {
        hasBorderBottom: true,
        hasPadding: true,
    };

    render() {
        return (
            <div className={this.containerClasses}>
                <div className={this.classes}>
                    <div className="truncate mr2">
                        {this.props.children}
                        <h4 className="admin-description h4-book-subdued normal-white-space">
                            {this.props.description}
                        </h4>
                    </div>
                    <div className="action-bar">{this.actions}</div>
                </div>
                <TabsHeader tabs={this.props.tabs} />
            </div>
        );
    }

    private get containerClasses(): string {
        return classNames('header-wrapper-container', {
            'header-wrapper-container-with-tabs': !!this.props.tabs,
        });
    }

    private get classes(): string {
        return classNames(
            'flex flex-center space-between panel-header',
            {
                'mod-no-border-bottom': !this.props.hasBorderBottom || this.props.tabs,
                px0: !this.props.hasPadding,
            },
            this.props.classes
        );
    }

    private get actions(): JSX.Element[] {
        return this.props.actions
            ? _.map(this.props.actions, (action: IContentProps, index: number) => <Content key={index} {...action} />)
            : null;
    }
}
