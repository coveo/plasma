// The manager bundle uses the classic JSX runtime, so React has to be in scope explicitly.
import React from 'react';
import {Separator, TabButton} from 'storybook/internal/components';
import {useStorybookApi, useStorybookState} from 'storybook/manager-api';

/**
 * Docs / Canvas tabs, as the Plasma Storybook Blueprint draws them.
 *
 * Storybook 10 lists a component's docs page and each of its stories as separate sidebar
 * entries. The blueprint wants one entry per component with two tabs instead, so component
 * stories are hidden from the sidebar (`tags: ['!dev']`) and these tabs switch between the
 * two views. This is navigation only — the preview stays Storybook's own.
 */
export const DocsCanvasTabs = () => {
    const api = useStorybookApi();
    const {index, storyId, viewMode} = useStorybookState();

    // Entries point at their component through `parent`, not `componentId`.
    const entry = index?.[storyId] as {parent?: string; title?: string} | undefined;
    const component = entry?.parent ? index?.[entry.parent] : undefined;
    const children: string[] = (component as {children?: string[]} | undefined)?.children ?? [];

    const docsId = children.find((id) => index?.[id]?.type === 'docs');
    const canvasId = children.find((id) => index?.[id]?.type === 'story');

    // Components only. Foundations pages are story-backed too — Colors binds to a hidden
    // `Overview` story — so having both children is not enough to tell them apart.
    // The prefix is the section's own title, so it has to track whatever the stories are titled.
    const isComponent = entry?.title?.startsWith('Components/') ?? false;

    if (!isComponent || !docsId || !canvasId) {
        return null;
    }

    // Canvas first: the sidebar entry is the story, so this is the tab you land on.
    return (
        <>
            <TabButton active={viewMode === 'story'} onClick={() => api.selectStory(canvasId)}>
                Canvas
            </TabButton>
            <TabButton active={viewMode === 'docs'} onClick={() => api.selectStory(docsId)}>
                Docs
            </TabButton>
            <Separator />
        </>
    );
};
