// Review page for the CodeEditor colors and spacing (DS-820): different amounts of code in different frame sizes.
import {CodeEditor, SimpleGrid, Stack, Text, Title} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import type {ReactNode} from 'react';

const shortJson = `{
    "enabled": true,
    "maxResults": 25
}`;

const product = (index: number) => ({
    objecttype: 'product',
    ec_product_id: `SKU-${10428 + index}`,
    ec_name: ['Trail runner', 'Road racer', 'Everyday walker', 'Court classic'][index % 4],
    ec_price: Number((59.99 + index * 10).toFixed(2)),
    ec_in_stock: index % 3 !== 0,
    ec_promo: index % 2 ? null : 'FALL25',
    ec_category: ['Footwear', 'Running'],
    ec_rating: {average: Number((4.1 + (index % 5) / 10).toFixed(1)), count: 120 + index * 7},
    ec_images: [`https://example.com/sku-${10428 + index}-front.jpg`],
});

// About 140 lines
const longJson = JSON.stringify(
    {totalCount: 8, results: Array.from({length: 8}, (_, index) => product(index))},
    null,
    4,
);

const longLinesJson = JSON.stringify(
    {
        ec_description:
            'Lightweight everyday running shoes with a breathable knit upper, a responsive foam midsole that stays soft over long distances, and a grippy rubber outsole for wet pavement.',
        ec_seo_title: 'Lightweight everyday running shoes | Barca Sports | Free shipping on orders over 75 dollars',
        ec_url: 'https://www.example.com/en-us/footwear/running/lightweight-everyday-running-shoes?color=blue&size=10',
        ec_tags: ['lightweight', 'breathable', 'road', 'everyday', 'cushioned', 'neutral', 'vegan', 'recycled'],
        ec_in_stock: true,
        ec_price: 89.99,
    },
    null,
    4,
);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Crawling configuration for the support site -->
<configuration version="2">
    <source name="Support site" type="Sitemap">
        <startingAddress>https://support.example.com/sitemap.xml</startingAddress>
        <crawlingDepth>3</crawlingDepth>
        <respectRobotsTxt>true</respectRobotsTxt>
        <exclusions>
            <exclude pattern="*/archive/*" />
            <exclude pattern="*/drafts/*" />
        </exclusions>
        <metadata>
            <field name="product" origin="meta" key="og:product" />
            <field name="language" origin="html" key="lang" />
        </metadata>
    </source>
</configuration>`;

const python = `# Indexing pipeline extension: normalize product names
import re

MAX_LENGTH = 120


def normalize(name):
    """Collapse whitespace and trim long names."""
    cleaned = re.sub(r"\\s+", " ", name).strip()
    if len(cleaned) > MAX_LENGTH:
        return cleaned[:MAX_LENGTH] + "..."
    return cleaned


for item in document.get_meta_data():
    if item.origin != "crawler":
        continue
    name = item.values.get("ec_name", [None])[0]
    if name is None:
        log("Missing name", "Warning")
        continue
    document.add_meta_data({"ec_name": normalize(name)})`;

const markdown = `# Release notes

Version **2.4** adds _faceted_ search to the support site.

## Changes

- New \`ec_rating\` field on products
- Faster indexing for sitemaps
- [Read the docs](https://docs.example.com/release-2-4)

> Run a rebuild after updating the source.`;

const Scenario = ({title, note, children}: {title: string; note: string; children: ReactNode}) => (
    <Stack gap="xs">
        <Title order={4}>{title}</Title>
        <Text size="sm" c="dimmed">
            {note}
        </Text>
        {children}
    </Stack>
);

const meta = {
    // Shares CodeEditor's title so the scenarios sit in the CodeEditor section
    title: '@components/Forms and inputs/string/CodeEditor',
    id: 'CodeEditorScenarios',
    parameters: {layout: 'padded', controls: {disable: true}},
} satisfies Meta;
export default meta;

export const Scenarios: StoryObj = {
    render: () => (
        <Stack gap={48} p="md" maw={1200}>
            <Scenario title="Less code, default frame" note="3 lines in the default 350px frame.">
                <SimpleGrid cols={2}>
                    <CodeEditor label="Editable" language="json" defaultValue={shortJson} monacoLoader="cdn" />
                    <CodeEditor
                        label="Read-only"
                        language="json"
                        defaultValue={shortJson}
                        readOnly
                        monacoLoader="cdn"
                    />
                </SimpleGrid>
            </Scenario>

            <Scenario title="Less code, compact frame" note="3 lines in a 180px frame, no label.">
                <SimpleGrid cols={2}>
                    <CodeEditor language="json" defaultValue={shortJson} h={180} minHeight={180} monacoLoader="cdn" />
                    <CodeEditor
                        language="json"
                        defaultValue={shortJson}
                        readOnly
                        h={180}
                        minHeight={180}
                        monacoLoader="cdn"
                    />
                </SimpleGrid>
            </Scenario>

            <Scenario title="More code, default frame" note="About 140 lines of JSON in the default frame: scroll it.">
                <SimpleGrid cols={2}>
                    <CodeEditor
                        label="Search response"
                        description="Editable"
                        language="json"
                        defaultValue={longJson}
                        monacoLoader="cdn"
                    />
                    <CodeEditor
                        label="Search response"
                        description="Read-only"
                        language="json"
                        defaultValue={longJson}
                        readOnly
                        monacoLoader="cdn"
                    />
                </SimpleGrid>
            </Scenario>

            <Scenario title="Tall frame" note="The same 140 lines in a 700px frame.">
                <SimpleGrid cols={2}>
                    <CodeEditor language="json" defaultValue={longJson} h={700} monacoLoader="cdn" />
                    <CodeEditor language="json" defaultValue={longJson} readOnly h={700} monacoLoader="cdn" />
                </SimpleGrid>
            </Scenario>

            <Scenario title="Wide frame, long lines" note="Full width: long values wrap much later.">
                <CodeEditor
                    label="Product"
                    language="json"
                    defaultValue={longLinesJson}
                    readOnly
                    h={300}
                    minHeight={300}
                    monacoLoader="cdn"
                />
            </Scenario>

            <Scenario title="Narrow frame, long lines" note="320px wide: long values wrap.">
                <CodeEditor
                    label="Product"
                    language="json"
                    defaultValue={longLinesJson}
                    w={320}
                    h={420}
                    monacoLoader="cdn"
                />
            </Scenario>

            <Scenario title="Other languages" note="XML, Python and Markdown, read-only.">
                <SimpleGrid cols={3}>
                    <CodeEditor label="XML" language="xml" defaultValue={xml} readOnly h={420} monacoLoader="cdn" />
                    <CodeEditor
                        label="Python"
                        language="python"
                        defaultValue={python}
                        readOnly
                        h={420}
                        monacoLoader="cdn"
                    />
                    <CodeEditor
                        label="Markdown"
                        language="markdown"
                        defaultValue={markdown}
                        readOnly
                        h={420}
                        monacoLoader="cdn"
                    />
                </SimpleGrid>
            </Scenario>
        </Stack>
    ),
};
