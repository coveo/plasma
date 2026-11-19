---
'@coveord/plasma-mantine': minor
---

Add the `InlineMessage` component for short, text-level contextual messages

`InlineMessage` displays a short message with an optional semantic icon, placed on its own or right next to the element it describes: beside a button, in a table cell, or as a caption under a value. It fills the gap between a `Tooltip` and an `Alert`, with no background, border, or close button.

Select the intent with the `InlineMessage.Subtle`, `Information`, `Advice`, `Warning`, `Critical`, and `Success` sub-components, which reuse the matching `InfoToken`. Warning, critical, and success messages color their text; subtle, information, and advice messages keep gray text and a colored icon (gray for subtle). A link placed after the text inherits the message color and is underlined, so it reads as part of the message whatever the application's primary color. The `tooltip` prop reveals a longer explanation on hover and keyboard focus, so the visible message can stay short. The `icon` prop accepts `null` to remove the icon or any node such as a `StatusToken` to replace it.

```tsx
import {InlineMessage, StatusToken} from '@coveord/plasma-mantine';

<InlineMessage.Warning>Renaming triggers a full rebuild.</InlineMessage.Warning>

<InlineMessage.Subtle icon={<StatusToken variant="waiting" />}>Indexing in progress</InlineMessage.Subtle>
```
