import * as escapeRegExp from 'escape-string-regexp';
import * as React from 'react';
import {escape} from 'underscore';

export interface PartialStringMatchProps {
    wholeString: string;
    partialMatch?: string;
    caseInsensitive?: boolean;
}

export class PartialStringMatch extends React.Component<PartialStringMatchProps> {
    static defaultProps: Partial<PartialStringMatchProps> = {
        wholeString: '',
        partialMatch: '',
    };

    render() {
        return <span dangerouslySetInnerHTML={{__html: this.getFormattedString()}} />;
    }

    private getFormattedString(): string {
        const flags = this.props.caseInsensitive ? 'ig' : 'g';
        const regExp = new RegExp(escapeRegExp(escape(this.props.partialMatch)), flags);
        const cleanWholeString = escape(this.props.wholeString.trim());

        return !cleanWholeString || !this.props.partialMatch
            ? cleanWholeString
            : cleanWholeString.replace(regExp, (match: string) => `<span class='bold'>${match}</span>`);
    }
}
