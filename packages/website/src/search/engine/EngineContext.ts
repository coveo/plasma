import {SearchEngine} from '@coveo/headless';
import {createContext} from 'react';

export const EngineContext = createContext<SearchEngine | null>(null);
