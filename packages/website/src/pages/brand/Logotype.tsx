import {Stack} from '@mantine/core';
import axios from 'axios';
import qs from 'qs';
import {useEffect, useState} from 'react';

import {PageLayout} from '../../building-blocs/PageLayout';
import {HorizontalSection} from './elements/HorizontalSection';
import {VerticalSection} from './elements/VerticalSection';

const query = qs.stringify(
    {
        populate: {
            sections: {
                populate: '*',
                on: {
                    'elements.horizontal-section': {
                        populate: '*',
                    },
                    'elements.brand-section': {
                        populate: {
                            rows: {
                                populate: '*',
                            },
                        },
                    },
                },
            },
        },
    },
    {
        encodeValuesOnly: true, // prettify URL
    },
);

export const Logotype = () => {
    const [error, setError] = useState(null);
    const [article, setArticle] = useState(null);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_BASE_URL}/api/brand-articles?${query}`, {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
                },
            })
            .then(({data}) => setArticle(data.data[0]))
            .catch((e) => setError(e));
    }, []);

    if (error) {
        // Print errors if any
        return <div>An error occured: {error.message}</div>;
    }

    return (
        <PageLayout
            id="Logotype"
            section="Brand"
            title={article?.attributes?.title}
            description="test test"
            sourcePath="/packages/tokens#readme"
            withPropsTable={false}
        >
            <div className="plasma-page-layout__section pl5">
                <Stack>
                    {article?.attributes?.sections?.map((section) => {
                        const componentType = section['__component'];
                        if (componentType === 'elements.horizontal-section') {
                            return <HorizontalSection key={`horizontal-section-${section?.id}`} section={section} />;
                        }

                        return <VerticalSection section={section} key={`brand-section-${section?.id}`} />;
                    })}
                </Stack>
            </div>
        </PageLayout>
    );
};

export default Logotype;
