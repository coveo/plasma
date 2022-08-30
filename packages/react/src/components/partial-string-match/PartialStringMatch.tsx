import escapeStringRegexp from 'escape-string-regexp';
import {ReactNode, FunctionComponent, cloneElement, Component, PureComponent} from 'react';

export interface PartialStringMatchProps {
    /**
     * @deprecated use children instead
     */
    wholeString?: string;
    partialMatch?: string;
    caseInsensitive?: boolean;
}

/**
 * @deprecated Use Mantine instead
 */
export class PartialStringMatch extends PureComponent<PartialStringMatchProps> {
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

    private lookupChildren(component: ReactNode): ReactNode {
        const iterator = this.deepReplaceStrings(component);

        const children: ReactNode[] = [];
        let result: IteratorResult<ReactNode>;
        do {
            result = iterator.next();
            if (result.value) {
                children.push(result.value);
            }
        } while (!result.done);

        return children.length === 1 ? children[0] : children;
    }

    private *deepReplaceStrings(component: ReactNode): IterableIterator<ReactNode> {
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
            yield cloneElement(element, {
                ...element.props,
                children: this.lookupChildren(element.props.children),
            });
        } else if (/^Connect\(.+\)$/.test(element.type.displayName)) {
            // The node is Connected component, we render it as is
            // TODO: find a way to yield WrappedComponent properly
            yield component;
        } else if (
            typeof element.type === 'function' &&
            !(element.type.prototype instanceof Component || element.type.prototype instanceof PureComponent)
        ) {
            // The node is a React.FunctionComponent, we iterate over what's rendered by the function
            yield this.lookupChildren(element.type(element.props));
        } else {
            yield component;
        }
    }

    private hightlightMatches(str: string): ReactNode {
        const flags = this.props.caseInsensitive ? 'ig' : 'g';
        const matcher = escapeStringRegexp(this.props.partialMatch);
        const regExp = new RegExp(`(${matcher})`, flags);

        if (regExp.test(str)) {
            const parts: ReactNode[] = str.split(regExp);
            for (let i = 1; i < parts.length; i += 2) {
                parts[i] = <Highlight key={`match-${i}`}>{parts[i]}</Highlight>;
            }
            return parts;
        } else {
            return str;
        }
    }
}

const Highlight: FunctionComponent = ({children}) => <span className="bolder">{children}</span>;
