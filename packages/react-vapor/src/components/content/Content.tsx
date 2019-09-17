import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

export interface IContentProps {
    content: React.ReactNode;
    componentProps?: {[key: string]: any};
    classes?: string[];
    tag?: string;
}

/**
 * @deprecated Use React.ReactNode instead.
 */
export class Content extends React.Component<IContentProps, {}> {
    static defaultProps: Partial<IContentProps> = {
        classes: [],
        tag: 'span',
    };

    private getContent(): JSX.Element | string | React.ReactNode {
        if (
            _.isString(this.props.content) ||
            _.isNumber(this.props.content) ||
            React.isValidElement(this.props.content)
        ) {
            return this.props.content;
        }

        return React.createElement(this.props.content as React.ComponentClass, this.props.componentProps);
    }

    render() {
        const className = classNames(this.props.classes);
        return React.createElement(this.props.tag, {className}, this.getContent());
    }
}
