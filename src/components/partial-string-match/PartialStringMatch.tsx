import * as React from 'react';

export interface PartialStringMatchProps {
    wholeString: string;
    partialMatch?: string;
    caseInsensitive?: boolean;
}

export const PartialStringMatch = (props: PartialStringMatchProps): JSX.Element => {
    const wholeString = props.wholeString || '';
    const partialMatch = props.partialMatch || '';
    const regExp = new RegExp(partialMatch, props.caseInsensitive && 'i');
    const splitPlaceholder = '%%split%%';

    let hasMatch = false;
    let realMatch: string;
    let finalString: string | string[] = wholeString.replace(regExp, (match: string) => {
        hasMatch = true;
        realMatch = match;
        return splitPlaceholder;
    });

    if (!partialMatch || !wholeString || !hasMatch) {
        return <span>{wholeString}</span>;
    }

    finalString = finalString.split(splitPlaceholder);
    return (
        <span>
            {finalString[0]}<span className='bold'>{realMatch}</span>{finalString[1]}
        </span>
    );
};
