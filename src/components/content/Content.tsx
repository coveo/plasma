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

    private getContent(): JSX.Element | string {
        return _.isString(this.props.content)
            ? this.props.content
            : React.createElement(this.props.content as React.ComponentClass, this.props.componentProps);
    }

    render() {
        const classes = classNames(this.props.classes);
        return (<this.props.tag className={classes}>
            {this.getContent()}
        </this.props.tag>);
    }
}
