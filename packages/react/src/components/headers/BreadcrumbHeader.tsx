import {Component, ReactNode} from 'react';
import * as _ from 'underscore';

import {Breadcrumb, IBreadcrumbProps} from '../breadcrumbs/Breadcrumb.js';
import {HeaderWrapper, IHeaderWrapperProps} from './HeaderWrapper.js';

export interface IBreadcrumbHeaderProps extends IHeaderWrapperProps {
    /**
     * Allows to configure the breadcrumb shown in the header
     */
    breadcrumb: IBreadcrumbProps;
    children?: ReactNode;
}

/**
 * @deprecated Use Mantine instead
 */
export class BreadcrumbHeader extends Component<IBreadcrumbHeaderProps> {
    static defaultProps: Partial<IBreadcrumbHeaderProps> = _.extend(
        {
            breadcrumb: {
                title: {
                    text: '',
                },
            },
            classes: [],
        },
        HeaderWrapper.defaultProps
    );

    render() {
        return (
            <HeaderWrapper {..._.omit(this.props, 'breadcrumb')}>
                <Breadcrumb {...this.props.breadcrumb}>{this.props.children}</Breadcrumb>
            </HeaderWrapper>
        );
    }
}
