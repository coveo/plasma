import * as classNames from 'classnames';
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
            <div className={this.getContainerClasses()}>
                <div className={this.getClasses()}>
                    <div className='truncate mr2'>
                        {this.props.children}
                        <h4 className='mt1 text-dark-grey normal-white-space'>{this.props.description}</h4>
                    </div>
                    <div className='flex'>
                        {this.getActions()}
                    </div>
                </div>
                <TabsHeader tabs={this.props.tabs} />
            </div>
        );
    }

    private getContainerClasses(): string {
        return classNames('header-wrapper-container', {
            'header-wrapper-container-with-tabs': !!this.props.tabs,
            'mod-border-bottom': !!this.props.hasBorderBottom && !this.props.tabs,
        });
    }

    private getClasses(): string {
        return classNames(
            'flex',
            'flex-center',
            'space-between',
            'header-height',
            'pt1',
            {
                'pb2': !!this.props.tabs,
                'pb1': !this.props.tabs,
                'mod-header-padding': this.props.hasPadding,
            },
            this.props.classes,
        );
    }

    private getActions(): JSX.Element[] {
        return this.props.actions
            ? _.map(this.props.actions, (action: IContentProps, index: number) => <Content key={index} {...action} />)
            : null;
    }
}
