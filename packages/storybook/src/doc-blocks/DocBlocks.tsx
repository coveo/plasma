import {ActionIcon, Badge, Group, SimpleGrid, Stack, Text} from '@coveord/plasma-mantine';
import {IconBug, IconPencil, IconThumbDown, IconThumbUp} from '@coveord/plasma-react-icons';
import type {PropsWithChildren, ReactNode} from 'react';
import classes from './DocBlocks.module.css';

/**
 * Layout primitives from the Plasma Storybook Blueprint.
 *
 * Each block is the blueprint's own structure, rebuilt on Plasma tokens so it follows the
 * theme. Import them in MDX and wrap in `<Unstyled>` when the docs renderer would otherwise
 * restyle the markup.
 */

/** The one sentence a page is built around. `.rulebox` in the blueprint. */
export const Rule = ({children}: PropsWithChildren) => <div className={classes.rule}>{children}</div>;

/** An aside that qualifies the rule above it. `.note` in the blueprint. */
export const Note = ({children}: PropsWithChildren) => <div className={classes.note}>{children}</div>;

/** Something the team still has to decide or write. `.todo` in the blueprint. */
export const Todo = ({title, children}: PropsWithChildren<{title: string}>) => (
    <div className={classes.todo}>
        <b className={classes.todoTitle}>{title}</b>
        {children}
    </div>
);

/** How the reader knows the step worked. `.worked` in the blueprint. */
export const Worked = ({children}: PropsWithChildren) => (
    <div className={classes.worked}>
        <b className={classes.workedMark}>✓</b>
        <span>{children}</span>
    </div>
);

/** A defined term with its explanation. `.layer` in the blueprint. */
export const Layer = ({term, muted = false, children}: PropsWithChildren<{term: string; muted?: boolean}>) => (
    <div className={`${classes.layer} ${muted ? classes.layerMuted : ''}`}>
        <strong className={classes.layerTerm}>{term}</strong>
        <span className={classes.layerBody}>{children}</span>
    </div>
);

/** An ordered procedure with circled numbers. `.steps` in the blueprint. */
export const Steps = ({children}: PropsWithChildren) => <div className={classes.steps}>{children}</div>;

export const Step = ({children}: PropsWithChildren) => (
    <div className={classes.step}>
        <span className={classes.stepNumber} />
        <div>{children}</div>
    </div>
);

/** Paired guidance. `.dd` in the blueprint. */
export const DoDont = ({
    doLabel = 'Do',
    dontLabel = "Don't",
    children,
}: PropsWithChildren<{doLabel?: string; dontLabel?: string}>) => (
    <div className={classes.doDont} data-do-label={doLabel} data-dont-label={dontLabel}>
        {children}
    </div>
);

export const Do = ({children}: PropsWithChildren) => (
    <div className={classes.doDontCell}>
        <div className={`${classes.doDontHead} ${classes.doHead}`}>Do</div>
        <div className={classes.doDontBody}>{children}</div>
    </div>
);

export const Dont = ({children}: PropsWithChildren) => (
    <div className={classes.doDontCell}>
        <div className={`${classes.doDontHead} ${classes.dontHead}`}>Don't</div>
        <div className={classes.doDontBody}>{children}</div>
    </div>
);

/** Status and lifecycle pills. `.tg` in the blueprint. */
const TAG_COLORS: Record<string, string> = {
    // Library origin
    mantine: 'blue',
    plasma: 'violet',
    core: 'blue',
    product: 'violet',
    extended: 'gray',
    stable: 'green',
    patch: 'green',
    minor: 'green',
    beta: 'yellow',
    deprecated: 'red',
    breaking: 'red',
    docs: 'blue',
    pattern: 'blue',
    tbw: 'orange',
};

/** Tones for values that carry no keyword of their own, such as a contrast ratio. */
const TONE_COLORS: Record<string, string> = {
    good: 'green',
    bad: 'red',
    warn: 'yellow',
    info: 'blue',
    neutral: 'gray',
};

export const Tag = ({children, tone}: {children: string; tone?: keyof typeof TONE_COLORS}) => (
    <Badge color={tone ? TONE_COLORS[tone] : (TAG_COLORS[children.toLowerCase()] ?? 'gray')} size="sm" radius="xl">
        {children}
    </Badge>
);

