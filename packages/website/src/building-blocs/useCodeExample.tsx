import {useRouter} from 'next/router';
import React from 'react';

const START_STOP = /\/\/ start-print\s*([\s\S]*)\/\/ stop-print/;
const START_END = /\/\/ start-print\s*([\s\S]*)$/;
const BEGIN_STOP = /^([\s\S]*)\/\/ stop-print/;

const chopDownSourceFile = (wholeFile: string): string => {
    const hasStartDirective = wholeFile.indexOf('// start-print') >= 0;
    const hasStopDirective = wholeFile.indexOf('// stop-print') >= 0;

    if (hasStartDirective && hasStopDirective) {
        return wholeFile.match(START_STOP)[1];
    }
    if (hasStartDirective) {
        return wholeFile.match(START_END)[1];
    }
    if (hasStopDirective) {
        return wholeFile.match(BEGIN_STOP)[1];
    }
    return wholeFile;
};

const cache: any = {};
const req = require.context('!!raw-loader!../pages', true, /\.tsx$/, 'lazy');
req.keys().forEach((key) => (cache[key] = req(key)));

export const useCodeExample = () => {
    const [code, setCode] = React.useState('');
    const {pathname} = useRouter();

    const doImport = async (path: string) => {
        // path has format "/input/TextInput"
        // cache keys have format "./input/TextInputExamples.tsx"
        const res = await cache[`.${path}.tsx`];
        return chopDownSourceFile(res.default);
    };

    React.useEffect(() => {
        doImport(pathname).then(setCode);
    }, [pathname]);

    return code;
};
