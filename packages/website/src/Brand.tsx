import {Stack, Text, Title} from '@coveord/plasma-mantine';
import axios from 'axios';
import qs from 'qs';
import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

import {BrandLayout} from './building-blocs/BrandLayout';

const query = (articleId) =>
    qs.stringify(
        {
            filters: {
                id: articleId,
            },
            populate: '*',
            pagination: {
                pageSize: 1,
                page: 1,
            },
        },
        {
            encodeValuesOnly: true, // prettify URL
        },
    );

export const Brand = () => {
    const {pathname} = useLocation();
    const [category, setCategory] = useState(null);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_ADMIN_API_URL}/navigation/render/main-navigation?type=TREE&path=${pathname}`, {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
                },
            })
            .then(({data}) => {
                setCategory(data[0]);
                setArticles([]);
            });
    }, [pathname]);

    useEffect(() => {
        if (category && articles.length === 0 && !!category?.items?.[0]?.related.id) {
            Promise.all(
                category?.items?.map((item) =>
                    axios
                        .get(`${import.meta.env.VITE_ADMIN_API_URL}/brand-articles?${query(item?.related.id)}`, {
                            headers: {
                                Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
                            },
                        })
                        .then(({data}) => setArticles((prev) => [...prev, data.data[0]])),
                ),
            );
        }
    }, [pathname, category]);

    return (
        <BrandLayout
            id="Logotype"
            isPrivate={category?.related?.isPrivate}
            section="Brand"
            title={category?.title}
            description={category?.related?.subtitle}
        >
            <div className="plasma-page-layout__section pl5">
                <Stack>
                    {articles.map((article) => {
                        if (!article) {
                            return;
                        }

                        return article?.attributes?.sections?.map(({content, title}) => (
                            <Stack>
                                <Title order={2}>{title}</Title>
                                <Text dangerouslySetInnerHTML={{__html: content}} />
                            </Stack>
                        ));
                    })}
                </Stack>
            </div>
        </BrandLayout>
    );
};

export default Brand;