/** The entry cards on the Welcome page. `.cards` in the blueprint. */
export const CardGrid = ({children, min = 215}: PropsWithChildren<{min?: number}>) => (
    <SimpleGrid cols={{base: 1, sm: 2}} spacing="sm" mt="sm" style={{'--min': `${min}px`}}>
        {children}
    </SimpleGrid>
);

/** A labelled list of outbound links. `.lnkgrp` in the blueprint. */
export const LinkGroup = ({title, children}: PropsWithChildren<{title: string}>) => (
    <Stack gap="xxs">
        <div className={classes.linkGroupTitle}>{title}</div>
        {children}
    </Stack>
);

/** Small dimmed text under a block. `.cap` in the blueprint. */
export const Caption = ({children}: PropsWithChildren) => <div className={classes.caption}>{children}</div>;

/** Where the sentence came from, when harvesting existing docs. `.src` in the blueprint. */
export const Source = ({children}: PropsWithChildren) => (
    <Text span size="xs" c="dimmed" fw={700}>
        {children}
    </Text>
);

/**
 * The Plasma Slack channel, as a link.
 *
 * `app_redirect` resolves the channel by name in whichever workspace the reader is signed
 * into, so no Coveo workspace id is hardcoded. Swap `SLACK_CHANNEL_URL` for the channel's
 * own permalink if a stable one is preferred — the channel is named on several pages and
 * this is the only place the address lives.
 */
export const SLACK_CHANNEL = 'community-designsystem';
export const SLACK_CHANNEL_URL = `https://slack.com/app_redirect?channel=${SLACK_CHANNEL}`;

export const SlackChannel = () => (
    <a href={SLACK_CHANNEL_URL} target="_blank" rel="noopener">
        {`#${SLACK_CHANNEL}`}
    </a>
);

/**
 * The footer the blueprint puts on every page, and Plasma did not have — the cheapest way
 * to find out where the docs fail.
 */
export const PageFooter = ({
    editUrl,
    reportUrl = 'https://coveord.atlassian.net/secure/CreateIssueDetails!init.jspa?pid=17244&issuetype=10105&labels=documentation',
}: {
    editUrl?: string;
    reportUrl?: string;
}) => (
    <div className={classes.pageFooter}>
        <Group gap="xxs">
            <span>Was this page helpful?</span>
            <ActionIcon.Tertiary aria-label="Yes, this page was helpful" size="md">
                <IconThumbUp size={16} />
            </ActionIcon.Tertiary>
            <ActionIcon.Tertiary aria-label="No, this page was not helpful" size="md">
                <IconThumbDown size={16} />
            </ActionIcon.Tertiary>
        </Group>
        <span>·</span>
        {editUrl ? (
            <a href={editUrl} className={classes.footerLink}>
                Edit this page
                <IconPencil size={14} aria-hidden="true" />
            </a>
        ) : null}
        {editUrl ? <span>·</span> : null}
        <a href={reportUrl} target="_blank" rel="noopener" className={classes.footerLink}>
            Report a problem
            <IconBug size={14} aria-hidden="true" />
        </a>
    </div>
);

/** A numbered section heading, as `## 01 In code` renders in the blueprint. */
export const SectionNumber = ({children}: {children: ReactNode}) => (
    <span className={classes.sectionNumber}>{children}</span>
);

/**
 * A page that exists in the proposed structure but has not been written yet.
 * Mirrors the blueprint's own placeholder: it names the template the page will follow
 * rather than inventing content for it.
 */
const SECTION_TEMPLATES: Record<string, string> = {
    Component:
        'Demo → Anatomy → Usage → Variants and states → Content and copy → Accessibility → Props → Related → Changelog',
    Pattern: 'The right answer (visual) → The rule, in one sentence → Why → Built from',
    Foundation: 'What it is → The scale, with values → Figma ↔ code → What not to do',
    Governance: 'What we commit to → What you do → What happens next',
    Content: 'What the rule is → Where it applies → Examples → What not to do',
};

export const PlannedPage = ({type}: {type: keyof typeof SECTION_TEMPLATES}) => (
    <>
        <div className={classes.todo}>
            <b className={classes.todoTitle}>Not written yet</b>
            This page exists in the proposed structure and has not been written. It is listed here so the shape of the
            documentation is reviewable before the writing starts.
        </div>
        <div className={classes.layer}>
            <strong className={classes.layerTerm}>{type} template</strong>
            <span className={classes.layerBody}>{SECTION_TEMPLATES[type]}</span>
        </div>
    </>
);
