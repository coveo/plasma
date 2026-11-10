/**
 * Where the preview toolbar earns its place.
 *
 * The toolbar acts on a rendered canvas — backgrounds, grid, measure, outline, viewport.
 * Only component pages have one, so only they get it. Everywhere else it is noise.
 *
 * Light / dark used to be the reason Foundations kept a toolbar. Plasma does not support
 * dark mode, so that control is gone entirely; see `backgroundOptions.ts`.
 */
type IndexEntry = {type?: string; title?: string; parent?: string; children?: string[]};
type Index = Record<string, IndexEntry> | undefined;

/** True when the entry belongs to a component that actually has a story to render. */
export const hasCanvas = (index: Index, storyId: string): boolean => {
    const parent = index?.[storyId]?.parent;
    const children = parent ? (index?.[parent]?.children ?? []) : [];
    return children.some((id) => index?.[id]?.type === 'story');
};

/**
 * Having a story is not enough to count as a component: the Foundations pages are
 * story-backed too, and the Components overview is prose inside the components section.
 * Both have to hold.
 */
export const shouldShowToolbar = (index: Index, storyId: string): boolean =>
    Boolean(index?.[storyId]?.title?.startsWith('Components/')) && hasCanvas(index, storyId);
