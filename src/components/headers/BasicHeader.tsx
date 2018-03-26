import * as React from 'react';
import * as _ from 'underscore';
import {ITitleProps, Title} from '../title/Title';
import {HeaderWrapper, IHeaderWrapperProps} from './HeaderWrapper';

export interface IBasicHeaderProps extends IHeaderWrapperProps, React.ClassAttributes<React.Component<any, any>> {
    title: ITitleProps;
}

export class BasicHeader extends React.Component<IBasicHeaderProps, {}> {

    static defaultProps: Partial<IBasicHeaderProps> = _.extend({
        title: {
            text: '',
        },
        classes: [],
    }, HeaderWrapper.defaultProps);

    render() {
        return (
            <HeaderWrapper {...this.props}>
                <Title {...this.props.title} />
            </HeaderWrapper>
        );
    }
}
