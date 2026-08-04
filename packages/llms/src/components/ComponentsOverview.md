---
name: Components
description: Complete list of Plasma design system components, grouped by function with library origin.
---

# Components

Components are the building blocks of the Coveo Administration Console UI. Most are based on Mantine. Some are Plasma-specific. Prefer importing from `@coveord/plasma-mantine` when available; some entries listed here may be patterns or Mantine add-ons that are not exported by Plasma.

Resources:

- Figma library: https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components?node-id=3156-836&p=f&t=RQEKGXIiw1gRK3St-0
- Confluence database: https://coveord.atlassian.net/wiki/spaces/dsys/database/5936873512

---

## Call to action and navigation

- ActionIcon [Mantine] — Icon-based button for executing actions
- Anchor [Mantine] — Hyperlink for navigation
- Breadcrumbs [Mantine] — Navigation trail showing current page location
- Button [Mantine] — Standard interactive button; includes destructive variants
- CloseButton [Mantine] — Dismiss button for modals and alerts
- CopyToClipboard [Plasma] — Copies content to system clipboard
- NavLink [Plasma] — Navigation link for sidebars/menus; includes sections
- Pagination [Mantine] — Splits large datasets into pages

## Forms and inputs

- Checkbox [Mantine] — Selection control for single or multiple items
- CodeEditor [Plasma] — Input for editing code snippets
- Collection [Plasma] — Manages lists or groups of items
- DatePickerInput [Mantine] — Input with dropdown calendar
- Facet [Plasma] — Filtering pattern for search interfaces
- MonthPickerInput [Mantine] — Input for selecting months
- MultiSelect [Mantine] — Dropdown for selecting multiple options
- NumberInput [Mantine] — Input for numerical values
- PillsInput [Mantine] — Input displaying selected values as pill tags
- Radio [Mantine] — Selection control for mutually exclusive options
- RadioCard [Plasma] — Radio selection presented as cards
- SegmentedControl [Mantine] — Two or more segments for exclusive choice
- Select [Mantine] — Dropdown for single option selection
- Slider [Mantine] — Selects a value from a range
- Switch [Mantine] — Toggle between two states
- Textarea [Mantine] — Multiline text input
- TextInput [Mantine] — Single-line text input
- TimePicker [Mantine] — Input for time selection
- YearPickerInput [Mantine] — Input for selecting years

## Feedback and status

- Alert [Mantine] — Prominent messages: info, warning, critical
- InfoToken [Plasma] — Small visual indicator for contextual information
- Loader [Mantine] — Animated loading indicator
- Notification [Mantine] — Toast-style messages for updates or errors
- Progress [Mantine] — Bar indicating completion percentage
- Skeleton [Mantine] — Placeholder preview while loading
- StatusToken [Plasma] — Visual indicator for object status
- Stepper [Mantine] — Progress indicator for multi-step workflows
- Tooltip [Mantine] — Text label shown on hover

## Layout and structure

- Accordion [Mantine] — Vertically stacked collapsible sections
- AppShell [Mantine] — Main layout wrapper; includes header and navbar
- ChildForm [Plasma] — Layout pattern for nesting forms
- Footer [Plasma] — Sticky footer for page bottoms
- Header [Plasma] — Top navigation bar
- MainSidenav [Plasma] — Main side navigation
- ScrollArea [Mantine] — Container with custom scrollbars
- Tabs [Mantine] — Switches between different views

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

- ActionBar [Plasma] — Groups actions together
- Calendar [Mantine] — Visual calendar display
- Carousel [Mantine] — Slideshow for cycling content
- Chip [Mantine] — Compact element for filtering or selection
- ContentSwap [Plasma] — Toggles visible content
- Modal [Mantine] — Overlay dialog requiring user attention
- Popover [Mantine] — Floating content near a target element
