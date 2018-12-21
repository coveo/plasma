import * as escapeRegExp from 'escape-string-regexp';
import * as React from 'react';
import {escape} from 'underscore';

export interface PartialStringMatchProps {
    wholeString: React.ReactNode;
    partialMatch?: string;
    caseInsensitive?: boolean;
}

export class PartialStringMatch extends React.Component<PartialStringMatchProps> {
    static defaultProps: Partial<PartialStringMatchProps> = {
        wholeString: '',
        partialMatch: '',
    };

    render() {
        if (!this.props.partialMatch) {
            return this.props.wholeString;
        }

        const flags = this.props.caseInsensitive ? 'ig' : 'g';
        const regExp = new RegExp(escapeRegExp(escape(this.props.partialMatch)), flags);
        const iterator = this.deepReplaceStrings(this.props.wholeString, regExp);

        const children = [];
        let result: IteratorResult<React.ReactNode>;
        do {
            result = iterator.next();
            children.push(result.value);
        } while (!result.done);

        return children;
    }

    private *deepReplaceStrings(component: React.ReactNode | React.ReactNode[], regExp: RegExp): IterableIterator<React.ReactNode> {
        const cast = component as any;
        if (!component) {
            return;
        } else if (component instanceof Array) {
            for (let i = 0; i < component.length; i++) {
                yield* this.deepReplaceStrings(component[i], regExp);
            }
        } else if (typeof component === 'string') {
            const clean = escape(component);
            if (regExp.test(clean)) {
                yield <span dangerouslySetInnerHTML={{__html: clean.replace(regExp, (match: string) => `<span class='bold'>${match}</span>`)}} />;
            } else {
                yield clean;
            }
        } else if (cast.props && cast.props.children) {
            const newChildren = [];
            const iterator = this.deepReplaceStrings(cast.props.children, regExp);

            let result: IteratorResult<React.ReactNode>;
            do {
                result = iterator.next();
                newChildren.push(result.value);
            } while (!result.done);

            yield React.cloneElement(cast, {...cast.props, children: newChildren});
        }
    }
}
