import React from 'react';
import {useLocation} from 'react-router-dom';
import {chopDownSourceFile} from './PageWithCode';

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
