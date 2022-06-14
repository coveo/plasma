import {Component} from 'react';
import * as _ from 'underscore';

import {ITitleProps} from '../title/Title';
import {HeaderWrapper, IHeaderWrapperProps} from './HeaderWrapper';

export interface IBasicHeaderProps extends IHeaderWrapperProps {
    /**
     * The title of the header
     */
    title: ITitleProps;
}

export class BasicHeader extends Component<IBasicHeaderProps> {
    static defaultProps: Partial<IBasicHeaderProps> = _.extend(
        {
            title: {
                text: '',
            },
            classes: [],
        },
        HeaderWrapper.defaultProps
    );

    render() {
        return (
            <HeaderWrapper {..._.omit(this.props, 'title')}>
                <Title {...this.props.title}>{this.props.children}</Title>
            </HeaderWrapper>
        );
    }
}
