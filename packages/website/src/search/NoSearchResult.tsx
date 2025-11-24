import {buildHistoryManager, HistoryManager, HistoryManagerState, SearchEngine} from '@coveo/headless';
import {Button, Group, Header, Image, Stack, Text} from '@coveord/plasma-mantine';
import {FunctionComponent, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import results_empty_state from '../assets/results_empty_state.png';

interface NoResultTemplateProps {
    engine: SearchEngine;
    query: string;
}

export const NoSearchResultTemplate: FunctionComponent<NoResultTemplateProps> = (props) => {
    const {engine, query} = props;
    const navigate = useNavigate();

    const historyManager: HistoryManager = buildHistoryManager(engine);
    const [state, setState] = useState<HistoryManagerState>(historyManager.state);

    useEffect(() => historyManager.subscribe(() => setState(historyManager.state)), []);

    return (
        <Group justify="center">
            <Stack align="flex-start">
                <Header variant="secondary">We couldn’t find anything for “{query}”</Header>
                <Text>You may want to try using different keywords, or checking for spelling mistakes.</Text>
                <Button.Tertiary
                    onClick={async () => {
                        if (state.past.length !== 0) {
                            await historyManager.backOnNoResults();
                        } else {
                            navigate('/');
                        }
                    }}
                >
                    Clear search
                </Button.Tertiary>
            </Stack>
            <Image maw={300} src={results_empty_state} />
        </Group>
    );
};
