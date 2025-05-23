import {buildHistoryManager, HistoryManager, HistoryManagerState, SearchEngine} from '@coveo/headless';
import {Button, Group, Header, Image, Stack, Text} from '@coveord/plasma-mantine';
import {FunctionComponent, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {withTranslation, WithTranslation} from 'react-i18next';
import results_empty_state from '../assets/results_empty_state.png';

interface NoResultTemplateProps extends WithTranslation {
    engine: SearchEngine;
    query: string;
}

export const InternalNoSearchResultTemplate: FunctionComponent<NoResultTemplateProps> = (props) => {
    const {engine, query, t} = props;
    const navigate = useNavigate();

    const historyManager: HistoryManager = buildHistoryManager(engine);
    const [state, setState] = useState<HistoryManagerState>(historyManager.state);

    useEffect(() => historyManager.subscribe(() => setState(historyManager.state)), []);

    return (
        <Group justify="center">
            <Stack align="flex-start">
                <Header variant="secondary">
                    {t('no_search_results-title-start')}“{query}”
                </Header>
                <Text>{t('no_search_results-description')}</Text>
                <Button.Tertiary
                    onClick={async () => {
                        if (state.past.length !== 0) {
                            await historyManager.backOnNoResults();
                        } else {
                            navigate('/');
                        }
                    }}
                >
                    {t('no_search_results-clear-button')}
                </Button.Tertiary>
            </Stack>
            <Image maw={300} src={results_empty_state} />
        </Group>
    );
};

export const NoSearchResultTemplate = withTranslation()(InternalNoSearchResultTemplate);
