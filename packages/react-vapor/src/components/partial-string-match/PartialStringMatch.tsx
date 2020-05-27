import escapeRegExp from 'escape-string-regexp';
import * as React from 'react';

export interface PartialStringMatchProps {
    /**
     * @deprecated use children instead
     */
    wholeString?: string;
    partialMatch?: string;
    caseInsensitive?: boolean;
}

export class PartialStringMatch extends React.PureComponent<PartialStringMatchProps> {
    static defaultProps: Partial<PartialStringMatchProps> = {
        wholeString: '',
        partialMatch: '',
    };

    render() {
        const toRender = this.props.wholeString || this.props.children;
        if (!this.props.partialMatch) {
            return toRender;
        }

        return this.lookupChildren(toRender);
    }

    private lookupChildren(component: React.ReactNode): React.ReactNode {
        const iterator = this.deepReplaceStrings(component);

        const children: React.ReactNode[] = [];
        let result: IteratorResult<React.ReactNode>;
        do {
            result = iterator.next();
            if (result.value) {
                children.push(result.value);
            }
        } while (!result.done);

        return children.length === 1 ? children[0] : children;
    }

    private *deepReplaceStrings(component: React.ReactNode): IterableIterator<React.ReactNode> {
        const element = component as JSX.Element;
        if (!component) {
            return;
        } else if (component instanceof Array) {
            for (let i = 0; i < component.length; i++) {
                yield* this.deepReplaceStrings(component[i]);
            }
        } else if (typeof component === 'string') {
            yield this.hightlightMatches(component);
        } else if (element.props && element.props.children) {
            // The node is a React.Component, we iterate over its children
            yield React.cloneElement(element, {
                ...element.props,
                children: this.lookupChildren(element.props.children),
            });
        } else if (/^Connect\(.+\)$/.test(element.type.displayName)) {
            // The node is Connected component, we render it as is
            // TODO: find a way to yield WrappedComponent properly
            yield component;
        } else if (
            typeof element.type === 'function' &&
            !(
                element.type.prototype instanceof React.Component ||
                element.type.prototype instanceof React.PureComponent
            )
        ) {
            // The node is a React.FunctionComponent, we iterate over what's rendered by the function
            yield this.lookupChildren(element.type(element.props));
        } else {
            yield component;
        }
    }

    private hightlightMatches(str: string): React.ReactNode {
        const flags = this.props.caseInsensitive ? 'ig' : 'g';
        const matcher = escapeRegExp(this.props.partialMatch);
        const regExp = new RegExp(`(${matcher})`, flags);

        if (regExp.test(str)) {
            const parts: React.ReactNode[] = str.split(regExp);
            for (let i = 1; i < parts.length; i += 2) {
                parts[i] = <Highlight key={`match-${i}`}>{parts[i]}</Highlight>;
            }
            return parts;
        } else {
            return str;
        }
    }
}

const Highlight: React.FunctionComponent<{}> = ({children}) => <span className="bold">{children}</span>;
