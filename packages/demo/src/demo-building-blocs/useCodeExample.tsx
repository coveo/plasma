import React from 'react';
import {useLocation} from 'react-router-dom';

const START_STOP = /\/\/ start-print\s*([\s\S]*)\/\/ stop-print/;
const START_END = /\/\/ start-print\s*([\s\S]*)$/;
const BEGIN_STOP = /^([\s\S]*)\/\/ stop-print/;

const chopDownSourceFile = (wholeFile: string): string => {
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

export const useCodeExample = () => {
    const [code, setCode] = React.useState('');
    const {pathname} = useLocation();

    const subUrls = pathname.split('/').filter(Boolean);
    const arrPath = [subUrls.shift(), 'pages', ...subUrls];

    React.useEffect(() => {
        const doImport = async () => {
            const res: {default: string} = await import(
                '!!raw-loader!@routes/' + arrPath.join('/') + 'Examples.js'.replace('.js', '.tsx')
            );
            return chopDownSourceFile(res.default);
        };
        doImport().then(setCode);
    }, []);

    return code;
};
