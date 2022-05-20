import {DiffViewer} from '@coveord/plasma-react';

export default () => {
    const diffText = `
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
     "splitTestEnabled" : false
`;

    return <DiffViewer difference={diffText} splitView />;
};
