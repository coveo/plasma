import {SearchEngine} from '@coveo/atomic-react';
import {createContext} from 'react';

export const EngineContext = createContext<SearchEngine | null>(null);
