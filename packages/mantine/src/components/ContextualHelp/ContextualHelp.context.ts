import {createContext, useContext} from 'react';

/**
 * Lets interactive containers (e.g. RadioCard, which renders its label inside a button) render the ContextualHelp
 * they contain as non-focusable, to avoid nesting interactive elements.
 */
const ContextualHelpFocusableContext = createContext(true);

export const ContextualHelpFocusableProvider = ContextualHelpFocusableContext.Provider;
export const useContextualHelpFocusable = () => useContext(ContextualHelpFocusableContext);
