import classNames from 'clsx';
import {ReactNode, ComponentClass, createElement, isValidElement, PureComponent} from 'react';
import * as _ from 'underscore';

export interface IContentProps {
    content: ReactNode;
    componentProps?: {[key: string]: any};
    classes?: string[];
    tag?: string;
}

/**
 * @deprecated Use React.ReactNode instead.
 */
export class Content extends PureComponent<IContentProps> {
    static defaultProps: Partial<IContentProps> = {
        classes: [],
        tag: 'span',
    };

    private getContent(): ReactNode {
        if (_.isString(this.props.content) || _.isNumber(this.props.content)) {
            return this.props.content;
        }

        return createElement(this.props.content as unknown as ComponentClass, this.props.componentProps);
    }

    render() {
        const className = classNames(this.props.classes);
        return isValidElement(this.props.content)
            ? this.props.content
            : createElement(this.props.tag, className ? {className} : null, this.getContent());
    }
}
