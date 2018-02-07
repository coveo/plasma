import * as React from 'react';
import { Breadcrumb, IBreadcrumbProps } from '../breadcrumbs/Breadcrumb';
import { HeaderWrapper, IHeaderWrapperProps } from './HeaderWrapper';

export interface IBreadcrumbHeaderProps extends IHeaderWrapperProps, React.ClassAttributes<React.Component<any, any>> {
  breadcrumb: IBreadcrumbProps;
}

export class BreadcrumbHeader extends React.Component<IBreadcrumbHeaderProps, {}> {

  static defaultProps: Partial<IBreadcrumbHeaderProps> = {
    breadcrumb: {
      title: {
        text: '',
      },
    },
    classes: [],
  };

  render() {

    return (
      <HeaderWrapper {...this.props}>
        <Breadcrumb {...this.props.breadcrumb} />
      </HeaderWrapper>
    );
  }
}
