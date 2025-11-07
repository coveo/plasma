import {describe, expect, it} from 'vitest';
import plasmaIconsMockPlugin from './index';

describe('plasmaIconsMockPlugin', () => {
    const plugin = plasmaIconsMockPlugin();

    describe('transform function', () => {
        it('returns null for files without @coveord/plasma-react-icons import', () => {
            const code = `import React from 'react';`;
            const result = plugin.transform?.(code, '/test/file.tsx');

            expect(result).toBeNull();
        });

        it('returns null for files in node_modules', () => {
            const code = `import { ArrowUpSize16Px } from '@coveord/plasma-react-icons';`;
            const result = plugin.transform?.(code, '/node_modules/some-package/index.js');

            expect(result).toBeNull();
        });

        it('returns null for non-JavaScript/TypeScript files', () => {
            const code = `import { ArrowUpSize16Px } from '@coveord/plasma-react-icons';`;
            const result = plugin.transform?.(code, '/test/file.css');

            expect(result).toBeNull();
        });

        it('transforms named imports to default import with property access', () => {
            const code = `import { ArrowUpSize16Px } from '@coveord/plasma-react-icons';`;
            const result = plugin.transform?.(code, '/test/file.tsx');

            expect(result).not.toBeNull();
            expect(result?.code).toMatchInlineSnapshot(`
              "import __plasmaIconsMock from '@coveord/plasma-react-icons/mock';
              const ArrowUpSize16Px = __plasmaIconsMock.ArrowUpSize16Px;
              "
            `);
        });

        it('transforms multiple named imports', () => {
            const code = `import { ArrowUpSize16Px, IconChevronDown, HomeSize24Px } from '@coveord/plasma-react-icons';`;
            const result = plugin.transform?.(code, '/test/file.tsx');

            expect(result).not.toBeNull();
            expect(result?.code).toMatchInlineSnapshot(`
              "import __plasmaIconsMock from '@coveord/plasma-react-icons/mock';
              const ArrowUpSize16Px = __plasmaIconsMock.ArrowUpSize16Px;
              const IconChevronDown = __plasmaIconsMock.IconChevronDown;
              const HomeSize24Px = __plasmaIconsMock.HomeSize24Px;
              "
            `);
        });

        it('handles multi-line named imports', () => {
            const code = `import {
                ArrowUpSize16Px,
                IconChevronDown,
                HomeSize24Px
            } from '@coveord/plasma-react-icons';`;
            const result = plugin.transform?.(code, '/test/file.tsx');

            expect(result).not.toBeNull();
            expect(result?.code).toMatchInlineSnapshot(`
              "import __plasmaIconsMock from '@coveord/plasma-react-icons/mock';
              const ArrowUpSize16Px = __plasmaIconsMock.ArrowUpSize16Px;
              const IconChevronDown = __plasmaIconsMock.IconChevronDown;
              const HomeSize24Px = __plasmaIconsMock.HomeSize24Px;
              "
            `);
        });

        it('preserves the rest of the code', () => {
            const code = `import { ArrowUpSize16Px } from '@coveord/plasma-react-icons';

const MyComponent = () => {
    return <ArrowUpSize16Px />;
};`;
            const result = plugin.transform?.(code, '/test/file.tsx');

            expect(result).not.toBeNull();
            expect(result?.code).toMatchInlineSnapshot(`
              "import __plasmaIconsMock from '@coveord/plasma-react-icons/mock';
              const ArrowUpSize16Px = __plasmaIconsMock.ArrowUpSize16Px;


              const MyComponent = () => {
                  return <ArrowUpSize16Px />;
              };"
            `);
        });

        it('ignores type-only imports', () => {
            const code = `import type { SomeType } from '@coveord/plasma-react-icons';`;
            const result = plugin.transform?.(code, '/test/file.tsx');

            expect(result).toBeNull();
        });

        it('handles mixed type and value imports', () => {
            const code = `import { ArrowUpSize16Px, type IconProps } from '@coveord/plasma-react-icons';`;
            const result = plugin.transform?.(code, '/test/file.tsx');

            expect(result).not.toBeNull();
            expect(result?.code).toMatchInlineSnapshot(`
              "import __plasmaIconsMock from '@coveord/plasma-react-icons/mock';
              const ArrowUpSize16Px = __plasmaIconsMock.ArrowUpSize16Px;
              "
            `);
        });

        it('handles multiple import statements', () => {
            const code = `import { ArrowUpSize16Px } from '@coveord/plasma-react-icons';
import { IconChevronDown } from '@coveord/plasma-react-icons';`;
            const result = plugin.transform?.(code, '/test/file.tsx');

            expect(result).not.toBeNull();
            expect(result?.code).toMatchInlineSnapshot(`
              "import __plasmaIconsMock from '@coveord/plasma-react-icons/mock';
              const ArrowUpSize16Px = __plasmaIconsMock.ArrowUpSize16Px;
              const IconChevronDown = __plasmaIconsMock.IconChevronDown;

              "
            `);
        });

        it('works with .ts files', () => {
            const code = `import { ArrowUpSize16Px } from '@coveord/plasma-react-icons';`;
            const result = plugin.transform?.(code, '/test/file.ts');

            expect(result).not.toBeNull();
            expect(result?.code).toMatchInlineSnapshot(`
              "import __plasmaIconsMock from '@coveord/plasma-react-icons/mock';
              const ArrowUpSize16Px = __plasmaIconsMock.ArrowUpSize16Px;
              "
            `);
        });

        it('handles imports with single quotes', () => {
            const code = `import { ArrowUpSize16Px } from '@coveord/plasma-react-icons';`;
            const result = plugin.transform?.(code, '/test/file.tsx');

            expect(result).not.toBeNull();
            expect(result?.code).toMatchInlineSnapshot(`
              "import __plasmaIconsMock from '@coveord/plasma-react-icons/mock';
              const ArrowUpSize16Px = __plasmaIconsMock.ArrowUpSize16Px;
              "
            `);
        });

        it('handles imports with double quotes', () => {
            const code = `import { ArrowUpSize16Px } from "@coveord/plasma-react-icons";`;
            const result = plugin.transform?.(code, '/test/file.tsx');

            expect(result).not.toBeNull();
            expect(result?.code).toMatchInlineSnapshot(`
              "import __plasmaIconsMock from '@coveord/plasma-react-icons/mock';
              const ArrowUpSize16Px = __plasmaIconsMock.ArrowUpSize16Px;
              "
            `);
        });

        it('handles whitespace variations in imports', () => {
            const code = `import { ArrowUpSize16Px, IconChevronDown } from '@coveord/plasma-react-icons';`;
            const result = plugin.transform?.(code, '/test/file.tsx');

            expect(result).not.toBeNull();
            expect(result?.code).toMatchInlineSnapshot(`
              "import __plasmaIconsMock from '@coveord/plasma-react-icons/mock';
              const ArrowUpSize16Px = __plasmaIconsMock.ArrowUpSize16Px;
              const IconChevronDown = __plasmaIconsMock.IconChevronDown;
              "
            `);
        });
    });
});
