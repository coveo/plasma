import {Component, ReactNode} from 'react';
import * as _ from 'underscore';

import {ITitleProps, Title} from '../title/Title';
import {HeaderWrapper, IHeaderWrapperProps} from './HeaderWrapper';

export interface IBasicHeaderProps extends IHeaderWrapperProps {
    /**
     * The title of the header
     */
    title: ITitleProps;
    children?: ReactNode;
}

/**
 * @deprecated Use Mantine instead
 */
export class BasicHeader extends Component<IBasicHeaderProps> {
    static defaultProps: Partial<IBasicHeaderProps> = _.extend(
        {
            title: {
                text: '',
            },
            classes: [],
        },
        HeaderWrapper.defaultProps,
    );

    render() {
        return (
            <HeaderWrapper {..._.omit(this.props, 'title')}>
                <Title {...this.props.title}>{this.props.children}</Title>
            </HeaderWrapper>
        );
    }
}
