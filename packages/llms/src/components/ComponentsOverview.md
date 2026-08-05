---
name: Components
description: Complete list of Plasma design system components, grouped by function with library origin.
---

# Components

Components are the building blocks of the Coveo Administration Console UI. Most are based on Mantine. Some are Plasma-specific. All are imported from `@coveord/plasma-mantine`.

This categorization differs from the official Mantine documentation structure: https://mantine.dev/core/package/

Resources:

- Figma library: https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components?node-id=3156-836&p=f&t=RQEKGXIiw1gRK3St-0
- Confluence database: https://coveord.atlassian.net/wiki/spaces/dsys/database/5936873512

---

## Call to action

- ActionIcon [Mantine] — Icon-based button for executing actions
- Anchor [Mantine] — Hyperlink for navigation
- Breadcrumbs [Mantine] — Navigation trail showing current page location
- Button [Mantine] — Standard interactive button; includes destructive variants
- CloseButton [Mantine] — Dismiss button for modals and alerts
- CopyToClipboard [Plasma] — Copies content to system clipboard
- NavLink [Plasma] — Navigation link for sidebars/menus; includes sections
- Pagination [Mantine] — Splits large datasets into pages

## Forms and inputs

- TextInput [Mantine] — Single-line text input
- Textarea [Mantine] — Multiline text input
- NumberInput [Mantine] — Input for numerical values
- Select [Mantine] — Dropdown for single option selection
- MultiSelect [Mantine] — Dropdown for selecting multiple options
- PillsInput [Mantine] — Input displaying selected values as pill tags
- Checkbox [Mantine] — Selection control for single or multiple items
- Radio [Mantine] — Selection control for mutually exclusive options
- RadioCard [Plasma] — Radio selection presented as cards
- Switch [Mantine] — Toggle between two states
- SegmentedControl [Mantine] — Two or more segments for exclusive choice
- Slider [Mantine] — Selects a value from a range
- DatePickerInput [Mantine] — Input with dropdown calendar
- MonthPickerInput [Mantine] — Input for selecting months
- YearPickerInput [Mantine] — Input for selecting years
- TimePicker [Mantine] — Input for time selection
- CodeEditor [Plasma] — Input for editing code snippets
- Collection [Plasma] — Manages lists or groups of items
- Facet [Plasma] — Filtering pattern for search interfaces

## Feedback

- Alert [Mantine] — Prominent messages: info, warning, critical
- Notification [Mantine] — Toast-style messages for updates or errors
- Loader [Mantine] — Animated loading indicator
- Skeleton [Mantine] — Placeholder preview while loading
- Progress [Mantine] — Bar indicating completion percentage
- Stepper [Mantine] — Progress indicator for multi-step workflows
- Tooltip [Mantine] — Text label shown on hover
- InfoToken [Plasma] — Small visual indicator for contextual information
- StatusToken [Plasma] — Visual indicator for object status

## Layout

- AppShell [Mantine] — Main layout wrapper; includes header and navbar
- Header [Plasma] — Top navigation bar
- Navigation [Plasma] — Main side navigation
- Tabs [Mantine] — Switches between different views
- Accordion [Mantine] — Vertically stacked collapsible sections
- ScrollArea [Mantine] — Container with custom scrollbars
- ChildForm [Plasma] — Layout pattern for nesting forms
- StickyFooter [Plasma] — Sticky footer for page bottoms

## Data display

- Badge [Mantine] — Small label for status, counts, or categories
- Card [Mantine] — Container for grouping related information
- Image [Mantine] — Wrapper for displaying images
- Pill [Mantine] — Rounded visual indicator; often used in inputs
- Table [Plasma] — Rows and columns for structured data

## Typography

- Code [Mantine] — Inline or block display for code snippets
- Kbd [Mantine] — Visual representation of keyboard inputs

## Miscellaneous

- Carousel [Mantine] — Slideshow for cycling content
- Chip [Mantine] — Compact element for filtering or selection
- Modal [Mantine] — Overlay dialog requiring user attention
- Popover [Mantine] — Floating content near a target element
