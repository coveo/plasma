import {render, screen} from '@test-utils';

import {DiffViewer} from '../DiffViewer.js';

describe('DiffViewer', () => {
    const difference = `
--- PRIMARY
+++ CURRENT_STATE
@@ -3,7 +3,7 @@
   "parents" : { },
   "model" : {
     "condition" : { },
-    "description" : "Some user note",
+    "description" : "Some differences",
     "isDefault" : true,
     "name" : "default",
     "splitTestEnabled" : false`;

    it('should render an empty state component', () => {
        const {container} = render(<DiffViewer difference="" />);
        const firstChild = container.firstChild as HTMLElement;

        expect(firstChild.className).toContain('diff-viewer');
        expect(screen.getByText(/no changes/i)).toBeVisible();
    });

    it('should make a diff viewer component unified view', () => {
        const {container} = render(<DiffViewer difference={difference} />);
        const firstChild = container.firstChild as HTMLElement;
        const diffViewComponent = firstChild.firstChild as HTMLElement;

        expect(firstChild.className).toContain('diff-viewer');
        expect(diffViewComponent.className).toContain('diff diff-unified');
    });

    it('should make a diff viewer component splitted view', () => {
        const {container} = render(<DiffViewer difference={difference} splitView />);
        const firstChild = container.firstChild as HTMLElement;
        const diffViewComponent = firstChild.firstChild as HTMLElement;

        expect(firstChild.className).toContain('diff-viewer');
        expect(diffViewComponent.className).toContain('diff diff-split');
    });
});
