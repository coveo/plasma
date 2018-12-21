import * as escapeRegExp from 'escape-string-regexp';
import * as React from 'react';

export interface PartialStringMatchProps {
    /**
     * @deprecated use children instead
     */
    wholeString?: string;
    partialMatch?: string;
    caseInsensitive?: boolean;
}

export class PartialStringMatch extends React.Component<PartialStringMatchProps> {
    static defaultProps: Partial<PartialStringMatchProps> = {
        wholeString: '',
        partialMatch: '',
    };

    render() {
        const toRender = this.props.wholeString || this.props.children;
        if (!this.props.partialMatch) {
            return toRender;
        }

        const escaped = escapeRegExp(this.props.partialMatch);
        const iterator = this.deepReplaceStrings(toRender, escaped);

        const children = [];
        let result: IteratorResult<React.ReactNode>;
        do {
            result = iterator.next();
            children.push(result.value);
        } while (!result.done);

        return children;
    }

    private *deepReplaceStrings(component: React.ReactNode, escaped: string): IterableIterator<React.ReactNode> {
        const flags = this.props.caseInsensitive ? 'ig' : 'g';
        const regExp = new RegExp(`(${escaped})`, flags);

        const cast = component as any;
        if (!component) {
            return;
        } else if (component instanceof Array) {
            for (let i = 0; i < component.length; i++) {
                yield* this.deepReplaceStrings(component[i], escaped);
            }
        } else if (typeof component === 'string') {
            if (regExp.test(component)) {
                const parts: React.ReactNode[] = component.split(regExp);
                for (let i = 1; i < parts.length; i += 2) {
                    parts[i] = <span className='bold' key={`match-${i}`}>{parts[i]}</span>;
                }
                yield parts;
            } else {
                yield component;
            }
        } else if (cast.props && cast.props.children) {
            const newChildren = [];
            const iterator = this.deepReplaceStrings(cast.props.children, escaped);

            let result: IteratorResult<React.ReactNode>;
            do {
                result = iterator.next();
                newChildren.push(result.value);
            } while (!result.done);

            yield React.cloneElement(cast, {...cast.props, children: newChildren});
        } else {
            yield component;
        }
    }
}
