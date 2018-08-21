import * as React from 'react';
import * as _ from 'underscore';
import {Breadcrumb, IBreadcrumbProps} from '../breadcrumbs/Breadcrumb';
import {HeaderWrapper, IHeaderWrapperProps} from './HeaderWrapper';

export interface IBreadcrumbHeaderProps extends IHeaderWrapperProps {
    breadcrumb: IBreadcrumbProps;
}

export class BreadcrumbHeader extends React.Component<IBreadcrumbHeaderProps, {}> {

    static defaultProps: Partial<IBreadcrumbHeaderProps> = _.extend({
        breadcrumb: {
            title: {
                text: '',
            },
        },
        classes: [],
    }, HeaderWrapper.defaultProps);

    render() {

        return (
            <HeaderWrapper {..._.omit(this.props, 'breadcrumb')}>
                <Breadcrumb {...this.props.breadcrumb} />
            </HeaderWrapper>
        );
    }
}
