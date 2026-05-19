import {describe, it, expect, beforeEach} from 'vitest';
import {buildComponentMap} from '../buildComponentMap.js';
import {getComponentProps} from '../getComponentProps.js';
import {makeData} from './fixtures.js';

describe('getComponentProps', () => {
    let componentMap: ReturnType<typeof buildComponentMap>;

    beforeEach(() => {
        componentMap = buildComponentMap(makeData());
    });

    it('returns an error result for an unknown component', () => {
        const result = getComponentProps(componentMap, 'Ghost');
        expect(result.isError).toBe(true);
        expect(result.text).toMatchInlineSnapshot(`"Component "Ghost" not found. Use list_components to see available components."`);
    });

    it('extracts the Props section from a component that has one', () => {
        const result = getComponentProps(componentMap, 'Button');
        expect(result.isError).toBeFalsy();
        expect(result.text).toMatchInlineSnapshot(`
          "# Button Props

          ## Props

          | Prop | Type | Default |
          |------|------|---------|
          | variant | string | 'filled' |
          | disabled | boolean | false |
          "
        `);
    });

    it('returns a fallback message for a component without a Props section', () => {
        const result = getComponentProps(componentMap, 'Modal');
        expect(result.isError).toBeFalsy();
        expect(result.text).toMatchInlineSnapshot(`
          "# Modal Props

          _No props documentation available._"
        `);
    });

    it('looks up components case-insensitively', () => {
        const lower = getComponentProps(componentMap, 'button');
        const upper = getComponentProps(componentMap, 'BUTTON');
        expect(lower.text).toBe(upper.text);
    });

    it('does not include sections after Props', () => {
        const result = getComponentProps(componentMap, 'Button');
        expect(result.text).not.toContain('## Usage');
    });
});
