import classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';
import {Content, IContentProps} from '../content/Content';
import {ITabsHeaderProps, TabsHeader} from './TabsHeader';

export interface IHeaderWrapperProps extends ITabsHeaderProps {
    description?: string;
    actions?: IContentProps[];
    classes?: string[];
    hasBorderBottom?: boolean;
    hasPadding?: boolean;
}

export class HeaderWrapper extends React.Component<IHeaderWrapperProps, {}> {
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
                        <h4 className="admin-description text-dark-grey normal-white-space">
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
            'flex flex-center space-between header-height panel-header',
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
