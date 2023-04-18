import {DiffViewer} from '@coveord/plasma-react';

const Demo = () => {
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
@@ -15,22 +15,22 @@
   "parents" : { },
   "model" : {
     "condition" : { },
-    "description" : "Some user note",
+    "description" : "Some differences",
     "isDefault" : true,
     "name" : "default",
     "splitTestEnabled" : false
`;

    return <DiffViewer difference={diffText} />;
};
export default Demo;
