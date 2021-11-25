import * as React from 'react';

import Code from './Code';

// ======== THIS PAGE ISN'T PERMANENT ==========
// It has the functionality to get the code snippets which
// is still necessary for the MVP

const START_STOP = /\/\/ start-print\s*([\s\S]*)\/\/ stop-print/;
const START_END = /\/\/ start-print\s*([\s\S]*)$/;
const BEGIN_STOP = /^([\s\S]*)\/\/ stop-print/;

export const chopDownSourceFile = (wholeFile: string): string => {
    const hasStartDirective = wholeFile.indexOf('// start-print') >= 0;
    const hasStopDirective = wholeFile.indexOf('// stop-print') >= 0;

    if (hasStartDirective && hasStopDirective) {
        return wholeFile.match(START_STOP)[1];
    } else if (hasStartDirective) {
        return wholeFile.match(START_END)[1];
    } else if (hasStopDirective) {
        return wholeFile.match(BEGIN_STOP)[1];
    } else {
        return wholeFile;
    }
};

export const DevelopmentTabContent: React.FunctionComponent<{component: any; path: string}> = ({component, path}) => {
    const [code, setCode] = React.useState('');
    React.useEffect(() => {
        const doImport = async () => {
            const res: {default: string} = await import(
                // path has format './ComponentName.js'
                // source file is at '@examples/ComponentName.tsx'
                '!!raw-loader!/' + path.replace('./', '').replace('.js', '.tsx')
            );
            return chopDownSourceFile(res.default);
        };
        doImport().then(setCode);
    }, [path]);
    return (
        <>
            {React.createElement(component)}
            {code && (
                <div className="mt2">
                    <Code language="tsx">{code}</Code>
                </div>
            )}
        </>
    );
};
