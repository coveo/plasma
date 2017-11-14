import * as React from 'react';
import { HeaderWrapper, IHeaderWrapperProps } from './HeaderWrapper';
import { Breadcrumb, IBreadcrumbProps } from '../breadcrumbs/Breadcrumb';

export interface IBasicHeaderProps extends IHeaderWrapperProps, React.ClassAttributes<React.Component<any, any>> {
  breadcrumb: IBreadcrumbProps;
}

export class BreadcrumbHeader extends React.Component<IBasicHeaderProps, {}> {

  static defaultProps: Partial<IBasicHeaderProps> = {
    breadcrumb: {
      title: {
        title: '',
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
