import {buildHistoryManager, HistoryManager, HistoryManagerState, SearchEngine} from '@coveo/atomic-react';
import {Button} from '@coveord/plasma-mantine';
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
        <div className="grid item-center">
            <img className="mt3 mb3" src={results_empty_state} />
            <div className="grid item-center">
                <span className="h4-book mb1 nowrap">
                    We couldn’t find anything for <span className="h4"> “{query}”</span>
                </span>
                <span className="h6-subdued mb3 nowrap">
                    You may want to try using different keywords, or checking for spelling mistakes.
                </span>
                <Button
                    onClick={async () => {
                        if (state.past.length !== 0) {
                            await historyManager.backOnNoResults();
                        } else {
                            navigate('/');
                        }
                    }}
                >
                    Clear search
                </Button>
            </div>
        </div>
    );
};
