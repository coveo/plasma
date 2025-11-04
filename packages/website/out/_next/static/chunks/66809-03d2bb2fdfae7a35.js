(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [66809],
    {
        66809: function (e, t, n) {
            'use strict';
            n.d(t, {
                X: function () {
                    return F;
                },
            });
            var o = n(52071),
                a = n(88966),
                i = n(29145),
                s = n(53520),
                r = n(97458),
                l = n(15084),
                c = n(52983),
                d = n(72321),
                h = n(19303),
                u = n(4778),
                p = n(28934),
                m = n(95967),
                f = n.n(m),
                b = function (e) {
                    var t = e.children,
                        n = e.className,
                        o = e.ariaLabel,
                        a = e.href;
                    return (0, r.jsxs)('a', {
                        href: a,
                        'aria-label': o,
                        target: '_blank',
                        className: (0, p.Z)('github-button inline-flex flex-center p1', n),
                        rel: 'noopener noreferrer',
                        children: [
                            (0, r.jsx)('img', {src: f(), width: 16, height: 16, className: 'mr1'}),
                            (0, r.jsxs)('span', {
                                className: 'body-m',
                                children: [t, (0, r.jsx)(u.ExternalSize16Px, {className: 'ml1'})],
                            }),
                        ],
                    });
                },
                g = n(94807),
                y = new Map();
            !(function (e) {
                e.keys().forEach(function (t) {
                    var n = (0, s._)(/.*\/(\w+)\.md$/.exec(t), 2)[1];
                    y.set(n, e(t).default);
                });
            })(n(7263));
            var v = {
                    exists: function (e) {
                        return y.has(e);
                    },
                    get: function (e) {
                        return y.get(e);
                    },
                },
                x = function (e) {
                    var t = e.level,
                        n = e.children,
                        s = (0, i._)(e, ['level', 'children']);
                    return (0, r.jsx)(
                        'h'.concat(t + 3),
                        (0, a._)((0, o._)({}, s), {className: 'body-m my1', children: n}),
                    );
                },
                w = {
                    h1: function (e) {
                        var t = e.children;
                        return (0, r.jsx)('h1', {className: 'h4-book mt5 mb1', children: t});
                    },
                    h2: function (e) {
                        var t = e.children;
                        return (0, r.jsx)('h2', {className: 'h6 mt2 mb1', children: t});
                    },
                    h3: x,
                    h4: x,
                    h5: x,
                    h6: x,
                    table: function (e) {
                        var t = e.children;
                        return (0, r.jsx)('table', {className: 'table my2', children: t});
                    },
                    ul: function (e) {
                        var t = e.children;
                        return (0, r.jsx)('ul', {className: 'list-disc mt1', children: t});
                    },
                    ol: function (e) {
                        var t = e.children;
                        return (0, r.jsx)('ol', {className: 'list-decimal mt1', children: t});
                    },
                    a: function (e) {
                        var t = e.title,
                            n = e.href,
                            s = e.children,
                            l = (0, i._)(e, ['title', 'href', 'children']);
                        return (0, r.jsx)(g.ua7, {
                            title: t || '',
                            children: (0, r.jsx)(
                                'a',
                                (0, a._)(
                                    (0, o._)(
                                        {target: n && n.match(/^http/) ? '_blank' : '', className: 'link', href: n},
                                        l,
                                    ),
                                    {children: s},
                                ),
                            ),
                        });
                    },
                    strong: function (e) {
                        var t = e.children;
                        return (0, r.jsx)('strong', {className: 'body-m', children: t});
                    },
                    em: function (e) {
                        var t = e.children;
                        return (0, r.jsx)('em', {className: 'body-m-book-italic', children: t});
                    },
                    hr: function () {
                        return (0, r.jsx)('hr', {className: 'my3'});
                    },
                },
                k = function (e) {
                    var t = e.id;
                    return (0, r.jsx)(l.W20, {
                        fluid: !0,
                        children: v.exists(t)
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(d.D, {remarkPlugins: [h.Z], components: w, children: v.get(t)}),
                                      (0, r.jsx)(b, {
                                          href: 'https://github.com/coveo/plasma/edit/master/packages/website/docs/'.concat(
                                              t,
                                              '.md',
                                          ),
                                          ariaLabel: 'Edit guidelines on GitHub',
                                          className: 'my5',
                                          children: 'Edit guidelines',
                                      }),
                                  ],
                              })
                            : (0, r.jsxs)('div', {
                                  className: 'mt5',
                                  children: [
                                      (0, r.jsxs)('p', {
                                          children: [
                                              'No guidelines exist for ',
                                              (0, r.jsx)('span', {className: 'body-m', children: t}),
                                              ' yet.',
                                          ],
                                      }),
                                      (0, r.jsx)(b, {
                                          href: 'https://github.com/coveo/plasma/new/master/packages/website/docs?filename=docs/'.concat(
                                              t,
                                              '.md',
                                          ),
                                          ariaLabel: 'Create guidelines on GitHub',
                                          className: 'my5',
                                          children: 'Create guidelines',
                                      }),
                                  ],
                              }),
                    });
                },
                j = n(37791),
                T = function (e) {
                    var t = e.title,
                        n = e.description,
                        o = e.thumbnail,
                        a = e.section,
                        i = e.sourcePath;
                    return (0, r.jsxs)(l.h4i, {
                        description: (0, r.jsx)('span', {'data-coveo-field': 'description', children: n}),
                        children: [
                            (0, r.jsx)(l.h4i.Breadcrumbs, {
                                children: (0, r.jsx)(l.xvT, {color: 'gray.6', children: a}),
                            }),
                            (0, r.jsx)('span', {'data-coveo-field': 'title', children: t}),
                            (0, r.jsx)(l.h4i.Actions, {
                                children: (0, r.jsxs)(l.Kqy, {
                                    spacing: 'sm',
                                    align: 'flex-end',
                                    children: [
                                        i &&
                                            (0, r.jsx)(b, {
                                                ariaLabel: 'View source code on GitHub',
                                                href: 'https://github.com/coveo/plasma/blob/master'.concat(i),
                                                children: 'View source',
                                            }),
                                        (0, r.jsx)(l.xuv, {
                                            sx: {maxWidth: 264},
                                            children: (0, r.jsx)(j.n, {thumbnail: o}),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                },
                I = function (e) {
                    var t = e.propsMetadata,
                        n = void 0 === t ? [] : t;
                    return n.length < 1
                        ? (0, r.jsx)('p', {children: 'This component has no props.'})
                        : (0, r.jsx)('div', {
                              className: 'props-table',
                              children: (0, r.jsxs)('table', {
                                  className: 'full-content-x',
                                  children: [
                                      (0, r.jsx)('thead', {
                                          className: 'body-m',
                                          children: (0, r.jsxs)('tr', {
                                              children: [
                                                  (0, r.jsx)('th', {children: 'Name'}),
                                                  (0, r.jsx)('th', {children: 'Type'}),
                                                  (0, r.jsx)('th', {children: 'Default'}),
                                                  (0, r.jsx)('th', {children: 'Description'}),
                                              ],
                                          }),
                                      }),
                                      (0, r.jsx)('tbody', {
                                          children: n.sort(S).map(function (e) {
                                              var t = e.name,
                                                  n = e.type,
                                                  o = e.description,
                                                  a = e.optional,
                                                  i = e.deprecation,
                                                  s = e.defaultValue,
                                                  c = e.params;
                                              return (0, r.jsxs)(
                                                  'tr',
                                                  {
                                                      children: [
                                                          (0, r.jsxs)('td', {
                                                              children: [
                                                                  (0, r.jsx)(l.EKh, {children: t}),
                                                                  a
                                                                      ? null
                                                                      : (0, r.jsx)('span', {
                                                                            className: 'body-s-book-italic-subdued ml2',
                                                                            children: 'required',
                                                                        }),
                                                                  null !== i
                                                                      ? (0, r.jsx)('span', {
                                                                            className: 'body-s-book-italic-subdued ml2',
                                                                            children: 'deprecated',
                                                                        })
                                                                      : null,
                                                              ],
                                                          }),
                                                          (0, r.jsx)('td', {
                                                              children: (0, r.jsx)(l.EKh, {children: n}),
                                                          }),
                                                          (0, r.jsx)('td', {
                                                              children: s ? (0, r.jsx)(l.EKh, {children: s}) : null,
                                                          }),
                                                          (0, r.jsx)('td', {
                                                              className: 'py1',
                                                              children: (0, r.jsxs)(l.xvT, {
                                                                  size: 'sm',
                                                                  children: [
                                                                      null !== i && (0, r.jsx)('div', {children: i}),
                                                                      o,
                                                                      (null == c ? void 0 : c.length) > 0 &&
                                                                          (0, r.jsx)('ul', {
                                                                              children: c.map(function (e) {
                                                                                  var t = e.parameterName,
                                                                                      n = e.text;
                                                                                  return (0, r.jsxs)(
                                                                                      'li',
                                                                                      {
                                                                                          children: [
                                                                                              (0, r.jsx)('span', {
                                                                                                  className: 'code',
                                                                                                  children: t,
                                                                                              }),
                                                                                              (0, r.jsx)('span', {
                                                                                                  className: 'mx1',
                                                                                                  children: '–',
                                                                                              }),
                                                                                              n,
                                                                                          ],
                                                                                      },
                                                                                      t,
                                                                                  );
                                                                              }),
                                                                          }),
                                                                  ],
                                                              }),
                                                          }),
                                                      ],
                                                  },
                                                  t,
                                              );
                                          }),
                                      }),
                                  ],
                              }),
                          });
                },
                S = function (e, t) {
                    return e.optional === t.optional ? 0 : e.optional ? 1 : -1;
                },
                F = function (e) {
                    var t = e.id,
                        n = e.title,
                        s = e.description,
                        c = e.thumbnail,
                        d = e.section,
                        h = e.children,
                        u = e.sourcePath,
                        p = (0, i._)(e, [
                            'id',
                            'title',
                            'description',
                            'thumbnail',
                            'section',
                            'children',
                            'sourcePath',
                        ]);
                    return (0, r.jsx)(l.mQc, {
                        defaultValue: 'implementation',
                        styles: {tabsList: {borderBottom: 'none'}, root: {display: 'flex', height: '100%'}},
                        children: (0, r.jsxs)(l.Kqy, {
                            spacing: 0,
                            align: 'stretch',
                            sx: {flexBasis: 'auto', flexGrow: 1},
                            children: [
                                (0, r.jsxs)(l.W20, {
                                    size: 'xl',
                                    w: '100%',
                                    children: [
                                        (0, r.jsx)(T, {
                                            sourcePath: u,
                                            section: d,
                                            thumbnail: c,
                                            title: n,
                                            description: s,
                                        }),
                                        (0, r.jsxs)(l.mQc.List, {
                                            pl: 'xl',
                                            children: [
                                                (0, r.jsx)(l.mQc.Tab, {
                                                    value: 'implementation',
                                                    children: 'Implementation',
                                                }),
                                                (0, r.jsx)(l.mQc.Tab, {value: 'guide', children: 'Guidelines'}),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(l.izJ, {}),
                                (0, r.jsx)(l.xuv, {
                                    bg: 'gray.0',
                                    sx: {flexBasis: 'auto', flexGrow: 1},
                                    children: (0, r.jsxs)(l.W20, {
                                        size: 'xl',
                                        children: [
                                            (0, r.jsx)(l.mQc.Panel, {
                                                value: 'implementation',
                                                children: (0, r.jsx)(A, (0, a._)((0, o._)({id: t}, p), {children: h})),
                                            }),
                                            (0, r.jsx)(l.mQc.Panel, {value: 'guide', children: (0, r.jsx)(k, {id: t})}),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                A = function (e) {
                    var t = e.demo,
                        n = e.examples,
                        a = e.id,
                        i = e.relatedComponents,
                        d = e.withPropsTable,
                        h = e.propsMetadata,
                        u = e.children;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            t &&
                                (0, r.jsx)('div', {
                                    className: 'plasma-page-layout__main-code plasma-page-layout__section',
                                    children: t,
                                }),
                            (void 0 === d || d) &&
                                (0, r.jsxs)('div', {
                                    className: 'plasma-page-layout__section',
                                    children: [
                                        (0, r.jsx)('h4', {className: 'h2 mb1', children: 'Props'}),
                                        (0, r.jsx)(I, {propsMetadata: h}),
                                    ],
                                }),
                            n &&
                                (0, r.jsxs)('div', {
                                    className: 'plasma-page-layout__section',
                                    children: [
                                        (0, r.jsx)('h4', {className: 'h2 mb5', children: 'Examples'}),
                                        (0, r.jsx)(l.Kqy, {
                                            children: Object.entries(n).map(function (e) {
                                                var t = (0, s._)(e, 2),
                                                    n = t[0],
                                                    o = t[1];
                                                return (0, r.jsx)(c.Fragment, {children: o}, a + n);
                                            }),
                                        }),
                                    ],
                                }),
                            i &&
                                i.length > 0 &&
                                (0, r.jsxs)('div', {
                                    className: 'plasma-page-layout__section',
                                    children: [
                                        (0, r.jsx)('h4', {className: 'h2 mb5', children: 'Related Components'}),
                                        i.map(function (e) {
                                            return (0, r.jsx)(j.n, (0, o._)({}, e), e.title);
                                        }),
                                    ],
                                }),
                            u,
                        ],
                    });
                };
        },
        65830: function (e, t, n) {
            'use strict';
            (n.r(t),
                (t.default =
                    '# Best Practices\n\nUse an actionable item when your page offers actions that are of secondary importance and that don\'t need to be displayed directly on the page.\n\nAn actionable item must be displayed upon the click of a button.\n\nAn actionable item must be contextual and suited to the user\'s needs based on their selection.\n\nUse a divider line to divide actions into logical groups.\n\n## Labeling\n\nKeep labels short, preferably **under three words**. Use trigger words to clearly indicate the action performed by the button. A trigger word is typically a verb that influences users into clicking due to its specificity. For example, use "View profile" rather than "Open profile", and "Create playlist" rather than "Save".\n\nThe first word of the label should be a verb. If adding a noun is required for context, avoid including an article. For example, write "Add filter" rather than "Add a filter".\n'));
        },
        2776: function (e, t, n) {
            'use strict';
            (n.r(t),
                (t.default =
                    '# Best Practices\n\nThe button label should allow users to **foresee what will happen** when clicking them.\n\nAvoid multiplying buttons within a page. A page should have **only one primary action button**. If several secondary action buttons are required, consider using [actionable items](https://plasma.coveo.com/form/ActionableItem) instead.\n\n# Labeling\n\nKeep labels short, preferably **under three words**.\nUse **trigger words** to clearly indicate the action performed by the button. A trigger word is typically a verb that influences users into clicking due to its specificity. For example, use "View profile" rather than "Open profile", and "Create playlist" rather than "Save".\n\nThe first word of the label should be a verb. If adding a noun is required for context, avoid including an article. For example, write "Add filter" rather than "Add a filter", but write "Save" and "Cancel".\n\nWhen using a button to have users confirm the action to execute, use an active word to **clearly state the resulting action**. For instance, if users must confirm the deletion of a file, write "Delete" and "Cancel" rather than "Yes" and "No".\n\n# Order of Buttons\n\nWhen using a group of related buttons, such as for the "Save" and "Cancel" actions, always put **the primary button to the right** and the secondary to the left of the primary button.\n\nIn such case, the primary button must correspond to an action that moves the user forward through their journey or to the main action that the user should take.\n\nFor example, in the [Sticky footer](https://plasma.coveo.com/layout/StickyFooter) of a page where the user edits a configuration, order buttons as follows: "Cancel" (secondary), then "Save" (primary).\n\nSimilarly, in the footer of a [modal wizard](https://plasma.coveo.com/layout/ModalWizard), navigation buttons must be ordered as follows: "Previous" (secondary), then "Next" (primary). At the last step, the “Next” button must be replaced with a primary button with a label indicating the resulting action. For example, an appropriate label would be “Add filter” rather than “Save”.\n\nIn a [page header](https://plasma.coveo.com/layout/PageHeader), **the primary button should appear on the left** and the secondary button should be to the right of the primary button. The primary action usually relates to the creation of new elements, while secondary actions are usually used to trigger troubleshooting or management actions, such as activity review. If multiple secondary actions are required, group them using an [actionable item](https://plasma.coveo.com/form/ActionableItem) on the rightmost side of the header.\n\n# Variants\n\n| **Type**                         | **Purpose**                                                                                                                                                                                                                                                                                                                                                                                                                          |\n| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |\n| **Primary**                      | A primary button draws the users\' attention to the main action. There should be only one primary button per section or page.                                                                                                                                                                                                                                                                                                         |\n| **Secondary**                    | A secondary button triggers an action of lesser importance. Multiple secondary buttons may trigger actions of similar importance.                                                                                                                                                                                                                                                                                                    |\n| **Icon + label**                 | Add a icon left of the label to clarify the action or draw attention to the button. Ensure the icon is highly recognizable.                                                                                                                                                                                                                                                                                                          |\n| **Label + icon**                 | Add an icon right of the label to indicate that additional options are available when clicking the button. This indicates that clicking the button doesn\'t immediately trigger the action. Instead, a menu overlay is displayed, allowing users to select the exact action to be performed. For example, use a label and an icon on the right when the action is "Create" and options are to create from a template or a blank file. |\n| **Icon only**                    | When space is an issue or when the icon is highly and instantly recognizable, an icon alone may suffice. For instance, the "Settings" button is commonly presented using a cog icon. However, you should never use an icon-only button for primary actions.                                                                                                                                                                          |\n| **Append and prepend separator** | Adding a separator is an aesthetic choice typically made when multiple buttons are stacked vertically. Use a separator to align the icon to the right or left of the button. All buttons must have the same width when vertically stacked.                                                                                                                                                                                           |\n\n# Feedback and Validation\n\nWhen the label is hidden, add a tooltip displaying the action.\n\n# Related Components\n\nIf your use case doesn\'t match the guidelines above, consider using one of the following components instead:\n\n-   [Link](https://plasma.coveo.com/foundations/Links) - When you need to redirect users to another section or website.\n-   [Actionable items](https://plasma.coveo.com/form/ActionableItem) - When you need to group several less important actions together.\n'));
        },
        56164: function (e, t, n) {
            'use strict';
            (n.r(t),
                (t.default =
                    '# Best Practices\n\nUse checkboxes so that users can select one or more options from a list, or none at all.\n\nUse a stand-alone checkbox to toggle a single option on/off if the result is not immediately visible, e.g., when a final confirmation from the user is required to apply changes.\n\nConversely, if the result is applied immediately, such as a change of display, use a [Toggle](https://plasma.coveo.com/form/FlatSelect) instead.\n\nAim for seven or less options. If that\'s impossible, consider breaking your set of options into several smaller logical sets or consider using [Multi select](https://plasma.coveo.com/form/MultiSelect) instead.\n\nList options in alphanumerical order unless a more suited ordering rationale applies, for example when listing size or security level options. If no rationale stands out, place options in alphanumerical order.\n\n# Labeling\n\nKeep titles and labels short, preferably **under three words**.\n\n## Title\n\nAlways use a title when offering multiple options.\n\nProvide a descriptive title without action verbs. For example, write "Grocery items" rather than "Select all grocery items".\n\nFor a stand-alone checkbox, the title is optional. Use a title only if you need to dissociate the stand-alone checkbox from other adjacent checkboxes.\n\n## Labels\n\nLabels identify each option and should be self-explanatory.\n\nUse a consistent writing style for all options in the list.\n\nFor a stand-alone checkbox, use a positive and active wording that clearly indicates what happens if the checkbox is selected. For example, write "Send me a text notification" rather than "Email notification".\n\n# Help Text and Instructions\n\nInstructions provide more context on the outcome of the choice to make. Use it sparingly, only when it is critical to the user\'s understanding.\n\n# Feedback and Validation\n\nIf there is a maximum number of options that users can select, indicate it in a description.\n\nIf an option is recommended or the default, indicate it in its label.\n\nThe partially selected state is only allowed with checkboxes that have children options. A partially selected parent checkbox indicates that only some of its children options are selected.\n\n# Related Components\n\nIf your use case doesn\'t match the guidelines above, consider using one of the following components instead:\n\n-   [Multi select](https://plasma.coveo.com/form/MultiSelect) - When there are more than seven options.\n-   [Toggle](https://plasma.coveo.com/form/FlatSelect) - When the result applies immediately, for example with a change of display.\n-   [Radio button](https://plasma.coveo.com/form/RadioButton) - When options are mutually exclusive.\n'));
        },
        70802: function (e, t, n) {
            'use strict';
            (n.r(t),
                (t.default =
                    '# Guidelines\n\nDisplay only one Child Form at a time in a given option set.\nIf the user navigates between options within the set, keep track of their previously selected Child Form values, so that they can retrieve those values when reactivating the corresponding parent options. The unselected Child Form contents can be cleared once the form is saved.\n\n# Related Components\n\n-   [Checkbox](https://plasma.coveo.com/form/Checkbox)\n-   [Radio Buttons](https://plasma.coveo.com/form/RadioButton)\n'));
        },
        56097: function (e, t, n) {
            'use strict';
            (n.r(t),
                (t.default =
                    '# Best Practices\n\nA code editor displays code snippets that users can review or edit.\n\nBe **extremely careful** when allowing users to edit code, as it greatly increases the risk of errors. Provide a code editor only when its expected users are well-informed developers.\n\nThe code editor should:\n\n-   Preferably take the full width of the section it appears in to reduce line wrap friction.\n-   Be long enough to display a significant portion of the code and allow users to review it comfortably.\n\n## Labeling\n\nKeep titles short, preferably **under three words**.\nProvide a descriptive title without action verbs. For example, write "Plugin script" rather than "Write a script".\n\n## Help Text and Instructions\n\nHelp text should explain how or where the code is used, or provide external references regarding the programming language to use.\nHelp text should be **short, preferably on one line**.\n\nA placeholder should provide a **temporary example** when the code editor is empty. Add a placeholder only if a short example can allow users to get started without referring to external resources.\n\n## Feedback and Validation\n\nCode editors support syntax formatting and basic programming language validation.\n\nMost of the code validation takes place once changes are saved. Writing proper error messages is important to help users troubleshoot their own errors.\nConsider providing links to troubleshooting documentation in error messages.\n\nIf possible, consider adding a way for users to test their code before moving on through their journey. For instance, adding a button to test a script before saving it is a good practice.\n\n## Related Components\n\nIf your use case doesn\'t match the guidelines above, consider using one of the following components instead:\n\n-   [JSON editor](https://plasma.coveo.com/form/JSONEditor) - When the user needs to input code using JSON syntax.\n'));
        },
        82112: function (e, t, n) {
            'use strict';
            (n.r(t),
                (t.default =
                    '# Guidelines\n\nWhenever possible, provide ready-made selections of the most contextually relevant values (e.g., last week, last month, etc.).\n\n# Variations\n\nThe choice of date picker type depends on the input you want to submit and on the precision required.\n\n| Type                | Purpose                                                                                          |\n| ------------------- | ------------------------------------------------------------------------------------------------ |\n| Single\xa0date         | Used to select a specific day.                                                                   |\n| Date\xa0range          | Used to select a period of time, ranging from one to multiple days.                              |\n| With time\xa0selection | _Single date_ and _date range_ pickers can be configured to allow for hour and minute selection. |\n'));
        },
        43810: function (e, t, n) {
            'use strict';
            (n.r(t),
                (t.default =
                    "# Best Practices\n\nA flat select allows users to select a single value among multiple options.\n\nAll options must have the same width.\n\nAim for five or less options.\n\nThe effect of the flat select must be immediately visible. For example, a display could change according to the user's selection. If not, consider using a drop-down menu, radio buttons, or checkboxes instead.\n\nYou can offer a flat select as a way to switch views, but tabs should be preferred whenever possible. If you do use a flat select for this purpose, ensure that it makes sense in the hierarchy of information of the page. See [Flat Select and Tabs](https://github.com/coveo/plasma/blob/master/packages/website/docs/FlatSelectConnected.md#flat-select-and-tabs) for details.\n\n## Labeling\n\n-   Keep titles short, preferably **under three words**.\n-   Make option labels consistent and easy to scan.\n\n## Flat Select and Tabs\n\nThe flat select component shares similarities with the toggle switch and the tab set.\n\nThe flat select and the tab set look similar and are both designed for view switching. However, flat select are suitable for view switching within a pane, whereas tabs are rather used as a navigational control, i.e., moving from one screen to another.\n\n## Related Components\n\n-   [Radio buttons](https://plasma.coveo.com/form/RadioButton) - When the result doesn't apply immediately.\n-   [Single select](https://plasma.coveo.com/form/SingleSelect) - Alternative to a flat select in the context of a form.\n-   [Tabs](https://plasma.coveo.com/navigation/Tabs) - When in a navigational control context.\n"));
        },
        49273: function (e, t, n) {
            'use strict';
            (n.r(t),
                (t.default =
                    "# Logo use\n\nSince Plasma is open-source, we mustn't add any copyright logos due to the nature of public availability and the potential for misuse in which Coveo may be held responsible. Any logos created by Coveo, or that are copyright free can be added to Plasma.\n\n**For copyrighted logos, we must use the `svgChild` attribute and host the logo in a private repository.**\n"));
        },
        7315: function (e, t, n) {
            'use strict';
            (n.r(t),
                (t.default =
                    '# Best Practices\n\nUse a Multi select for when users need to **filter and select options from a long list**. A Multi select is especially appropriate when the available list of options is very long or when space is limited.\n\nList options in alphanumerical order unless a more suited ordering rationale applies. For example, when listing size (large to small) or security level options (full access to limited access).\n\nWhen a list contains 20 or more options, include the ability to filter them.\n\n# Labeling\n\nKeep titles and labels short, preferably **under three words**.\n\n## Title\n\nThe title should indicate the type of information to provide.\n\nProvide a descriptive title without action verbs. For example, write "Grocery list" rather than "Select the desired items".\n\n## Labels\n\nLabels identify each option and should be self-explanatory. The width of the input should allow to fully display the label of the selected option.\n\nUse a consistent writing style for all options in the list.\n\n# Help Text and Instructions\n\nThe placeholder text should indicate the type of information to select. Use an action verb. For example, write "Select an ingredient" rather than "Select an option".\n\n# Feedback and Validation\n\nAllow the addition of custom values only when it doesn\'t increase the risk of failure and when there\'s a possibility that not all available options are listed.\n\nExamples:\n\n-   When users select countries: do not allow custom values.\n-   When users build a grocery list: allow custom values so that users can request new products that may not be on the list yet.\n\n# Related Components\n\nIf your use case doesn\'t match the guidelines above, consider using one of the following components instead:\n\n-   [Multiline box](https://plasma.coveo.com/form/MultilineBox) - When space is not an issue or when legibility of the selected option is critical.\n-   [Checkbox](https://plasma.coveo.com/form/Checkbox) - When there are seven options or less.\n-   [Single select](https://plasma.coveo.com/form/SingleSelect) - When users can select only one option from the list.\n'));
        },
        79784: function (e, t, n) {
            'use strict';
            (n.r(t),
                (t.default =
                    '# Best Practices\n\nA multiline box allows users to **add multiple inputs or multiple series of inputs, each on a different line**.\n\nInputs can be combined into a series to form a more complex input.  \nText elements can also be included when an input or series requires more explanation.\n\nA multiline box works best when the sequence of inputs is identical on all lines.\nDon\'t use the multiline box to group inputs that have no connection to one another.\n\nOnly offer the drag and drop feature when the order of the inputs or series is important.\nIn such case, the inputs/series must always be presented in the order set by the user.\n\n# Labeling\n\nKeep titles short, preferably **under three words**.\n\nIf the list of inputs is very simple, provide a descriptive title without action verbs.  \nFor example, write "Email list" rather than "Provide a list of emails”.\n\nIf the series of inputs is complex, consider using a title with an action verb to clarify the outcome of the choice to make.  \nFor example, write “Show content that matches..." instead of "Filter rules”.\n\nYou may choose to use a dialog approach with the labels. For example, you could have: "Among all items matching... [condition1] Show only the items with... [condition2]". In such case, consider the other inputs in the form so that your approach is coherent with all inputs.\n\n# Help Text and Instructions\n\nAvoid adding help text or instructions for each individual input that appears in a series.\nInstead, provide brief instructions above the multiline box to explain the inputs in the series.\n\n# Feedback and Validation\n\nEnsure that all inputs on the first line are **complete and valid** before allowing the addition of a new line.\n\nIf the multiline box is optional, don\'t show an empty first line. Users should add it manually if they need it.\nIf users must fill at least one line, the first line should be visible and users should not be allowed to delete it.\n\n**Let users add new lines manually** rather than automating the process. This pevents submitting forms that contain empty lines.\n\nWhen each line has a series of inputs of variable width, ensure line width allows vertical alignment of the delete buttons.\n\n# Related Components\n\nWhen the user must select one or more options from a single list, consider using a [multi select](https://plasma.coveo.com/form/MultiSelect) instead.\nDon\'t use a multiline box to group inputs that have no connection to one another. Use a custom form layout instead. For example, if you want a user to provide their name and email address, just provide two text inputs. However, if you want them to provide the name and email address of several people, use a multiline box and show the name and email inputs on one line for each person.\n'));
        },
        90023: function (e, t, n) {
            'use strict';
            (n.r(t),
                (t.default =
                    '# Best Practices\n\nUse a numeric input to allow users to make **small and precise incremental changes**.\n\nA numeric input is especially appropriate when users must select a value within a short range. If your range has no limit, or if the limit is arbitrary, consider removing the incremental stepper.\n\nA numeric input should be wide enough to display the maximum number of digits a value can have.\n\n# Labeling\n\nKeep labels short, preferably **under three words**.\n\nProvide a descriptive title without action verbs. For example, write "Price" rather than "Enter a price".\n\n# Help Text and Instructions\n\nIf the required value must be within a range, consider indicating the minimum and maximum values, or only one of them, in a help text (e.g., "Maximum of 20").\n\n# Feedback and Validation\n\nIdeally, the value to enter in a numerical input should be an integer. If you expect users to frequently enter decimals, **show the decimal point** in the default value (e.g.:, "20.0") to indicate the accepted format.\n\nDisplay a validation message when users enter a value outside of the expected range. This message should include the maximal and minimal values accepted.\n\nDetermine the stepper increment relative to the range. An increment of 10% is generally acceptable. For instance, if the range is 1-10, the increments should be of 1. If the range is 1-5000, increments of 500 would be acceptable.\n\n---\n\n# Related Components\n\n[Slider](https://plasma.coveo.com/form/Slider) - When value precision is unimportant.\n'));
        },
        12950: function (e, t, n) {
            'use strict';
            (n.r(t),
                (t.default =
                    '# Best Practices\n\nUse radio buttons when users need to select a single option from a short list.\n\nRadio buttons always come in a set of two or more options.\n\nWhen presenting only two options,\n\n-   For an on/off choice, use a [Toggle](https://plasma.coveo.com/form/FlatSelect). Example: Enable dark mode.\n-   For a yes/no choice, such as opt in/out, use a stand-alone [Checkbox](https://plasma.coveo.com/form/Checkbox). Example: Receive email notification.\n-   When it’s neither, use a radio button. Examples: Choose between red or blue.\n\nAim for seven or less options. If that\'s impossible, consider using the [Single select](https://plasma.coveo.com/form/SingleSelect) instead.\n\nSort options by most relevant, unless a more suited ordering rationale applies. For example, when listing size (large to small) or security level options (full access to limited access). If no rationale stands out, place options in alphanumerical order.\n\n# Labeling\n\nKeep titles and labels short, preferably **under three words**.\n\n## Title\n\nA set of radio buttons must have a title that identifies the type of options available.\n\nProvide a descriptive title without action verbs. For example, write "Print layout" rather than "Select a print layout".\n\n## Labels\n\nLabels identify each option and should be self-explanatory.\n\nUse a consistent writing style for all options in the list.\n\n# Feedback and Validation\n\nAlways preselect an option as the default. The default option can identify:\n\n-   The recommended path when you want to assist the user.\n-   The most commonly selected option when you want to help expedite the task.\n    If preselecting a default option increases the risk of irreversible changes or security issues, always use the least risky option as the default.\n\nWhen the user needs to be able to easily revert to the default option, for instance when testing configurations, add “(recommended)” or “(default)” to the appropriate option label.\n\nIf the choice is optional, add a neutral option (e.g., "None") so the user can explicitly choose to not select any option.\n\n# Related Components\n\nIf your use case doesn\'t match the guidelines above, consider using one of the following components instead:\n\n-   [Single select](https://plasma.coveo.com/form/SingleSelect) - When there are more than seven options.\n-   [Toggle](https://plasma.coveo.com/form/FlatSelect) - When the options are binary (e.g., on/off).\n-   [Checkbox](https://plasma.coveo.com/form/Checkbox) - When the user can chose any number of options (from none to all of them).\n'));
        },
        4793: function (e, t, n) {
            'use strict';
            (n.r(t),
                (t.default =
                    '# Best Practices\n\nUse a single select to have users **filter options from a long list and select only one**. A single select is especially appropriate when the list of available options is very long or when the space is limited.\n\nList options in alphanumerical order unless a more suited ordering rationale applies, for example when listing size or security level options.\n\nAlways include the ability to filter options when the list contains 20 or more.\n\n# Labeling\n\nKeep titles and labels short, preferably **under three words**.\n\n## Title\n\nThe title should indicate the type of information to provide.\n\nProvide a descriptive title without action verbs. For instance, write "Favorite drink" rather than "Select your favorite drink".\n\n## Labels\n\nLabels identify each option and should be self-explanatory. The width of the input should fully display the name of the selected option.\n\nUse a consistent writing style for all options in the list.\n\n# Help Text and Instructions\n\nThe placeholder text should indicate the type of information to select. Use an action verb. For example, write "Select a drink" rather than "Select an option".\n\n# Feedback and Validation\n\nAllow the addition of custom values only when it doesn\'t increase the risk of failure and when there may be options other than those listed.\n\nExamples:\n\n-   When users select a country: do not allow custom values.\n-   When users select their favorite color: allow custom values.\n\n# Related Components\n\nIf your use case doesn\'t match the guidelines above, consider using one of the following components instead:\n\n-   [Radio buttons](https://plasma.coveo.com/form/RadioButton) - When there are seven options or less.\n-   [Multi select](https://plasma.coveo.com/form/MultiSelect) - When users can select multiple options from the list.\n'));
        },
        50969: function (e, t, n) {
            'use strict';
            (n.r(t),
                (t.default =
                    '# Best Practices\n\nA slider is appropriate when providing **an exact value is not important**. Sliders typically allow users to adjust the intensity of an effect, such as a percentage of opacity, or when an approximate value is sufficient, for example when choosing a flight departure time. It helps visualize a range of allowed values. Consider the following:\n\n-   Use a slider when page real estate is not an issue and when visualizing the range helps users make more informed choices.\n-   The slider should have a range of up to 100 values.\n-   If the range is short (i.e., 5 values or less) or large (i.e., over 50 values), consider using a [numeric input](https://plasma.coveo.com/form/NumericInput) instead.\n\nUse sliders carefully, as they can be difficult to control on smaller devices or when the range is very large but the space is limited.\n\n## Labeling\n\nKeep marker labels short (i.e., ideally a single word).\n\nProvide a short, descriptive title without action verbs. For example, write "Thumbnail size" rather than "Select the size of the thumbnail".\n\n## Track and Markers\n\nThe track represents the value range. It should be divided into equal steps using markers.\n\nWhen exposing a numeric value is unimportant, name markers using adjectives. For instance, use “small” and “big” when making users choose the size of a thumbnail.\n\nWhen using numeric values to label markers, display the unit to provide context. For instance, show "90%" when making users select a percentage.\n\nUse plus and minus signs when the range allows negative values.\n\n## Feedback and Validation\n\nA slider always has a default value. Consider showing the most frequently selected value as the default. If no value particularly stands out, consider using a neutral value or the median. Ideally, the default value should correspond to a marker.\n\nIf users can select a numeric value between two markers, display this value above the handle or next to the slider. This allows users to refer to what they selected.\n\n---\n\n## Related Components\n\n[Numeric input](https://plasma.coveo.com/form/NumericInput) - When setting a precise value.\n'));
        },
        5126: function (e, t, n) {
            'use strict';
            (n.r(t),
                (t.default =
                    '# Best Practices\n\nText areas are ideal for **long sentences or paragraphs**.\nThey are commonly used to provide descriptions, notes, and messages when the information to enter is discretional to the user.\nThe size of the input box should **comfortably display four lines**. A scrollbar should then allow users to view any extra lines.\n\n## Labeling\n\nKeep titles short, preferably **under three words**.\nProvide a descriptive title without action verbs. For example, write "Note" rather than "Write a note".\n\n## Help Text and Instructions\n\nHelp text should explain how the input can be used or who will see it. For instance, if users should provide delivery instructions, the help text could be: "Provide instructions for the delivery agent". Help text should be **short, preferably on one line**.\nA placeholder provides a **temporary example** when the text area is empty. Use a placeholder only when showing examples of possible content is necessary to the user\'s understanding. When the text is discretional (e.g., email content), a placeholder is often unnecessary.\n\n## Feedback and Validation\n\nText areas typically accept all types of characters. Therefore, validation often only occurs due to character limits.\nWhen the character limit has been reached, the validation message should clearly state the allowed number of characters under the text area, like the text input validation.\nIf the input can be left blank, the tag “(Optional)” must appear next to the text area title.\n\n## Variants\n\n| **Type**           | **Purpose**                                                                                                                                                                                                                                                                                                                                                                                                         |\n| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| **Fixed size**     | By default, the size of the text area input box is fixed. A scrollbar automatically appears if text overflows the alloted space.                                                                                                                                                                                                                                                                                    |\n| **Drag-to-resize** | Allow users to resize the text area manually when they need to provide very long texts, such as the content of an email. Consider this option only when expecting over 500 characters or a few paragraphs. Always restrict the resizing of the text area to a maximum size based on the available space on screen. If the text overflows the alloted space (default or resized), a scrollbar automatically appears. |\n| **Autosize**       | Avoid using this option, as it is about to be deprecated. Autosize may cause undesired layout issues on screen, as the expanding area can push important information out of focus without the user\'s knowledge. Most of the time, the fixed size variant should suffice. In the rare cases where longer text is required, the drag-to-resize option is considered more appropriate.                                 |\n\n## Related Components\n\nIf your use case doesn\'t match the guidelines above, consider using one of the following components instead:\n\n-   [Text input](https://plasma.coveo.com/form/TextInput) - When users should enter no more than one line of text.\n-   [Code editor](https://plasma.coveo.com/form/CodeEditor) - When users need to enter code rather than plain text.\n'));
        },
        4477: function (e, t, n) {
            'use strict';
            (n.r(t),
                (t.default =
                    '# Best Practices\n\nUse a text input to have users enter a **short line of text**.\n\nThe width of a text input should be proportional to the expected user input and large enough to display the entire text.\n\n# Labeling\n\nKeep labels short, preferably **under three words**.\n\nProvide a descriptive title without action verbs. For example, write "Email" rather than "Enter your email".\n\n# Help Text and Instructions\n\nHelp text provides extra guidance on what information to provide or how the user should fill it in, for example when there are character restrictions.\n\nHelp text should be **short, preferably on one line**.\nThere are two ways to provide help text:\n\n-   Written instructions (e.g., "Provide your business email.")\n-   Example (e.g., "E.g., johndoe@acme.com")\n\nA combination of both is also acceptable.\n\nThe label of the text input should be self-explanatory.\nAdd a title and description when providing additional guidance is critical for the user to understand why the information is required or how the information will be used.\n\n# Feedback and Validation\n\nIf there are character restrictons, consider indicating them in the help text. Avoid relying only on the validation message to inform the user about them.\n\nIf the user provides text that doesn\'t meet the requirements, the validation message should clearly indicate how to fix it.\n\nIf providing the information is optional, the text input will be automatically tagged as such, indicating that the input can be left blank.\n\n# Related Components\n\nIf your use case doesn\'t match the guidelines above, consider using one of the following components instead:\n\n-   [Text Area](https://plasma.coveo.com/form/TextArea) - When users need to enter longer text.\n-   [Numeric input](https://plasma.coveo.com/form/NumericInput) - When only numerical characters are allowed.\n-   [Single select](https://plasma.coveo.com/form/SingleSelect) - When users need to select an option from a list instead.\n'));
        },
        53745: function (e, t, n) {
            'use strict';
            (n.r(t),
                (t.default =
                    "# Best Practices\n\n-   Only include information that is relevant to the performed action.\n-   Toasts may contain actions or links, preferably only one.\n-   Toasts should not prevent users from interacting with the page content. However, if it is unavoidable, consider using a [prompt modal](https://plasma.coveo.com/layout/ModalWindow) instead.\n\n# Variations\n\nThe result of the operation triggering the toast determines the type of toast to display.\n\n| **Type**    | **Purpose**                                                                                                                                                                                                                                         |\n| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| **Success** | Confirms if operation was successfully executed. When the toast contains a link or action, it must be dismissed manually by the user. If not, it disappears automatically.                                                                          |\n| **Warning** | Notifies users when the operation they launched may have not yet be completed, or may not have had the expected result. When the toast contains a link or action, it has to be manually dismissed by the user. If not, it disappears automatically. |\n| **Error**   | Notifies users about an unsuccessful operation. The toast **must** be manually dismissed by users so that they don't miss this critical information.                                                                                                |\n\n# Related Components\n\nIf your use case doesn't match the guidelines above, consider using one of the following components instead:\n\n-   [Prompt modal](https://plasma.coveo.com/layout/ModalWindow) - When users shouldn't be able to interact with the page content while the message is displayed.\n-   [Info box](https://plasma.coveo.com/layout/InfoBox) - When the message isn't related to an action the user has performed.\n-   [Tooltip](https://plasma.coveo.com/feedback/Tooltip) - When you want to provide additional information about an element on screen.\n"));
        },
        35018: function (e, t, n) {
            'use strict';
            (n.r(t),
                (t.default =
                    '# Do\n\n-   The text must be direct and to the point, ideally a max of 3 lines. Link to external documentation when detailed explanations are required.\n-   Tooltips must **appear in empty areas** of the screen, or on top of less relevant information.\n-   Only show **one Tooltip at a time**.\n\n# Do Not\n\n-   Use tooltips to display **required information**. Pertinent information must be presented in the regular text.\n-   Add tooltips that display the same text as what **can already be read in the interface** (e.g., a tooltip with "Print" is not necessary on a button with the label “Print”).\n-   Use tooltips for information regarding **errors or warnings**. Displaying this information is too important to depend on hovering.\n'));
        },
        7263: function (e, t, n) {
            var o = {
                './ActionableItem.md': 65830,
                './Button.md': 2776,
                './Checkbox.md': 56164,
                './ChildForm.md': 70802,
                './CodeEditor.md': 56097,
                './DatePickerDropdownConnected.md': 82112,
                './FlatSelectConnected.md': 43810,
                './Iconography.md': 49273,
                './MultiSelectConnected.md': 7315,
                './MultilineBox.md': 79784,
                './NumericInput.md': 90023,
                './RadioSelectConnected.md': 12950,
                './SingleSelectConnected.md': 4793,
                './Slider.md': 50969,
                './TextArea.md': 5126,
                './TextInput.md': 4477,
                './Toast.md': 53745,
                './Tooltip.md': 35018,
                'docs/ActionableItem.md': 65830,
                'docs/Button.md': 2776,
                'docs/Checkbox.md': 56164,
                'docs/ChildForm.md': 70802,
                'docs/CodeEditor.md': 56097,
                'docs/DatePickerDropdownConnected.md': 82112,
                'docs/FlatSelectConnected.md': 43810,
                'docs/Iconography.md': 49273,
                'docs/MultiSelectConnected.md': 7315,
                'docs/MultilineBox.md': 79784,
                'docs/NumericInput.md': 90023,
                'docs/RadioSelectConnected.md': 12950,
                'docs/SingleSelectConnected.md': 4793,
                'docs/Slider.md': 50969,
                'docs/TextArea.md': 5126,
                'docs/TextInput.md': 4477,
                'docs/Toast.md': 53745,
                'docs/Tooltip.md': 35018,
            };
            function a(e) {
                return n(i(e));
            }
            function i(e) {
                if (!n.o(o, e)) {
                    var t = Error("Cannot find module '" + e + "'");
                    throw ((t.code = 'MODULE_NOT_FOUND'), t);
                }
                return o[e];
            }
            ((a.keys = function () {
                return Object.keys(o);
            }),
                (a.resolve = i),
                (e.exports = a),
                (a.id = 7263));
        },
    },
]);
