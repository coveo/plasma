(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [73576],
    {
        21876: function (e, t, n) {
            'use strict';
            n.d(t, {
                p: function () {
                    return ed;
                },
            });
            var r,
                a,
                o,
                s,
                i,
                l,
                u,
                c,
                p,
                d,
                g,
                f,
                b,
                m,
                h,
                y = n(44746),
                k = n(52983),
                E = (function () {
                    var e = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
                        t = 0,
                        n = {},
                        r = {
                            util: {
                                encode: function e(t) {
                                    return t instanceof a
                                        ? new a(t.type, e(t.content), t.alias)
                                        : Array.isArray(t)
                                          ? t.map(e)
                                          : t
                                                .replace(/&/g, '&amp;')
                                                .replace(/</g, '&lt;')
                                                .replace(/\u00a0/g, ' ');
                                },
                                type: function (e) {
                                    return Object.prototype.toString.call(e).slice(8, -1);
                                },
                                objId: function (e) {
                                    return (e.__id || Object.defineProperty(e, '__id', {value: ++t}), e.__id);
                                },
                                clone: function e(t, n) {
                                    var a, o;
                                    switch (((n = n || {}), r.util.type(t))) {
                                        case 'Object':
                                            if (n[(o = r.util.objId(t))]) return n[o];
                                            for (var s in ((a = {}), (n[o] = a), t))
                                                t.hasOwnProperty(s) && (a[s] = e(t[s], n));
                                            return a;
                                        case 'Array':
                                            if (n[(o = r.util.objId(t))]) return n[o];
                                            return (
                                                (a = []),
                                                (n[o] = a),
                                                t.forEach(function (t, r) {
                                                    a[r] = e(t, n);
                                                }),
                                                a
                                            );
                                        default:
                                            return t;
                                    }
                                },
                                getLanguage: function (t) {
                                    for (; t; ) {
                                        var n = e.exec(t.className);
                                        if (n) return n[1].toLowerCase();
                                        t = t.parentElement;
                                    }
                                    return 'none';
                                },
                                setLanguage: function (t, n) {
                                    ((t.className = t.className.replace(RegExp(e, 'gi'), '')),
                                        t.classList.add('language-' + n));
                                },
                                isActive: function (e, t, n) {
                                    for (var r = 'no-' + t; e; ) {
                                        var a = e.classList;
                                        if (a.contains(t)) return !0;
                                        if (a.contains(r)) return !1;
                                        e = e.parentElement;
                                    }
                                    return !!n;
                                },
                            },
                            languages: {
                                plain: n,
                                plaintext: n,
                                text: n,
                                txt: n,
                                extend: function (e, t) {
                                    var n = r.util.clone(r.languages[e]);
                                    for (var a in t) n[a] = t[a];
                                    return n;
                                },
                                insertBefore: function (e, t, n, a) {
                                    var o = (a = a || r.languages)[e],
                                        s = {};
                                    for (var i in o)
                                        if (o.hasOwnProperty(i)) {
                                            if (i == t) for (var l in n) n.hasOwnProperty(l) && (s[l] = n[l]);
                                            n.hasOwnProperty(i) || (s[i] = o[i]);
                                        }
                                    var u = a[e];
                                    return (
                                        (a[e] = s),
                                        r.languages.DFS(r.languages, function (t, n) {
                                            n === u && t != e && (this[t] = s);
                                        }),
                                        s
                                    );
                                },
                                DFS: function e(t, n, a, o) {
                                    o = o || {};
                                    var s = r.util.objId;
                                    for (var i in t)
                                        if (t.hasOwnProperty(i)) {
                                            n.call(t, i, t[i], a || i);
                                            var l = t[i],
                                                u = r.util.type(l);
                                            'Object' !== u || o[s(l)]
                                                ? 'Array' !== u || o[s(l)] || ((o[s(l)] = !0), e(l, n, i, o))
                                                : ((o[s(l)] = !0), e(l, n, null, o));
                                        }
                                },
                            },
                            plugins: {},
                            highlight: function (e, t, n) {
                                var o = {code: e, grammar: t, language: n};
                                return (
                                    r.hooks.run('before-tokenize', o),
                                    (o.tokens = r.tokenize(o.code, o.grammar)),
                                    r.hooks.run('after-tokenize', o),
                                    a.stringify(r.util.encode(o.tokens), o.language)
                                );
                            },
                            tokenize: function (e, t) {
                                var n = t.rest;
                                if (n) {
                                    for (var l in n) t[l] = n[l];
                                    delete t.rest;
                                }
                                var u = new s();
                                return (
                                    i(u, u.head, e),
                                    (function e(t, n, s, l, u, c) {
                                        for (var p in s)
                                            if (s.hasOwnProperty(p) && s[p]) {
                                                var d = s[p];
                                                d = Array.isArray(d) ? d : [d];
                                                for (var g = 0; g < d.length; ++g) {
                                                    if (c && c.cause == p + ',' + g) return;
                                                    var f = d[g],
                                                        b = f.inside,
                                                        m = !!f.lookbehind,
                                                        h = !!f.greedy,
                                                        y = f.alias;
                                                    if (h && !f.pattern.global) {
                                                        var k = f.pattern.toString().match(/[imsuy]*$/)[0];
                                                        f.pattern = RegExp(f.pattern.source, k + 'g');
                                                    }
                                                    for (
                                                        var E = f.pattern || f, v = l.next, S = u;
                                                        v !== n.tail && (!c || !(S >= c.reach));
                                                        S += v.value.length, v = v.next
                                                    ) {
                                                        var w,
                                                            A = v.value;
                                                        if (n.length > t.length) return;
                                                        if (!(A instanceof a)) {
                                                            var T = 1;
                                                            if (h) {
                                                                if (!(w = o(E, S, t, m)) || w.index >= t.length) break;
                                                                var _ = w.index,
                                                                    x = w.index + w[0].length,
                                                                    R = S;
                                                                for (R += v.value.length; _ >= R; )
                                                                    R += (v = v.next).value.length;
                                                                if (
                                                                    ((R -= v.value.length),
                                                                    (S = R),
                                                                    v.value instanceof a)
                                                                )
                                                                    continue;
                                                                for (
                                                                    var O = v;
                                                                    O !== n.tail &&
                                                                    (R < x || 'string' == typeof O.value);
                                                                    O = O.next
                                                                )
                                                                    (T++, (R += O.value.length));
                                                                (T--, (A = t.slice(S, R)), (w.index -= S));
                                                            } else if (!(w = o(E, 0, A, m))) continue;
                                                            var _ = w.index,
                                                                I = w[0],
                                                                N = A.slice(0, _),
                                                                L = A.slice(_ + I.length),
                                                                F = S + A.length;
                                                            c && F > c.reach && (c.reach = F);
                                                            var C = v.prev;
                                                            (N && ((C = i(n, C, N)), (S += N.length)),
                                                                (function (e, t, n) {
                                                                    for (
                                                                        var r = t.next, a = 0;
                                                                        a < n && r !== e.tail;
                                                                        a++
                                                                    )
                                                                        r = r.next;
                                                                    ((t.next = r), (r.prev = t), (e.length -= a));
                                                                })(n, C, T));
                                                            var D = new a(p, b ? r.tokenize(I, b) : I, y, I);
                                                            if (((v = i(n, C, D)), L && i(n, v, L), T > 1)) {
                                                                var B = {cause: p + ',' + g, reach: F};
                                                                (e(t, n, s, v.prev, S, B),
                                                                    c && B.reach > c.reach && (c.reach = B.reach));
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                    })(e, u, t, u.head, 0),
                                    (function (e) {
                                        for (var t = [], n = e.head.next; n !== e.tail; )
                                            (t.push(n.value), (n = n.next));
                                        return t;
                                    })(u)
                                );
                            },
                            hooks: {
                                all: {},
                                add: function (e, t) {
                                    var n = r.hooks.all;
                                    ((n[e] = n[e] || []), n[e].push(t));
                                },
                                run: function (e, t) {
                                    var n = r.hooks.all[e];
                                    if (n && n.length) for (var a, o = 0; (a = n[o++]); ) a(t);
                                },
                            },
                            Token: a,
                        };
                    function a(e, t, n, r) {
                        ((this.type = e), (this.content = t), (this.alias = n), (this.length = 0 | (r || '').length));
                    }
                    function o(e, t, n, r) {
                        e.lastIndex = t;
                        var a = e.exec(n);
                        if (a && r && a[1]) {
                            var o = a[1].length;
                            ((a.index += o), (a[0] = a[0].slice(o)));
                        }
                        return a;
                    }
                    function s() {
                        var e = {value: null, prev: null, next: null},
                            t = {value: null, prev: e, next: null};
                        ((e.next = t), (this.head = e), (this.tail = t), (this.length = 0));
                    }
                    function i(e, t, n) {
                        var r = t.next,
                            a = {value: n, prev: t, next: r};
                        return ((t.next = a), (r.prev = a), e.length++, a);
                    }
                    return (
                        (a.stringify = function e(t, n) {
                            if ('string' == typeof t) return t;
                            if (Array.isArray(t)) {
                                var a = '';
                                return (
                                    t.forEach(function (t) {
                                        a += e(t, n);
                                    }),
                                    a
                                );
                            }
                            var o = {
                                    type: t.type,
                                    content: e(t.content, n),
                                    tag: 'span',
                                    classes: ['token', t.type],
                                    attributes: {},
                                    language: n,
                                },
                                s = t.alias;
                            (s && (Array.isArray(s) ? Array.prototype.push.apply(o.classes, s) : o.classes.push(s)),
                                r.hooks.run('wrap', o));
                            var i = '';
                            for (var l in o.attributes)
                                i += ' ' + l + '="' + (o.attributes[l] || '').replace(/"/g, '&quot;') + '"';
                            return (
                                '<' +
                                o.tag +
                                ' class="' +
                                o.classes.join(' ') +
                                '"' +
                                i +
                                '>' +
                                o.content +
                                '</' +
                                o.tag +
                                '>'
                            );
                        }),
                        r
                    );
                })();
            ((E.default = E),
                (E.languages.markup = {
                    comment: {pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0},
                    prolog: {pattern: /<\?[\s\S]+?\?>/, greedy: !0},
                    doctype: {
                        pattern:
                            /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
                        greedy: !0,
                        inside: {
                            'internal-subset': {
                                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                                lookbehind: !0,
                                greedy: !0,
                                inside: null,
                            },
                            string: {pattern: /"[^"]*"|'[^']*'/, greedy: !0},
                            punctuation: /^<!|>$|[[\]]/,
                            'doctype-tag': /^DOCTYPE/i,
                            name: /[^\s<>'"]+/,
                        },
                    },
                    cdata: {pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0},
                    tag: {
                        pattern:
                            /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
                        greedy: !0,
                        inside: {
                            tag: {pattern: /^<\/?[^\s>\/]+/, inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/}},
                            'special-attr': [],
                            'attr-value': {
                                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                                inside: {punctuation: [{pattern: /^=/, alias: 'attr-equals'}, /"|'/]},
                            },
                            punctuation: /\/?>/,
                            'attr-name': {pattern: /[^\s>\/]+/, inside: {namespace: /^[^\s>\/:]+:/}},
                        },
                    },
                    entity: [{pattern: /&[\da-z]{1,8};/i, alias: 'named-entity'}, /&#x?[\da-f]{1,8};/i],
                }),
                (E.languages.markup.tag.inside['attr-value'].inside.entity = E.languages.markup.entity),
                (E.languages.markup.doctype.inside['internal-subset'].inside = E.languages.markup),
                E.hooks.add('wrap', function (e) {
                    'entity' === e.type && (e.attributes.title = e.content.replace(/&amp;/, '&'));
                }),
                Object.defineProperty(E.languages.markup.tag, 'addInlined', {
                    value: function (e, t) {
                        var n = {};
                        ((n['language-' + t] = {
                            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                            lookbehind: !0,
                            inside: E.languages[t],
                        }),
                            (n.cdata = /^<!\[CDATA\[|\]\]>$/i));
                        var r = {'included-cdata': {pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n}};
                        r['language-' + t] = {pattern: /[\s\S]+/, inside: E.languages[t]};
                        var a = {};
                        ((a[e] = {
                            pattern: RegExp(
                                /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                                    /__/g,
                                    function () {
                                        return e;
                                    },
                                ),
                                'i',
                            ),
                            lookbehind: !0,
                            greedy: !0,
                            inside: r,
                        }),
                            E.languages.insertBefore('markup', 'cdata', a));
                    },
                }),
                Object.defineProperty(E.languages.markup.tag, 'addAttribute', {
                    value: function (e, t) {
                        E.languages.markup.tag.inside['special-attr'].push({
                            pattern: RegExp(
                                /(^|["'\s])/.source +
                                    '(?:' +
                                    e +
                                    ')' +
                                    /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                                'i',
                            ),
                            lookbehind: !0,
                            inside: {
                                'attr-name': /^[^\s=]+/,
                                'attr-value': {
                                    pattern: /=[\s\S]+/,
                                    inside: {
                                        value: {
                                            pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                            lookbehind: !0,
                                            alias: [t, 'language-' + t],
                                            inside: E.languages[t],
                                        },
                                        punctuation: [{pattern: /^=/, alias: 'attr-equals'}, /"|'/],
                                    },
                                },
                            },
                        });
                    },
                }),
                (E.languages.html = E.languages.markup),
                (E.languages.mathml = E.languages.markup),
                (E.languages.svg = E.languages.markup),
                (E.languages.xml = E.languages.extend('markup', {})),
                (E.languages.ssml = E.languages.xml),
                (E.languages.atom = E.languages.xml),
                (E.languages.rss = E.languages.xml),
                (function (e) {
                    var t =
                            '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
                        n = {pattern: /(^(["']?)\w+\2)[ \t]+\S.*/, lookbehind: !0, alias: 'punctuation', inside: null},
                        r = {
                            bash: n,
                            environment: {pattern: RegExp('\\$' + t), alias: 'constant'},
                            variable: [
                                {
                                    pattern: /\$?\(\([\s\S]+?\)\)/,
                                    greedy: !0,
                                    inside: {
                                        variable: [{pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0}, /^\$\(\(/],
                                        number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                                        operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                                        punctuation: /\(\(?|\)\)?|,|;/,
                                    },
                                },
                                {
                                    pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                                    greedy: !0,
                                    inside: {variable: /^\$\(|^`|\)$|`$/},
                                },
                                {
                                    pattern: /\$\{[^}]+\}/,
                                    greedy: !0,
                                    inside: {
                                        operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                                        punctuation: /[\[\]]/,
                                        environment: {pattern: RegExp('(\\{)' + t), lookbehind: !0, alias: 'constant'},
                                    },
                                },
                                /\$(?:\w+|[#?*!@$])/,
                            ],
                            entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
                        };
                    ((e.languages.bash = {
                        shebang: {pattern: /^#!\s*\/.*/, alias: 'important'},
                        comment: {pattern: /(^|[^"{\\$])#.*/, lookbehind: !0},
                        'function-name': [
                            {
                                pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                                lookbehind: !0,
                                alias: 'function',
                            },
                            {pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: 'function'},
                        ],
                        'for-or-select': {
                            pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
                            alias: 'variable',
                            lookbehind: !0,
                        },
                        'assign-left': {
                            pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
                            inside: {
                                environment: {
                                    pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + t),
                                    lookbehind: !0,
                                    alias: 'constant',
                                },
                            },
                            alias: 'variable',
                            lookbehind: !0,
                        },
                        string: [
                            {
                                pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
                                lookbehind: !0,
                                greedy: !0,
                                inside: r,
                            },
                            {
                                pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                                lookbehind: !0,
                                greedy: !0,
                                inside: {bash: n},
                            },
                            {
                                pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                                lookbehind: !0,
                                greedy: !0,
                                inside: r,
                            },
                            {pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0},
                            {pattern: /\$'(?:[^'\\]|\\[\s\S])*'/, greedy: !0, inside: {entity: r.entity}},
                        ],
                        environment: {pattern: RegExp('\\$?' + t), alias: 'constant'},
                        variable: r.variable,
                        function: {
                            pattern:
                                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
                            lookbehind: !0,
                        },
                        keyword: {
                            pattern:
                                /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
                            lookbehind: !0,
                        },
                        builtin: {
                            pattern:
                                /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
                            lookbehind: !0,
                            alias: 'class-name',
                        },
                        boolean: {pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/, lookbehind: !0},
                        'file-descriptor': {pattern: /\B&\d\b/, alias: 'important'},
                        operator: {
                            pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
                            inside: {'file-descriptor': {pattern: /^\d/, alias: 'important'}},
                        },
                        punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
                        number: {pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0},
                    }),
                        (n.inside = e.languages.bash));
                    for (
                        var a = [
                                'comment',
                                'function-name',
                                'for-or-select',
                                'assign-left',
                                'string',
                                'environment',
                                'function',
                                'keyword',
                                'builtin',
                                'boolean',
                                'file-descriptor',
                                'operator',
                                'punctuation',
                                'number',
                            ],
                            o = r.variable[1].inside,
                            s = 0;
                        s < a.length;
                        s++
                    )
                        o[a[s]] = e.languages.bash[a[s]];
                    e.languages.shell = e.languages.bash;
                })(E),
                (E.languages.clike = {
                    comment: [
                        {pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0},
                        {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0},
                    ],
                    string: {pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
                    'class-name': {
                        pattern:
                            /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
                        lookbehind: !0,
                        inside: {punctuation: /[.\\]/},
                    },
                    keyword:
                        /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
                    boolean: /\b(?:false|true)\b/,
                    function: /\b\w+(?=\()/,
                    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
                    punctuation: /[{}[\];(),.:]/,
                }),
                (E.languages.c = E.languages.extend('clike', {
                    comment: {
                        pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
                        greedy: !0,
                    },
                    string: {pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0},
                    'class-name': {
                        pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
                        lookbehind: !0,
                    },
                    keyword:
                        /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
                    function: /\b[a-z_]\w*(?=\s*\()/i,
                    number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
                    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
                })),
                E.languages.insertBefore('c', 'string', {
                    char: {pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/, greedy: !0},
                }),
                E.languages.insertBefore('c', 'string', {
                    macro: {
                        pattern:
                            /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
                        lookbehind: !0,
                        greedy: !0,
                        alias: 'property',
                        inside: {
                            string: [{pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0}, E.languages.c.string],
                            char: E.languages.c.char,
                            comment: E.languages.c.comment,
                            'macro-name': [
                                {pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0},
                                {pattern: /(^#\s*define\s+)\w+\b(?=\()/i, lookbehind: !0, alias: 'function'},
                            ],
                            directive: {pattern: /^(#\s*)[a-z]+/, lookbehind: !0, alias: 'keyword'},
                            'directive-hash': /^#/,
                            punctuation: /##|\\(?=[\r\n])/,
                            expression: {pattern: /\S[\s\S]*/, inside: E.languages.c},
                        },
                    },
                }),
                E.languages.insertBefore('c', 'function', {
                    constant:
                        /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/,
                }),
                delete E.languages.c.boolean,
                (r =
                    /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/),
                (a = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function () {
                    return r.source;
                })),
                (E.languages.cpp = E.languages.extend('c', {
                    'class-name': [
                        {
                            pattern: RegExp(
                                /(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(
                                    /<keyword>/g,
                                    function () {
                                        return r.source;
                                    },
                                ),
                            ),
                            lookbehind: !0,
                        },
                        /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
                        /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
                        /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
                    ],
                    keyword: r,
                    number: {
                        pattern:
                            /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
                        greedy: !0,
                    },
                    operator:
                        />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
                    boolean: /\b(?:false|true)\b/,
                })),
                E.languages.insertBefore('cpp', 'string', {
                    module: {
                        pattern: RegExp(
                            /(\b(?:import|module)\s+)/.source +
                                '(?:' +
                                /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source +
                                '|' +
                                /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(
                                    /<mod-name>/g,
                                    function () {
                                        return a;
                                    },
                                ) +
                                ')',
                        ),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./},
                    },
                    'raw-string': {pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, alias: 'string', greedy: !0},
                }),
                E.languages.insertBefore('cpp', 'keyword', {
                    'generic-function': {
                        pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
                        inside: {
                            function: /^\w+/,
                            generic: {pattern: /<[\s\S]+/, alias: 'class-name', inside: E.languages.cpp},
                        },
                    },
                }),
                E.languages.insertBefore('cpp', 'operator', {'double-colon': {pattern: /::/, alias: 'punctuation'}}),
                E.languages.insertBefore('cpp', 'class-name', {
                    'base-clause': {
                        pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: E.languages.extend('cpp', {}),
                    },
                }),
                E.languages.insertBefore(
                    'inside',
                    'double-colon',
                    {'class-name': /\b[a-z_]\w*\b(?!\s*::)/i},
                    E.languages.cpp['base-clause'],
                ),
                (o = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/),
                (E.languages.css = {
                    comment: /\/\*[\s\S]*?\*\//,
                    atrule: {
                        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                        inside: {
                            rule: /^@[\w-]+/,
                            'selector-function-argument': {
                                pattern:
                                    /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                                lookbehind: !0,
                                alias: 'selector',
                            },
                            keyword: {pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0},
                        },
                    },
                    url: {
                        pattern: RegExp(
                            '\\burl\\((?:' + o.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)',
                            'i',
                        ),
                        greedy: !0,
                        inside: {
                            function: /^url/i,
                            punctuation: /^\(|\)$/,
                            string: {pattern: RegExp('^' + o.source + '$'), alias: 'url'},
                        },
                    },
                    selector: {
                        pattern: RegExp(
                            '(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + o.source + ')*(?=\\s*\\{)',
                        ),
                        lookbehind: !0,
                    },
                    string: {pattern: o, greedy: !0},
                    property: {
                        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                        lookbehind: !0,
                    },
                    important: /!important\b/i,
                    function: {pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0},
                    punctuation: /[(){};:,]/,
                }),
                (E.languages.css.atrule.inside.rest = E.languages.css),
                (s = E.languages.markup) && (s.tag.addInlined('style', 'css'), s.tag.addAttribute('style', 'css')),
                (function (e) {
                    var t,
                        n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
                    ((e.languages.css.selector = {
                        pattern: e.languages.css.selector.pattern,
                        lookbehind: !0,
                        inside: (t = {
                            'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
                            'pseudo-class': /:[-\w]+/,
                            class: /\.[-\w]+/,
                            id: /#[-\w]+/,
                            attribute: {
                                pattern: RegExp('\\[(?:[^[\\]"\']|' + n.source + ')*\\]'),
                                greedy: !0,
                                inside: {
                                    punctuation: /^\[|\]$/,
                                    'case-sensitivity': {pattern: /(\s)[si]$/i, lookbehind: !0, alias: 'keyword'},
                                    namespace: {
                                        pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                                        lookbehind: !0,
                                        inside: {punctuation: /\|$/},
                                    },
                                    'attr-name': {pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/, lookbehind: !0},
                                    'attr-value': [
                                        n,
                                        {pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/, lookbehind: !0},
                                    ],
                                    operator: /[|~*^$]?=/,
                                },
                            },
                            'n-th': [
                                {
                                    pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                                    lookbehind: !0,
                                    inside: {number: /[\dn]+/, operator: /[+-]/},
                                },
                                {pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0},
                            ],
                            combinator: />|\+|~|\|\|/,
                            punctuation: /[(),]/,
                        }),
                    }),
                        (e.languages.css.atrule.inside['selector-function-argument'].inside = t),
                        e.languages.insertBefore('css', 'property', {
                            variable: {
                                pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                                lookbehind: !0,
                            },
                        }));
                    var r = {pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0},
                        a = {pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0};
                    e.languages.insertBefore('css', 'function', {
                        operator: {pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0},
                        hexcode: {pattern: /\B#[\da-f]{3,8}\b/i, alias: 'color'},
                        color: [
                            {
                                pattern:
                                    /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
                                lookbehind: !0,
                            },
                            {
                                pattern:
                                    /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                                inside: {unit: r, number: a, function: /[\w-]+(?=\()/, punctuation: /[(),]/},
                            },
                        ],
                        entity: /\\[\da-f]{1,8}/i,
                        unit: r,
                        number: a,
                    });
                })(E),
                (E.languages.javascript = E.languages.extend('clike', {
                    'class-name': [
                        E.languages.clike['class-name'],
                        {
                            pattern:
                                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
                            lookbehind: !0,
                        },
                    ],
                    keyword: [
                        {pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0},
                        {
                            pattern:
                                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                            lookbehind: !0,
                        },
                    ],
                    function:
                        /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
                    number: {
                        pattern: RegExp(
                            /(^|[^\w$])/.source +
                                '(?:' +
                                (/NaN|Infinity/.source +
                                    '|' +
                                    /0[bB][01]+(?:_[01]+)*n?/.source +
                                    '|' +
                                    /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                                    '|' +
                                    /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                                    '|') +
                                /\d+(?:_\d+)*n/.source +
                                '|' +
                                /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                                    .source +
                                ')' +
                                /(?![\w$])/.source,
                        ),
                        lookbehind: !0,
                    },
                    operator:
                        /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
                })),
                (E.languages.javascript['class-name'][0].pattern =
                    /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
                E.languages.insertBefore('javascript', 'keyword', {
                    regex: {
                        pattern:
                            /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            'regex-source': {
                                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                                lookbehind: !0,
                                alias: 'language-regex',
                                inside: E.languages.regex,
                            },
                            'regex-delimiter': /^\/|\/$/,
                            'regex-flags': /^[a-z]+$/,
                        },
                    },
                    'function-variable': {
                        pattern:
                            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
                        alias: 'function',
                    },
                    parameter: [
                        {
                            pattern:
                                /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                            lookbehind: !0,
                            inside: E.languages.javascript,
                        },
                        {
                            pattern:
                                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                            lookbehind: !0,
                            inside: E.languages.javascript,
                        },
                        {
                            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                            lookbehind: !0,
                            inside: E.languages.javascript,
                        },
                        {
                            pattern:
                                /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                            lookbehind: !0,
                            inside: E.languages.javascript,
                        },
                    ],
                    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
                }),
                E.languages.insertBefore('javascript', 'string', {
                    hashbang: {pattern: /^#!.*/, greedy: !0, alias: 'comment'},
                    'template-string': {
                        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
                        greedy: !0,
                        inside: {
                            'template-punctuation': {pattern: /^`|`$/, alias: 'string'},
                            interpolation: {
                                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                                lookbehind: !0,
                                inside: {
                                    'interpolation-punctuation': {pattern: /^\$\{|\}$/, alias: 'punctuation'},
                                    rest: E.languages.javascript,
                                },
                            },
                            string: /[\s\S]+/,
                        },
                    },
                    'string-property': {
                        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
                        lookbehind: !0,
                        greedy: !0,
                        alias: 'property',
                    },
                }),
                E.languages.insertBefore('javascript', 'operator', {
                    'literal-property': {
                        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
                        lookbehind: !0,
                        alias: 'property',
                    },
                }),
                E.languages.markup &&
                    (E.languages.markup.tag.addInlined('script', 'javascript'),
                    E.languages.markup.tag.addAttribute(
                        /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
                            .source,
                        'javascript',
                    )),
                (E.languages.js = E.languages.javascript),
                (i = /#(?!\{).+/),
                (l = {pattern: /#\{[^}]+\}/, alias: 'variable'}),
                (E.languages.coffeescript = E.languages.extend('javascript', {
                    comment: i,
                    string: [
                        {pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0},
                        {pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: !0, inside: {interpolation: l}},
                    ],
                    keyword:
                        /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
                    'class-member': {pattern: /@(?!\d)\w+/, alias: 'variable'},
                })),
                E.languages.insertBefore('coffeescript', 'comment', {
                    'multiline-comment': {pattern: /###[\s\S]+?###/, alias: 'comment'},
                    'block-regex': {
                        pattern: /\/{3}[\s\S]*?\/{3}/,
                        alias: 'regex',
                        inside: {comment: i, interpolation: l},
                    },
                }),
                E.languages.insertBefore('coffeescript', 'string', {
                    'inline-javascript': {
                        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                        inside: {
                            delimiter: {pattern: /^`|`$/, alias: 'punctuation'},
                            script: {pattern: /[\s\S]+/, alias: 'language-javascript', inside: E.languages.javascript},
                        },
                    },
                    'multiline-string': [
                        {pattern: /'''[\s\S]*?'''/, greedy: !0, alias: 'string'},
                        {pattern: /"""[\s\S]*?"""/, greedy: !0, alias: 'string', inside: {interpolation: l}},
                    ],
                }),
                E.languages.insertBefore('coffeescript', 'keyword', {property: /(?!\d)\w+(?=\s*:(?!:))/}),
                delete E.languages.coffeescript['template-string'],
                (E.languages.coffee = E.languages.coffeescript),
                (function (e) {
                    var t = /[*&][^\s[\]{},]+/,
                        n = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
                        r = '(?:' + n.source + '(?:[ 	]+' + t.source + ')?|' + t.source + '(?:[ 	]+' + n.source + ')?)',
                        a =
                            /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
                                /<PLAIN>/g,
                                function () {
                                    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                                        .source;
                                },
                            ),
                        o = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
                    function s(e, t) {
                        return (
                            (t = (t || '').replace(/m/g, '') + 'm'),
                            RegExp(
                                /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
                                    .replace(/<<prop>>/g, function () {
                                        return r;
                                    })
                                    .replace(/<<value>>/g, function () {
                                        return e;
                                    }),
                                t,
                            )
                        );
                    }
                    ((e.languages.yaml = {
                        scalar: {
                            pattern: RegExp(
                                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                                    /<<prop>>/g,
                                    function () {
                                        return r;
                                    },
                                ),
                            ),
                            lookbehind: !0,
                            alias: 'string',
                        },
                        comment: /#.*/,
                        key: {
                            pattern: RegExp(
                                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                                    .replace(/<<prop>>/g, function () {
                                        return r;
                                    })
                                    .replace(/<<key>>/g, function () {
                                        return '(?:' + a + '|' + o + ')';
                                    }),
                            ),
                            lookbehind: !0,
                            greedy: !0,
                            alias: 'atrule',
                        },
                        directive: {pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: 'important'},
                        datetime: {
                            pattern: s(
                                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                                    .source,
                            ),
                            lookbehind: !0,
                            alias: 'number',
                        },
                        boolean: {pattern: s(/false|true/.source, 'i'), lookbehind: !0, alias: 'important'},
                        null: {pattern: s(/null|~/.source, 'i'), lookbehind: !0, alias: 'important'},
                        string: {pattern: s(o), lookbehind: !0, greedy: !0},
                        number: {
                            pattern: s(
                                /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,
                                'i',
                            ),
                            lookbehind: !0,
                        },
                        tag: n,
                        important: t,
                        punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
                    }),
                        (e.languages.yml = e.languages.yaml));
                })(E),
                (function (e) {
                    var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
                    function n(e) {
                        return (
                            (e = e.replace(/<inner>/g, function () {
                                return t;
                            })),
                            RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + e + ')')
                        );
                    }
                    var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
                        a = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
                            return r;
                        }),
                        o = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
                    ((e.languages.markdown = e.languages.extend('markup', {})),
                        e.languages.insertBefore('markdown', 'prolog', {
                            'front-matter-block': {
                                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                                lookbehind: !0,
                                greedy: !0,
                                inside: {
                                    punctuation: /^---|---$/,
                                    'front-matter': {
                                        pattern: /\S+(?:\s+\S+)*/,
                                        alias: ['yaml', 'language-yaml'],
                                        inside: e.languages.yaml,
                                    },
                                },
                            },
                            blockquote: {pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation'},
                            table: {
                                pattern: RegExp('^' + a + o + '(?:' + a + ')*', 'm'),
                                inside: {
                                    'table-data-rows': {
                                        pattern: RegExp('^(' + a + o + ')(?:' + a + ')*$'),
                                        lookbehind: !0,
                                        inside: {
                                            'table-data': {pattern: RegExp(r), inside: e.languages.markdown},
                                            punctuation: /\|/,
                                        },
                                    },
                                    'table-line': {
                                        pattern: RegExp('^(' + a + ')' + o + '$'),
                                        lookbehind: !0,
                                        inside: {punctuation: /\||:?-{3,}:?/},
                                    },
                                    'table-header-row': {
                                        pattern: RegExp('^' + a + '$'),
                                        inside: {
                                            'table-header': {
                                                pattern: RegExp(r),
                                                alias: 'important',
                                                inside: e.languages.markdown,
                                            },
                                            punctuation: /\|/,
                                        },
                                    },
                                },
                            },
                            code: [
                                {
                                    pattern:
                                        /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                                    lookbehind: !0,
                                    alias: 'keyword',
                                },
                                {
                                    pattern: /^```[\s\S]*?^```$/m,
                                    greedy: !0,
                                    inside: {
                                        'code-block': {
                                            pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                                            lookbehind: !0,
                                        },
                                        'code-language': {pattern: /^(```).+/, lookbehind: !0},
                                        punctuation: /```/,
                                    },
                                },
                            ],
                            title: [
                                {
                                    pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                                    alias: 'important',
                                    inside: {punctuation: /==+$|--+$/},
                                },
                                {
                                    pattern: /(^\s*)#.+/m,
                                    lookbehind: !0,
                                    alias: 'important',
                                    inside: {punctuation: /^#+|#+$/},
                                },
                            ],
                            hr: {
                                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                                lookbehind: !0,
                                alias: 'punctuation',
                            },
                            list: {pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: 'punctuation'},
                            'url-reference': {
                                pattern:
                                    /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                                inside: {
                                    variable: {pattern: /^(!?\[)[^\]]+/, lookbehind: !0},
                                    string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                                    punctuation: /^[\[\]!:]|[<>]/,
                                },
                                alias: 'url',
                            },
                            bold: {
                                pattern: n(
                                    /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                                        .source,
                                ),
                                lookbehind: !0,
                                greedy: !0,
                                inside: {
                                    content: {pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {}},
                                    punctuation: /\*\*|__/,
                                },
                            },
                            italic: {
                                pattern: n(
                                    /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                                        .source,
                                ),
                                lookbehind: !0,
                                greedy: !0,
                                inside: {
                                    content: {pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {}},
                                    punctuation: /[*_]/,
                                },
                            },
                            strike: {
                                pattern: n(/(~~?)(?:(?!~)<inner>)+\2/.source),
                                lookbehind: !0,
                                greedy: !0,
                                inside: {
                                    content: {pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {}},
                                    punctuation: /~~?/,
                                },
                            },
                            'code-snippet': {
                                pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                                lookbehind: !0,
                                greedy: !0,
                                alias: ['code', 'keyword'],
                            },
                            url: {
                                pattern: n(
                                    /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                                        .source,
                                ),
                                lookbehind: !0,
                                greedy: !0,
                                inside: {
                                    operator: /^!/,
                                    content: {pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {}},
                                    variable: {pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0},
                                    url: {pattern: /(^\]\()[^\s)]+/, lookbehind: !0},
                                    string: {pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: !0},
                                },
                            },
                        }),
                        ['url', 'bold', 'italic', 'strike'].forEach(function (t) {
                            ['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(function (n) {
                                t !== n && (e.languages.markdown[t].inside.content.inside[n] = e.languages.markdown[n]);
                            });
                        }),
                        e.hooks.add('after-tokenize', function (e) {
                            ('markdown' === e.language || 'md' === e.language) &&
                                (function e(t) {
                                    if (t && 'string' != typeof t)
                                        for (var n = 0, r = t.length; n < r; n++) {
                                            var a = t[n];
                                            if ('code' !== a.type) {
                                                e(a.content);
                                                continue;
                                            }
                                            var o = a.content[1],
                                                s = a.content[3];
                                            if (
                                                o &&
                                                s &&
                                                'code-language' === o.type &&
                                                'code-block' === s.type &&
                                                'string' == typeof o.content
                                            ) {
                                                var i = o.content.replace(/\b#/g, 'sharp').replace(/\b\+\+/g, 'pp'),
                                                    l =
                                                        'language-' +
                                                        (i = (/[a-z][\w-]*/i.exec(i) || [''])[0].toLowerCase());
                                                s.alias
                                                    ? 'string' == typeof s.alias
                                                        ? (s.alias = [s.alias, l])
                                                        : s.alias.push(l)
                                                    : (s.alias = [l]);
                                            }
                                        }
                                })(e.tokens);
                        }),
                        e.hooks.add('wrap', function (t) {
                            if ('code-block' === t.type) {
                                for (var n, r = '', a = 0, o = t.classes.length; a < o; a++) {
                                    var u = t.classes[a],
                                        c = /language-(.+)/.exec(u);
                                    if (c) {
                                        r = c[1];
                                        break;
                                    }
                                }
                                var p = e.languages[r];
                                if (p)
                                    t.content = e.highlight(
                                        t.content
                                            .replace(s, '')
                                            .replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (e, t) {
                                                return '#' === (t = t.toLowerCase())[0]
                                                    ? l('x' === t[1] ? parseInt(t.slice(2), 16) : Number(t.slice(1)))
                                                    : i[t] || e;
                                            }),
                                        p,
                                        r,
                                    );
                                else if (r && 'none' !== r && e.plugins.autoloader) {
                                    var d = 'md-' + new Date().valueOf() + '-' + Math.floor(1e16 * Math.random());
                                    ((t.attributes.id = d),
                                        e.plugins.autoloader.loadLanguages(r, function () {
                                            var t = document.getElementById(d);
                                            t && (t.innerHTML = e.highlight(t.textContent, e.languages[r], r));
                                        }));
                                }
                            }
                        }));
                    var s = RegExp(e.languages.markup.tag.pattern.source, 'gi'),
                        i = {amp: '&', lt: '<', gt: '>', quot: '"'},
                        l = String.fromCodePoint || String.fromCharCode;
                    e.languages.md = e.languages.markdown;
                })(E),
                (E.languages.graphql = {
                    comment: /#.*/,
                    description: {
                        pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
                        greedy: !0,
                        alias: 'string',
                        inside: {
                            'language-markdown': {
                                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                                lookbehind: !0,
                                inside: E.languages.markdown,
                            },
                        },
                    },
                    string: {pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: !0},
                    number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
                    boolean: /\b(?:false|true)\b/,
                    variable: /\$[a-z_]\w*/i,
                    directive: {pattern: /@[a-z_]\w*/i, alias: 'function'},
                    'attr-name': {
                        pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
                        greedy: !0,
                    },
                    'atom-input': {pattern: /\b[A-Z]\w*Input\b/, alias: 'class-name'},
                    scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
                    constant: /\b[A-Z][A-Z_\d]*\b/,
                    'class-name': {
                        pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
                        lookbehind: !0,
                    },
                    fragment: {
                        pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
                        lookbehind: !0,
                        alias: 'function',
                    },
                    'definition-mutation': {pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: 'function'},
                    'definition-query': {pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: 'function'},
                    keyword:
                        /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
                    operator: /[!=|&]|\.{3}/,
                    'property-query': /\w+(?=\s*\()/,
                    object: /\w+(?=\s*\{)/,
                    punctuation: /[!(){}\[\]:=,]/,
                    property: /\w+/,
                }),
                E.hooks.add('after-tokenize', function (e) {
                    if ('graphql' === e.language)
                        for (
                            var t = e.tokens.filter(function (e) {
                                    return 'string' != typeof e && 'comment' !== e.type && 'scalar' !== e.type;
                                }),
                                n = 0;
                            n < t.length;

                        ) {
                            var r = t[n++];
                            if ('keyword' === r.type && 'mutation' === r.content) {
                                var a = [];
                                if (c(['definition-mutation', 'punctuation']) && '(' === t[n + 1].content) {
                                    n += 2;
                                    var o = p(/^\($/, /^\)$/);
                                    if (-1 === o) continue;
                                    for (; n < o; n++) {
                                        var s = t[n + 0];
                                        'variable' === s.type && (d(s, 'variable-input'), a.push(s.content));
                                    }
                                    n = o + 1;
                                }
                                if (
                                    c(['punctuation', 'property-query']) &&
                                    '{' === t[n + 0].content &&
                                    (d(t[++n + 0], 'property-mutation'), a.length > 0)
                                ) {
                                    var i = p(/^\{$/, /^\}$/);
                                    if (-1 === i) continue;
                                    for (var l = n; l < i; l++) {
                                        var u = t[l];
                                        'variable' === u.type && a.indexOf(u.content) >= 0 && d(u, 'variable-input');
                                    }
                                }
                            }
                        }
                    function c(e, r) {
                        r = r || 0;
                        for (var a = 0; a < e.length; a++) {
                            var o = t[n + (a + r)];
                            if (!o || o.type !== e[a]) return !1;
                        }
                        return !0;
                    }
                    function p(e, r) {
                        for (var a = 1, o = n; o < t.length; o++) {
                            var s = t[o],
                                i = s.content;
                            if ('punctuation' === s.type && 'string' == typeof i) {
                                if (e.test(i)) a++;
                                else if (r.test(i) && 0 == --a) return o;
                            }
                        }
                        return -1;
                    }
                    function d(e, t) {
                        var n = e.alias;
                        (n ? Array.isArray(n) || (e.alias = n = [n]) : (e.alias = n = []), n.push(t));
                    }
                }),
                (E.languages.sql = {
                    comment: {pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0},
                    variable: [{pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0}, /@[\w.$]+/],
                    string: {pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/, greedy: !0, lookbehind: !0},
                    identifier: {
                        pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
                        greedy: !0,
                        lookbehind: !0,
                        inside: {punctuation: /^`|`$/},
                    },
                    function:
                        /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
                    keyword:
                        /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
                    boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
                    number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
                    operator:
                        /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
                    punctuation: /[;[\]()`,.]/,
                }),
                (function (e) {
                    var t = e.languages.javascript['template-string'],
                        n = t.pattern.source,
                        r = t.inside.interpolation,
                        a = r.inside['interpolation-punctuation'],
                        o = r.pattern.source;
                    function s(t, r) {
                        if (e.languages[t])
                            return {
                                pattern: RegExp('((?:' + r + ')\\s*)' + n),
                                lookbehind: !0,
                                greedy: !0,
                                inside: {
                                    'template-punctuation': {pattern: /^`|`$/, alias: 'string'},
                                    'embedded-code': {pattern: /[\s\S]+/, alias: t},
                                },
                            };
                    }
                    function i(t, n, r) {
                        var a = {code: t, grammar: n, language: r};
                        return (
                            e.hooks.run('before-tokenize', a),
                            (a.tokens = e.tokenize(a.code, a.grammar)),
                            e.hooks.run('after-tokenize', a),
                            a.tokens
                        );
                    }
                    e.languages.javascript['template-string'] = [
                        s(
                            'css',
                            /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/
                                .source,
                        ),
                        s('html', /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),
                        s('svg', /\bsvg/.source),
                        s('markdown', /\b(?:markdown|md)/.source),
                        s('graphql', /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),
                        s('sql', /\bsql/.source),
                        t,
                    ].filter(Boolean);
                    var l = {javascript: !0, js: !0, typescript: !0, ts: !0, jsx: !0, tsx: !0};
                    e.hooks.add('after-tokenize', function (t) {
                        t.language in l &&
                            (function t(n) {
                                for (var s = 0, l = n.length; s < l; s++) {
                                    var u = n[s];
                                    if ('string' != typeof u) {
                                        var c = u.content;
                                        if (!Array.isArray(c)) {
                                            'string' != typeof c && t([c]);
                                            continue;
                                        }
                                        if ('template-string' === u.type) {
                                            var p = c[1];
                                            if (3 === c.length && 'string' != typeof p && 'embedded-code' === p.type) {
                                                var d = (function e(t) {
                                                        return 'string' == typeof t
                                                            ? t
                                                            : Array.isArray(t)
                                                              ? t.map(e).join('')
                                                              : e(t.content);
                                                    })(p),
                                                    g = p.alias,
                                                    f = Array.isArray(g) ? g[0] : g,
                                                    b = e.languages[f];
                                                if (!b) continue;
                                                c[1] = (function (t, n, s) {
                                                    var l = e.tokenize(t, {
                                                            interpolation: {pattern: RegExp(o), lookbehind: !0},
                                                        }),
                                                        u = 0,
                                                        c = {},
                                                        p = i(
                                                            l
                                                                .map(function (e) {
                                                                    if ('string' == typeof e) return e;
                                                                    for (
                                                                        var n, r, a = e.content;
                                                                        -1 !==
                                                                        t.indexOf(
                                                                            ((n = u++),
                                                                            (r =
                                                                                '___' +
                                                                                s.toUpperCase() +
                                                                                '_' +
                                                                                n +
                                                                                '___')),
                                                                        );

                                                                    );
                                                                    return ((c[r] = a), r);
                                                                })
                                                                .join(''),
                                                            n,
                                                            s,
                                                        ),
                                                        d = Object.keys(c);
                                                    return (
                                                        (u = 0),
                                                        (function t(n) {
                                                            for (var o = 0; o < n.length; o++) {
                                                                if (u >= d.length) return;
                                                                var s = n[o];
                                                                if (
                                                                    'string' == typeof s ||
                                                                    'string' == typeof s.content
                                                                ) {
                                                                    var l = d[u],
                                                                        p = 'string' == typeof s ? s : s.content,
                                                                        g = p.indexOf(l);
                                                                    if (-1 !== g) {
                                                                        ++u;
                                                                        var f = p.substring(0, g),
                                                                            b = (function (t) {
                                                                                var n = {};
                                                                                n['interpolation-punctuation'] = a;
                                                                                var o = e.tokenize(t, n);
                                                                                if (3 === o.length) {
                                                                                    var s = [1, 1];
                                                                                    (s.push.apply(
                                                                                        s,
                                                                                        i(
                                                                                            o[1],
                                                                                            e.languages.javascript,
                                                                                            'javascript',
                                                                                        ),
                                                                                    ),
                                                                                        o.splice.apply(o, s));
                                                                                }
                                                                                return new e.Token(
                                                                                    'interpolation',
                                                                                    o,
                                                                                    r.alias,
                                                                                    t,
                                                                                );
                                                                            })(c[l]),
                                                                            m = p.substring(g + l.length),
                                                                            h = [];
                                                                        if ((f && h.push(f), h.push(b), m)) {
                                                                            var y = [m];
                                                                            (t(y), h.push.apply(h, y));
                                                                        }
                                                                        'string' == typeof s
                                                                            ? (n.splice.apply(n, [o, 1].concat(h)),
                                                                              (o += h.length - 1))
                                                                            : (s.content = h);
                                                                    }
                                                                } else {
                                                                    var k = s.content;
                                                                    Array.isArray(k) ? t(k) : t([k]);
                                                                }
                                                            }
                                                        })(p),
                                                        new e.Token(s, p, 'language-' + s, t)
                                                    );
                                                })(d, b, f);
                                            }
                                        } else t(c);
                                    }
                                }
                            })(t.tokens);
                    });
                })(E),
                (E.languages.typescript = E.languages.extend('javascript', {
                    'class-name': {
                        pattern:
                            /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: null,
                    },
                    builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
                })),
                E.languages.typescript.keyword.push(
                    /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
                    /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
                    /\btype\b(?=\s*(?:[\{*]|$))/,
                ),
                delete E.languages.typescript.parameter,
                delete E.languages.typescript['literal-property'],
                (u = E.languages.extend('typescript', {})),
                delete u['class-name'],
                (E.languages.typescript['class-name'].inside = u),
                E.languages.insertBefore('typescript', 'function', {
                    decorator: {
                        pattern: /@[$\w\xA0-\uFFFF]+/,
                        inside: {at: {pattern: /^@/, alias: 'operator'}, function: /^[\s\S]+/},
                    },
                    'generic-function': {
                        pattern:
                            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                        greedy: !0,
                        inside: {
                            function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                            generic: {pattern: /<[\s\S]+/, alias: 'class-name', inside: u},
                        },
                    },
                }),
                (E.languages.ts = E.languages.typescript),
                (function (e) {
                    function t(e, t) {
                        return RegExp(
                            e.replace(/<ID>/g, function () {
                                return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
                            }),
                            t,
                        );
                    }
                    (e.languages.insertBefore('javascript', 'function-variable', {
                        'method-variable': {
                            pattern: RegExp('(\\.\\s*)' + e.languages.javascript['function-variable'].pattern.source),
                            lookbehind: !0,
                            alias: ['function-variable', 'method', 'function', 'property-access'],
                        },
                    }),
                        e.languages.insertBefore('javascript', 'function', {
                            method: {
                                pattern: RegExp('(\\.\\s*)' + e.languages.javascript.function.source),
                                lookbehind: !0,
                                alias: ['function', 'property-access'],
                            },
                        }),
                        e.languages.insertBefore('javascript', 'constant', {
                            'known-class-name': [
                                {
                                    pattern:
                                        /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                                    alias: 'class-name',
                                },
                                {pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name'},
                            ],
                        }),
                        e.languages.insertBefore('javascript', 'keyword', {
                            imports: {
                                pattern: t(
                                    /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                                        .source,
                                ),
                                lookbehind: !0,
                                inside: e.languages.javascript,
                            },
                            exports: {
                                pattern: t(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
                                lookbehind: !0,
                                inside: e.languages.javascript,
                            },
                        }),
                        e.languages.javascript.keyword.unshift(
                            {pattern: /\b(?:as|default|export|from|import)\b/, alias: 'module'},
                            {
                                pattern:
                                    /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                                alias: 'control-flow',
                            },
                            {pattern: /\bnull\b/, alias: ['null', 'nil']},
                            {pattern: /\bundefined\b/, alias: 'nil'},
                        ),
                        e.languages.insertBefore('javascript', 'operator', {
                            spread: {pattern: /\.{3}/, alias: 'operator'},
                            arrow: {pattern: /=>/, alias: 'operator'},
                        }),
                        e.languages.insertBefore('javascript', 'punctuation', {
                            'property-access': {pattern: t(/(\.\s*)#?<ID>/.source), lookbehind: !0},
                            'maybe-class-name': {
                                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                                lookbehind: !0,
                            },
                            dom: {
                                pattern:
                                    /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                                alias: 'variable',
                            },
                            console: {pattern: /\bconsole(?=\s*\.)/, alias: 'class-name'},
                        }));
                    for (
                        var n = ['function', 'function-variable', 'method', 'method-variable', 'property-access'],
                            r = 0;
                        r < n.length;
                        r++
                    ) {
                        var a = n[r],
                            o = e.languages.javascript[a];
                        'RegExp' === e.util.type(o) && (o = e.languages.javascript[a] = {pattern: o});
                        var s = o.inside || {};
                        ((o.inside = s), (s['maybe-class-name'] = /^[A-Z][\s\S]*/));
                    }
                })(E),
                (function (e) {
                    var t = e.util.clone(e.languages.javascript),
                        n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
                        r = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
                        a = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
                    function o(e, t) {
                        return RegExp(
                            (e = e
                                .replace(/<S>/g, function () {
                                    return n;
                                })
                                .replace(/<BRACES>/g, function () {
                                    return r;
                                })
                                .replace(/<SPREAD>/g, function () {
                                    return a;
                                })),
                            t,
                        );
                    }
                    ((a = o(a).source),
                        (e.languages.jsx = e.languages.extend('markup', t)),
                        (e.languages.jsx.tag.pattern = o(
                            /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
                                .source,
                        )),
                        (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
                        (e.languages.jsx.tag.inside['attr-value'].pattern =
                            /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
                        (e.languages.jsx.tag.inside.tag.inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
                        (e.languages.jsx.tag.inside.comment = t.comment),
                        e.languages.insertBefore(
                            'inside',
                            'attr-name',
                            {spread: {pattern: o(/<SPREAD>/.source), inside: e.languages.jsx}},
                            e.languages.jsx.tag,
                        ),
                        e.languages.insertBefore(
                            'inside',
                            'special-attr',
                            {
                                script: {
                                    pattern: o(/=<BRACES>/.source),
                                    alias: 'language-javascript',
                                    inside: {
                                        'script-punctuation': {pattern: /^=(?=\{)/, alias: 'punctuation'},
                                        rest: e.languages.jsx,
                                    },
                                },
                            },
                            e.languages.jsx.tag,
                        ));
                    var s = function (e) {
                            return e
                                ? 'string' == typeof e
                                    ? e
                                    : 'string' == typeof e.content
                                      ? e.content
                                      : e.content.map(s).join('')
                                : '';
                        },
                        i = function (t) {
                            for (var n = [], r = 0; r < t.length; r++) {
                                var a = t[r],
                                    o = !1;
                                if (
                                    ('string' != typeof a &&
                                        ('tag' === a.type && a.content[0] && 'tag' === a.content[0].type
                                            ? '</' === a.content[0].content[0].content
                                                ? n.length > 0 &&
                                                  n[n.length - 1].tagName === s(a.content[0].content[1]) &&
                                                  n.pop()
                                                : '/>' === a.content[a.content.length - 1].content ||
                                                  n.push({tagName: s(a.content[0].content[1]), openedBraces: 0})
                                            : n.length > 0 && 'punctuation' === a.type && '{' === a.content
                                              ? n[n.length - 1].openedBraces++
                                              : n.length > 0 &&
                                                  n[n.length - 1].openedBraces > 0 &&
                                                  'punctuation' === a.type &&
                                                  '}' === a.content
                                                ? n[n.length - 1].openedBraces--
                                                : (o = !0)),
                                    (o || 'string' == typeof a) && n.length > 0 && 0 === n[n.length - 1].openedBraces)
                                ) {
                                    var l = s(a);
                                    (r < t.length - 1 &&
                                        ('string' == typeof t[r + 1] || 'plain-text' === t[r + 1].type) &&
                                        ((l += s(t[r + 1])), t.splice(r + 1, 1)),
                                        r > 0 &&
                                            ('string' == typeof t[r - 1] || 'plain-text' === t[r - 1].type) &&
                                            ((l = s(t[r - 1]) + l), t.splice(r - 1, 1), r--),
                                        (t[r] = new e.Token('plain-text', l, null, l)));
                                }
                                a.content && 'string' != typeof a.content && i(a.content);
                            }
                        };
                    e.hooks.add('after-tokenize', function (e) {
                        ('jsx' === e.language || 'tsx' === e.language) && i(e.tokens);
                    });
                })(E),
                (E.languages.diff = {coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m]}),
                Object.keys(
                    (c = {
                        'deleted-sign': '-',
                        'deleted-arrow': '<',
                        'inserted-sign': '+',
                        'inserted-arrow': '>',
                        unchanged: ' ',
                        diff: '!',
                    }),
                ).forEach(function (e) {
                    var t = c[e],
                        n = [];
                    (/^\w+$/.test(e) || n.push(/\w+/.exec(e)[0]),
                        'diff' === e && n.push('bold'),
                        (E.languages.diff[e] = {
                            pattern: RegExp('^(?:[' + t + '].*(?:\r\n?|\n|(?![\\s\\S])))+', 'm'),
                            alias: n,
                            inside: {
                                line: {pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/, lookbehind: !0},
                                prefix: {pattern: /[\s\S]/, alias: /\w+/.exec(e)[0]},
                            },
                        }));
                }),
                Object.defineProperty(E.languages.diff, 'PREFIXES', {value: c}),
                (E.languages.git = {
                    comment: /^#.*/m,
                    deleted: /^[-–].*/m,
                    inserted: /^\+.*/m,
                    string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
                    command: {pattern: /^.*\$ git .*$/m, inside: {parameter: /\s--?\w+/}},
                    coord: /^@@.*@@$/m,
                    'commit-sha1': /^commit \w{40}$/m,
                }),
                (E.languages.go = E.languages.extend('clike', {
                    string: {pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/, lookbehind: !0, greedy: !0},
                    keyword:
                        /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
                    boolean: /\b(?:_|false|iota|nil|true)\b/,
                    number: [
                        /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
                        /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
                        /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i,
                    ],
                    operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
                    builtin:
                        /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/,
                })),
                E.languages.insertBefore('go', 'string', {char: {pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0}}),
                delete E.languages.go['class-name'],
                (function (e) {
                    function t(e, t) {
                        return '___' + e.toUpperCase() + t + '___';
                    }
                    Object.defineProperties((e.languages['markup-templating'] = {}), {
                        buildPlaceholders: {
                            value: function (n, r, a, o) {
                                if (n.language === r) {
                                    var s = (n.tokenStack = []);
                                    ((n.code = n.code.replace(a, function (e) {
                                        if ('function' == typeof o && !o(e)) return e;
                                        for (var a, i = s.length; -1 !== n.code.indexOf((a = t(r, i))); ) ++i;
                                        return ((s[i] = e), a);
                                    })),
                                        (n.grammar = e.languages.markup));
                                }
                            },
                        },
                        tokenizePlaceholders: {
                            value: function (n, r) {
                                if (n.language === r && n.tokenStack) {
                                    n.grammar = e.languages[r];
                                    var a = 0,
                                        o = Object.keys(n.tokenStack);
                                    !(function s(i) {
                                        for (var l = 0; l < i.length && !(a >= o.length); l++) {
                                            var u = i[l];
                                            if ('string' == typeof u || (u.content && 'string' == typeof u.content)) {
                                                var c = o[a],
                                                    p = n.tokenStack[c],
                                                    d = 'string' == typeof u ? u : u.content,
                                                    g = t(r, c),
                                                    f = d.indexOf(g);
                                                if (f > -1) {
                                                    ++a;
                                                    var b = d.substring(0, f),
                                                        m = new e.Token(
                                                            r,
                                                            e.tokenize(p, n.grammar),
                                                            'language-' + r,
                                                            p,
                                                        ),
                                                        h = d.substring(f + g.length),
                                                        y = [];
                                                    (b && y.push.apply(y, s([b])),
                                                        y.push(m),
                                                        h && y.push.apply(y, s([h])),
                                                        'string' == typeof u
                                                            ? i.splice.apply(i, [l, 1].concat(y))
                                                            : (u.content = y));
                                                }
                                            } else u.content && s(u.content);
                                        }
                                        return i;
                                    })(n.tokens);
                                }
                            },
                        },
                    });
                })(E),
                (E.languages.handlebars = {
                    comment: /\{\{![\s\S]*?\}\}/,
                    delimiter: {pattern: /^\{\{\{?|\}\}\}?$/, alias: 'punctuation'},
                    string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
                    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
                    boolean: /\b(?:false|true)\b/,
                    block: {pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/, lookbehind: !0, alias: 'keyword'},
                    brackets: {pattern: /\[[^\]]+\]/, inside: {punctuation: /\[|\]/, variable: /[\s\S]+/}},
                    punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
                    variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/,
                }),
                E.hooks.add('before-tokenize', function (e) {
                    E.languages['markup-templating'].buildPlaceholders(
                        e,
                        'handlebars',
                        /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g,
                    );
                }),
                E.hooks.add('after-tokenize', function (e) {
                    E.languages['markup-templating'].tokenizePlaceholders(e, 'handlebars');
                }),
                (E.languages.hbs = E.languages.handlebars),
                (E.languages.json = {
                    property: {pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0},
                    string: {pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0},
                    comment: {pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0},
                    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
                    punctuation: /[{}[\],]/,
                    operator: /:/,
                    boolean: /\b(?:false|true)\b/,
                    null: {pattern: /\bnull\b/, alias: 'keyword'},
                }),
                (E.languages.webmanifest = E.languages.json),
                (E.languages.less = E.languages.extend('css', {
                    comment: [/\/\*[\s\S]*?\*\//, {pattern: /(^|[^\\])\/\/.*/, lookbehind: !0}],
                    atrule: {
                        pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
                        inside: {punctuation: /[:()]/},
                    },
                    selector: {
                        pattern:
                            /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
                        inside: {variable: /@+[\w-]+/},
                    },
                    property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
                    operator: /[+\-*\/]/,
                })),
                E.languages.insertBefore('less', 'property', {
                    variable: [{pattern: /@[\w-]+\s*:/, inside: {punctuation: /:/}}, /@@?[\w-]+/],
                    'mixin-usage': {pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/, lookbehind: !0, alias: 'function'},
                }),
                (E.languages.makefile = {
                    comment: {pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/, lookbehind: !0},
                    string: {pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
                    'builtin-target': {pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/, alias: 'builtin'},
                    target: {
                        pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
                        alias: 'symbol',
                        inside: {variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/},
                    },
                    variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
                    keyword:
                        /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
                    function: {
                        pattern:
                            /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
                        lookbehind: !0,
                    },
                    operator: /(?:::|[?:+!])?=|[|@]/,
                    punctuation: /[:;(){}]/,
                }),
                (E.languages.objectivec = E.languages.extend('c', {
                    string: {pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0},
                    keyword:
                        /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
                    operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
                })),
                delete E.languages.objectivec['class-name'],
                (E.languages.objc = E.languages.objectivec),
                (E.languages.ocaml = {
                    comment: {pattern: /\(\*[\s\S]*?\*\)/, greedy: !0},
                    char: {pattern: /'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i, greedy: !0},
                    string: [
                        {pattern: /"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/, greedy: !0},
                        {pattern: /\{([a-z_]*)\|[\s\S]*?\|\1\}/, greedy: !0},
                    ],
                    number: [
                        /\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i,
                        /\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i,
                        /\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i,
                    ],
                    directive: {pattern: /\B#\w+/, alias: 'property'},
                    label: {pattern: /\B~\w+/, alias: 'property'},
                    'type-variable': {pattern: /\B'\w+/, alias: 'function'},
                    variant: {pattern: /`\w+/, alias: 'symbol'},
                    keyword:
                        /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
                    boolean: /\b(?:false|true)\b/,
                    'operator-like-punctuation': {pattern: /\[[<>|]|[>|]\]|\{<|>\}/, alias: 'punctuation'},
                    operator:
                        /\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
                    punctuation: /;;|::|[(){}\[\].,:;#]|\b_\b/,
                }),
                (E.languages.python = {
                    comment: {pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0},
                    'string-interpolation': {
                        pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
                        greedy: !0,
                        inside: {
                            interpolation: {
                                pattern:
                                    /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                                lookbehind: !0,
                                inside: {
                                    'format-spec': {pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: !0},
                                    'conversion-option': {pattern: /![sra](?=[:}]$)/, alias: 'punctuation'},
                                    rest: null,
                                },
                            },
                            string: /[\s\S]+/,
                        },
                    },
                    'triple-quoted-string': {
                        pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
                        greedy: !0,
                        alias: 'string',
                    },
                    string: {pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: !0},
                    function: {pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: !0},
                    'class-name': {pattern: /(\bclass\s+)\w+/i, lookbehind: !0},
                    decorator: {
                        pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
                        lookbehind: !0,
                        alias: ['annotation', 'punctuation'],
                        inside: {punctuation: /\./},
                    },
                    keyword:
                        /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
                    builtin:
                        /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
                    boolean: /\b(?:False|None|True)\b/,
                    number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
                    operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
                    punctuation: /[{}[\];(),.:]/,
                }),
                (E.languages.python['string-interpolation'].inside.interpolation.inside.rest = E.languages.python),
                (E.languages.py = E.languages.python),
                (E.languages.reason = E.languages.extend('clike', {
                    string: {pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/, greedy: !0},
                    'class-name': /\b[A-Z]\w*/,
                    keyword:
                        /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
                    operator:
                        /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/,
                })),
                E.languages.insertBefore('reason', 'class-name', {
                    char: {pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/, greedy: !0},
                    constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
                    label: {pattern: /\b[a-z]\w*(?=::)/, alias: 'symbol'},
                }),
                delete E.languages.reason.function,
                (E.languages.sass = E.languages.extend('css', {
                    comment: {pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m, lookbehind: !0, greedy: !0},
                })),
                E.languages.insertBefore('sass', 'atrule', {
                    'atrule-line': {pattern: /^(?:[ \t]*)[@+=].+/m, greedy: !0, inside: {atrule: /(?:@[\w-]+|[+=])/}},
                }),
                delete E.languages.sass.atrule,
                (p = /\$[-\w]+|#\{\$[-\w]+\}/),
                (d = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/, {pattern: /(\s)-(?=\s)/, lookbehind: !0}]),
                E.languages.insertBefore('sass', 'property', {
                    'variable-line': {
                        pattern: /^[ \t]*\$.+/m,
                        greedy: !0,
                        inside: {punctuation: /:/, variable: p, operator: d},
                    },
                    'property-line': {
                        pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
                        greedy: !0,
                        inside: {
                            property: [/[^:\s]+(?=\s*:)/, {pattern: /(:)[^:\s]+/, lookbehind: !0}],
                            punctuation: /:/,
                            variable: p,
                            operator: d,
                            important: E.languages.sass.important,
                        },
                    },
                }),
                delete E.languages.sass.property,
                delete E.languages.sass.important,
                E.languages.insertBefore('sass', 'punctuation', {
                    selector: {
                        pattern:
                            /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
                        lookbehind: !0,
                        greedy: !0,
                    },
                }),
                (E.languages.scss = E.languages.extend('css', {
                    comment: {pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0},
                    atrule: {pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/, inside: {rule: /@[\w-]+/}},
                    url: /(?:[-a-z]+-)?url(?=\()/i,
                    selector: {
                        pattern:
                            /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
                        inside: {
                            parent: {pattern: /&/, alias: 'important'},
                            placeholder: /%[-\w]+/,
                            variable: /\$[-\w]+|#\{\$[-\w]+\}/,
                        },
                    },
                    property: {
                        pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
                        inside: {variable: /\$[-\w]+|#\{\$[-\w]+\}/},
                    },
                })),
                E.languages.insertBefore('scss', 'atrule', {
                    keyword: [
                        /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
                        {pattern: /( )(?:from|through)(?= )/, lookbehind: !0},
                    ],
                }),
                E.languages.insertBefore('scss', 'important', {variable: /\$[-\w]+|#\{\$[-\w]+\}/}),
                E.languages.insertBefore('scss', 'function', {
                    'module-modifier': {pattern: /\b(?:as|hide|show|with)\b/i, alias: 'keyword'},
                    placeholder: {pattern: /%[-\w]+/, alias: 'selector'},
                    statement: {pattern: /\B!(?:default|optional)\b/i, alias: 'keyword'},
                    boolean: /\b(?:false|true)\b/,
                    null: {pattern: /\bnull\b/, alias: 'keyword'},
                    operator: {pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/, lookbehind: !0},
                }),
                (E.languages.scss.atrule.inside.rest = E.languages.scss),
                ((b = {
                    comment: {pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0},
                    url: {pattern: /\burl\((["']?).*?\1\)/i, greedy: !0},
                    string: {pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/, greedy: !0},
                    interpolation: null,
                    func: null,
                    important: /\B!(?:important|optional)\b/i,
                    keyword: {pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/, lookbehind: !0},
                    hexcode: /#[\da-f]{3,6}/i,
                    color: [
                        /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
                        {
                            pattern:
                                /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                            inside: {
                                unit: (g = {pattern: /(\b\d+)(?:%|[a-z]+)/, lookbehind: !0}),
                                number: (f = {pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0}),
                                function: /[\w-]+(?=\()/,
                                punctuation: /[(),]/,
                            },
                        },
                    ],
                    entity: /\\[\da-f]{1,8}/i,
                    unit: g,
                    boolean: /\b(?:false|true)\b/,
                    operator: [
                        /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
                    ],
                    number: f,
                    punctuation: /[{}()\[\];:,]/,
                }).interpolation = {
                    pattern: /\{[^\r\n}:]+\}/,
                    alias: 'variable',
                    inside: {delimiter: {pattern: /^\{|\}$/, alias: 'punctuation'}, rest: b},
                }),
                (b.func = {pattern: /[\w-]+\([^)]*\).*/, inside: {function: /^[^(]+/, rest: b}}),
                (E.languages.stylus = {
                    'atrule-declaration': {
                        pattern: /(^[ \t]*)@.+/m,
                        lookbehind: !0,
                        inside: {atrule: /^@[\w-]+/, rest: b},
                    },
                    'variable-declaration': {
                        pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
                        lookbehind: !0,
                        inside: {variable: /^\S+/, rest: b},
                    },
                    statement: {
                        pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
                        lookbehind: !0,
                        inside: {keyword: /^\S+/, rest: b},
                    },
                    'property-declaration': {
                        pattern:
                            /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
                        lookbehind: !0,
                        inside: {property: {pattern: /^[^\s:]+/, inside: {interpolation: b.interpolation}}, rest: b},
                    },
                    selector: {
                        pattern:
                            /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
                        lookbehind: !0,
                        inside: {interpolation: b.interpolation, comment: b.comment, punctuation: /[{},]/},
                    },
                    func: b.func,
                    string: b.string,
                    comment: {pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0, greedy: !0},
                    interpolation: b.interpolation,
                    punctuation: /[{}()\[\];:.]/,
                }),
                (m = E.util.clone(E.languages.typescript)),
                (E.languages.tsx = E.languages.extend('jsx', m)),
                delete E.languages.tsx.parameter,
                delete E.languages.tsx['literal-property'],
                ((h = E.languages.tsx.tag).pattern = RegExp(
                    /(^|[^\w$]|(?=<\/))/.source + '(?:' + h.pattern.source + ')',
                    h.pattern.flags,
                )),
                (h.lookbehind = !0),
                (E.languages.wasm = {
                    comment: [/\(;[\s\S]*?;\)/, {pattern: /;;.*/, greedy: !0}],
                    string: {pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0},
                    keyword: [
                        {pattern: /\b(?:align|offset)=/, inside: {operator: /=/}},
                        {
                            pattern:
                                /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
                            inside: {punctuation: /\./},
                        },
                        /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
                    ],
                    variable: /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
                    number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
                    punctuation: /[()]/,
                }));
            var v = {
                Prism: E,
                theme: {
                    plain: {backgroundColor: '#2a2734', color: '#9a86fd'},
                    styles: [
                        {types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'], style: {color: '#6c6783'}},
                        {types: ['namespace'], style: {opacity: 0.7}},
                        {types: ['tag', 'operator', 'number'], style: {color: '#e09142'}},
                        {types: ['property', 'function'], style: {color: '#9a86fd'}},
                        {types: ['tag-id', 'selector', 'atrule-id'], style: {color: '#eeebff'}},
                        {types: ['attr-name'], style: {color: '#c4b9fe'}},
                        {
                            types: [
                                'boolean',
                                'string',
                                'entity',
                                'url',
                                'attr-value',
                                'keyword',
                                'control',
                                'directive',
                                'unit',
                                'statement',
                                'regex',
                                'atrule',
                                'placeholder',
                                'variable',
                            ],
                            style: {color: '#ffcc99'},
                        },
                        {types: ['deleted'], style: {textDecorationLine: 'line-through'}},
                        {types: ['inserted'], style: {textDecorationLine: 'underline'}},
                        {types: ['italic'], style: {fontStyle: 'italic'}},
                        {types: ['important', 'bold'], style: {fontWeight: 'bold'}},
                        {types: ['important'], style: {color: '#c4b9fe'}},
                    ],
                },
            };
            function S(e, t, n) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0})
                        : (e[t] = n),
                    e
                );
            }
            function w() {
                return (w =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            var A = /\r\n|\r|\n/,
                T = function (e) {
                    0 === e.length
                        ? e.push({types: ['plain'], content: '\n', empty: !0})
                        : 1 === e.length && '' === e[0].content && ((e[0].content = '\n'), (e[0].empty = !0));
                },
                _ = function (e, t) {
                    var n = e.length;
                    return n > 0 && e[n - 1] === t ? e : e.concat(t);
                },
                x = function (e) {
                    for (var t = [[]], n = [e], r = [0], a = [e.length], o = 0, s = 0, i = [], l = [i]; s > -1; ) {
                        for (; (o = r[s]++) < a[s]; ) {
                            var u = void 0,
                                c = t[s],
                                p = n[s][o];
                            if (
                                ('string' == typeof p
                                    ? ((c = s > 0 ? c : ['plain']), (u = p))
                                    : ((c = _(c, p.type)), p.alias && (c = _(c, p.alias)), (u = p.content)),
                                'string' != typeof u)
                            ) {
                                (s++, t.push(c), n.push(u), r.push(0), a.push(u.length));
                                continue;
                            }
                            var d = u.split(A),
                                g = d.length;
                            i.push({types: c, content: d[0]});
                            for (var f = 1; f < g; f++) (T(i), l.push((i = [])), i.push({types: c, content: d[f]}));
                        }
                        (s--, t.pop(), n.pop(), r.pop(), a.pop());
                    }
                    return (T(i), l);
                },
                R = function (e, t) {
                    var n = e.plain,
                        r = Object.create(null),
                        a = e.styles.reduce(function (e, n) {
                            var r = n.languages,
                                a = n.style;
                            return (
                                (r && !r.includes(t)) ||
                                    n.types.forEach(function (t) {
                                        var n = w({}, e[t], a);
                                        e[t] = n;
                                    }),
                                e
                            );
                        }, r);
                    return ((a.root = n), (a.plain = w({}, n, {backgroundColor: null})), a);
                };
            function O(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && -1 === t.indexOf(r) && (n[r] = e[r]);
                return n;
            }
            var I = (function (e) {
                    function t() {
                        for (var t = this, n = [], r = arguments.length; r--; ) n[r] = arguments[r];
                        (e.apply(this, n),
                            S(this, 'getThemeDict', function (e) {
                                if (void 0 !== t.themeDict && e.theme === t.prevTheme && e.language === t.prevLanguage)
                                    return t.themeDict;
                                ((t.prevTheme = e.theme), (t.prevLanguage = e.language));
                                var n = e.theme ? R(e.theme, e.language) : void 0;
                                return (t.themeDict = n);
                            }),
                            S(this, 'getLineProps', function (e) {
                                var n = e.key,
                                    r = e.className,
                                    a = e.style,
                                    o = w({}, O(e, ['key', 'className', 'style', 'line']), {
                                        className: 'token-line',
                                        style: void 0,
                                        key: void 0,
                                    }),
                                    s = t.getThemeDict(t.props);
                                return (
                                    void 0 !== s && (o.style = s.plain),
                                    void 0 !== a && (o.style = void 0 !== o.style ? w({}, o.style, a) : a),
                                    void 0 !== n && (o.key = n),
                                    r && (o.className += ' ' + r),
                                    o
                                );
                            }),
                            S(this, 'getStyleForToken', function (e) {
                                var n = e.types,
                                    r = e.empty,
                                    a = n.length,
                                    o = t.getThemeDict(t.props);
                                if (void 0 !== o) {
                                    if (1 === a && 'plain' === n[0]) return r ? {display: 'inline-block'} : void 0;
                                    if (1 === a && !r) return o[n[0]];
                                    var s = n.map(function (e) {
                                        return o[e];
                                    });
                                    return Object.assign.apply(Object, [r ? {display: 'inline-block'} : {}].concat(s));
                                }
                            }),
                            S(this, 'getTokenProps', function (e) {
                                var n = e.key,
                                    r = e.className,
                                    a = e.style,
                                    o = e.token,
                                    s = w({}, O(e, ['key', 'className', 'style', 'token']), {
                                        className: 'token ' + o.types.join(' '),
                                        children: o.content,
                                        style: t.getStyleForToken(o),
                                        key: void 0,
                                    });
                                return (
                                    void 0 !== a && (s.style = void 0 !== s.style ? w({}, s.style, a) : a),
                                    void 0 !== n && (s.key = n),
                                    r && (s.className += ' ' + r),
                                    s
                                );
                            }),
                            S(this, 'tokenize', function (e, t, n, r) {
                                var a = {code: t, grammar: n, language: r, tokens: []};
                                e.hooks.run('before-tokenize', a);
                                var o = (a.tokens = e.tokenize(a.code, a.grammar, a.language));
                                return (e.hooks.run('after-tokenize', a), o);
                            }));
                    }
                    return (
                        e && (t.__proto__ = e),
                        (t.prototype = Object.create(e && e.prototype)),
                        (t.prototype.constructor = t),
                        (t.prototype.render = function () {
                            var e = this.props,
                                t = e.Prism,
                                n = e.language,
                                r = e.code,
                                a = e.children,
                                o = this.getThemeDict(this.props),
                                s = t.languages[n];
                            return a({
                                tokens: x(void 0 !== s ? this.tokenize(t, r, s, n) : [r]),
                                className: 'prism-code language-' + n,
                                style: void 0 !== o ? o.root : {},
                                getLineProps: this.getLineProps,
                                getTokenProps: this.getTokenProps,
                            });
                        }),
                        t
                    );
                })(k.Component),
                N = n(23843),
                L = n(5963),
                F = n(55226),
                C = n(9985),
                D = n(54171),
                B = n(33398);
            function P({copied: e}) {
                return k.createElement(
                    'svg',
                    {
                        viewBox: '0 0 15 15',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        style: {width: '1rem', height: '1rem'},
                    },
                    e
                        ? k.createElement('path', {
                              d: 'M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z',
                              fill: 'currentColor',
                              fillRule: 'evenodd',
                              clipRule: 'evenodd',
                          })
                        : k.createElement('path', {
                              d: 'M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM11 2V2.25C11 2.66421 10.6642 3 10.25 3H4.75C4.33579 3 4 2.66421 4 2.25V2H3.5C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V2.5C12 2.22386 11.7761 2 11.5 2H11Z',
                              fill: 'currentColor',
                              fillRule: 'evenodd',
                              clipRule: 'evenodd',
                          }),
                );
            }
            P.displayName = '@mantine/prism/CopyIcon';
            let $ = (e) => ({
                    plain: {color: e.colors.gray[4], backgroundColor: e.colors.dark[8]},
                    styles: [
                        {types: ['comment'], style: {color: e.colors.gray[6]}},
                        {types: ['string', 'inserted', 'selector', 'atrule'], style: {color: e.colors.teal[4]}},
                        {types: ['number'], style: {color: e.colors.blue[4]}},
                        {types: ['builtin', 'char', 'constant', 'function'], style: {color: e.colors.orange[5]}},
                        {types: ['punctuation'], style: {color: e.colors.gray[5]}},
                        {types: ['variable'], style: {color: e.colors.gray[5]}},
                        {types: ['class-name', 'attr-name'], style: {color: e.colors.yellow[5]}},
                        {types: ['tag', 'deleted'], style: {color: e.colors.red[6]}},
                        {types: ['operator'], style: {color: e.colors.gray[5]}},
                        {types: ['boolean'], style: {color: e.colors.red[6]}},
                        {types: ['keyword'], style: {color: e.colors.indigo[3]}},
                        {types: ['doctype'], style: {color: e.colors.gray[5]}},
                        {types: ['url'], style: {color: e.colors.gray[5]}},
                    ],
                }),
                M = (e) => ({
                    plain: {color: e.colors.gray[9], backgroundColor: e.fn.rgba(e.colors.gray[0], 0.65)},
                    styles: [
                        {types: ['comment'], style: {color: e.colors.gray[6]}},
                        {types: ['string', 'inserted'], style: {color: e.colors.indigo[9]}},
                        {types: ['number'], style: {color: e.colors.blue[7]}},
                        {
                            types: ['builtin', 'char', 'constant', 'function', 'selector', 'atrule'],
                            style: {color: e.colors.lime[9]},
                        },
                        {types: ['punctuation'], style: {color: e.colors.gray[7]}},
                        {types: ['variable'], style: {color: e.colors.violet[9]}},
                        {types: ['attr-name'], style: {color: e.colors.green[9]}},
                        {types: ['class-name'], style: {color: e.colors.red[9]}},
                        {types: ['tag', 'deleted'], style: {color: e.colors.violet[9]}},
                        {types: ['operator'], style: {color: e.colors.red[9]}},
                        {types: ['boolean'], style: {color: e.colors.red[9]}},
                        {types: ['keyword'], style: {color: e.colors.red[9]}},
                        {types: ['doctype'], style: {color: e.colors.gray[7]}},
                        {types: ['url'], style: {color: e.colors.gray[7]}},
                    ],
                });
            var G = n(41528),
                j = n(49819),
                U = (0, G.k)((e, {colorScheme: t, native: n, maxLineSize: r, radius: a}) => ({
                    scrollArea: {},
                    root: {position: 'relative'},
                    code: {
                        boxSizing: 'border-box',
                        position: 'relative',
                        fontFamily: e.fontFamilyMonospace,
                        lineHeight: 1.7,
                        fontSize: (0, j.h)(13),
                        overflowX: n ? 'auto' : void 0,
                        borderRadius: e.fn.radius(a),
                        padding: `${e.spacing.sm} 0`,
                        '&.mantine-Prism-code': {marginTop: 0, marginBottom: 0},
                    },
                    copy: {
                        position: 'absolute',
                        top: e.spacing.xs,
                        right: 'ltr' === e.dir ? e.spacing.xs : 'unset',
                        left: 'rtl' === e.dir ? e.spacing.xs : 'unset',
                        zIndex: 2,
                        '&, &:hover': {backgroundColor: 'dark' === t ? e.colors.dark[8] : e.colors.gray[0]},
                    },
                    line: {display: 'flex', width: '100%', padding: `0 ${e.spacing.md}`},
                    lineNumber: {
                        color: 'dark' === t ? e.colors.dark[4] : e.colors.gray[4],
                        textAlign: 'right',
                        width: `calc(8 * ${(0, j.h)(r)})`,
                        marginRight: 'ltr' === e.dir ? e.spacing.xs : void 0,
                        marginLeft: 'rtl' === e.dir ? e.spacing.xs : void 0,
                        userSelect: 'none',
                    },
                    lineContent: {width: '100%'},
                })),
                z = Object.defineProperty,
                H = Object.defineProperties,
                q = Object.getOwnPropertyDescriptors,
                Y = Object.getOwnPropertySymbols,
                Z = Object.prototype.hasOwnProperty,
                V = Object.prototype.propertyIsEnumerable,
                W = (e, t, n) =>
                    t in e ? z(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : (e[t] = n),
                X = (e, t) => {
                    for (var n in t || (t = {})) Z.call(t, n) && W(e, n, t[n]);
                    if (Y) for (var n of Y(t)) V.call(t, n) && W(e, n, t[n]);
                    return e;
                },
                K = (e, t) => H(e, q(t)),
                Q = (e, t) => {
                    var n = {};
                    for (var r in e) Z.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                    if (null != e && Y) for (var r of Y(e)) 0 > t.indexOf(r) && V.call(e, r) && (n[r] = e[r]);
                    return n;
                };
            let J = {
                    noCopy: !1,
                    copyLabel: 'Copy code',
                    copiedLabel: 'Copied',
                    withLineNumbers: !1,
                    trim: !0,
                    highlightLines: {},
                    scrollAreaComponent: N.x,
                    getPrismTheme: (e, t) => ('dark' === t ? $(e) : M(e)),
                },
                ee = (0, k.forwardRef)((e, t) => {
                    let n = (0, L.N4)('Prism', J, e),
                        {
                            className: r,
                            children: a,
                            language: o,
                            noCopy: s,
                            classNames: i,
                            styles: l,
                            copyLabel: u,
                            copiedLabel: c,
                            withLineNumbers: p,
                            highlightLines: d,
                            scrollAreaComponent: g,
                            colorScheme: f,
                            trim: b,
                            unstyled: m,
                            radius: h,
                            getPrismTheme: y,
                            variant: E,
                        } = n,
                        S = Q(n, [
                            'className',
                            'children',
                            'language',
                            'noCopy',
                            'classNames',
                            'styles',
                            'copyLabel',
                            'copiedLabel',
                            'withLineNumbers',
                            'highlightLines',
                            'scrollAreaComponent',
                            'colorScheme',
                            'trim',
                            'unstyled',
                            'radius',
                            'getPrismTheme',
                            'variant',
                        ]),
                        w = b && 'string' == typeof a ? a.trim() : a,
                        A = w.split('\n').length.toString().length,
                        T = (0, L.rZ)(),
                        _ = (0, B.V)(),
                        x = f || T.colorScheme,
                        {classes: R, cx: O} = U(
                            {colorScheme: x, native: g !== N.x, maxLineSize: A, radius: h},
                            {name: 'Prism', classNames: i, styles: l, unstyled: m, variant: E},
                        );
                    return k.createElement(
                        F.x,
                        K(X({className: O(R.root, r), ref: t}, S), {translate: 'no'}),
                        !s &&
                            k.createElement(
                                C.u,
                                {
                                    label: _.copied ? c : u,
                                    position: 'left',
                                    withArrow: !0,
                                    arrowSize: 6,
                                    offset: 6,
                                    color: _.copied ? 'teal' : void 0,
                                    unstyled: m,
                                },
                                k.createElement(
                                    D.A,
                                    {
                                        className: R.copy,
                                        'aria-label': _.copied ? c : u,
                                        onClick: () => _.copy(w),
                                        unstyled: m,
                                    },
                                    k.createElement(P, {copied: _.copied}),
                                ),
                            ),
                        k.createElement(
                            I,
                            K(X({}, v), {theme: y(T, x), code: w, language: o}),
                            ({className: e, style: t, tokens: n, getLineProps: r, getTokenProps: a}) =>
                                k.createElement(
                                    g,
                                    {className: R.scrollArea, dir: 'ltr'},
                                    k.createElement(
                                        'pre',
                                        {className: O(R.code, e), style: t, dir: 'ltr'},
                                        n
                                            .map((e, t) => {
                                                var o, s, i, l;
                                                if (t === n.length - 1 && 1 === e.length && '\n' === e[0].content)
                                                    return null;
                                                let u = t + 1,
                                                    c = r({line: e, key: t}),
                                                    g = u in d,
                                                    f =
                                                        'dark' === x
                                                            ? T.fn.rgba(
                                                                  T.fn.themeColor(
                                                                      null == (o = d[u]) ? void 0 : o.color,
                                                                      9,
                                                                  ),
                                                                  0.25,
                                                              )
                                                            : T.fn.themeColor(null == (s = d[u]) ? void 0 : s.color, 0);
                                                return k.createElement(
                                                    'div',
                                                    K(X({}, c), {
                                                        className: O(R.line, c.className),
                                                        style: X({}, g ? {backgroundColor: f} : null),
                                                    }),
                                                    p &&
                                                        k.createElement(
                                                            'div',
                                                            {
                                                                className: R.lineNumber,
                                                                style: {
                                                                    color: g
                                                                        ? T.fn.themeColor(
                                                                              null == (i = d[u]) ? void 0 : i.color,
                                                                              'dark' === x ? 5 : 8,
                                                                          )
                                                                        : void 0,
                                                                },
                                                            },
                                                            (null == (l = d[u]) ? void 0 : l.label) || u,
                                                        ),
                                                    k.createElement(
                                                        'div',
                                                        {className: R.lineContent},
                                                        e.map((e, t) => {
                                                            var n, r;
                                                            let o = a({token: e, key: t});
                                                            return k.createElement(
                                                                'span',
                                                                K(X({}, o), {
                                                                    style: K(X({}, o.style), {
                                                                        color: g
                                                                            ? T.fn.themeColor(
                                                                                  null == (n = d[u]) ? void 0 : n.color,
                                                                                  'dark' === x ? 5 : 8,
                                                                              )
                                                                            : null == (r = null == o ? void 0 : o.style)
                                                                              ? void 0
                                                                              : r.color,
                                                                    }),
                                                                }),
                                                            );
                                                        }),
                                                    ),
                                                );
                                            })
                                            .filter(Boolean),
                                    ),
                                ),
                        ),
                    );
                });
            ee.displayName = '@mantine/prism/Prism';
            var et = (0, G.k)((e, {radius: t}) => ({
                    tab: {
                        paddingLeft: e.spacing.sm,
                        paddingRight: e.spacing.sm,
                        height: (0, j.h)(34),
                        border: `${(0, j.h)(1)} solid ${'dark' === e.colorScheme ? e.colors.dark[5] : e.colors.gray[3]}`,
                        borderBottom: 0,
                        fontSize: e.fontSizes.sm,
                        color: 'dark' === e.colorScheme ? e.colors.dark[1] : e.colors.gray[7],
                        backgroundColor: 'dark' === e.colorScheme ? e.colors.dark[6] : e.white,
                        borderRadius: 0,
                        '&:first-of-type': {borderTopLeftRadius: e.radius.sm},
                        '&:not(:first-of-type)': {borderLeft: 0},
                        '&:last-of-type': {borderTopRightRadius: e.radius.sm},
                        '&:hover': {backgroundColor: 'dark' === e.colorScheme ? e.colors.dark[7] : e.colors.gray[0]},
                        '&[data-active]': {
                            color: 'dark' === e.colorScheme ? e.white : e.black,
                            backgroundColor:
                                'dark' === e.colorScheme ? e.colors.dark[8] : e.fn.rgba(e.colors.gray[0], 0.65),
                            '&::before': {backgroundColor: 'transparent'},
                        },
                    },
                    prism: {
                        borderRadius: e.fn.radius(t),
                        borderTopRightRadius: 0,
                        borderTopLeftRadius: 0,
                        border: `${(0, j.h)(1)} solid ${'dark' === e.colorScheme ? e.colors.dark[4] : e.colors.gray[3]}`,
                        borderTop: 0,
                        overflow: 'hidden',
                    },
                    code: {borderTopRightRadius: 0, borderTopLeftRadius: 0, border: 0},
                })),
                en = Object.defineProperty,
                er = Object.defineProperties,
                ea = Object.getOwnPropertyDescriptors,
                eo = Object.getOwnPropertySymbols,
                es = Object.prototype.hasOwnProperty,
                ei = Object.prototype.propertyIsEnumerable,
                el = (e, t, n) =>
                    t in e ? en(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : (e[t] = n),
                eu = (e, t) => {
                    for (var n in t || (t = {})) es.call(t, n) && el(e, n, t[n]);
                    if (eo) for (var n of eo(t)) ei.call(t, n) && el(e, n, t[n]);
                    return e;
                },
                ec = (e, t) => er(e, ea(t)),
                ep = (e, t) => {
                    var n = {};
                    for (var r in e) es.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                    if (null != e && eo) for (var r of eo(e)) 0 > t.indexOf(r) && ei.call(e, r) && (n[r] = e[r]);
                    return n;
                };
            let ed = ee;
            ((ed.Tabs = function (e) {
                let {classes: t} = et({radius: e.radius});
                return k.createElement(
                    y.m,
                    ec(eu({}, e), {variant: 'outline', classNames: {tab: t.tab}, translate: 'no'}),
                );
            }),
                (ed.Tab = y.m.Tab),
                (ed.TabsList = y.m.List),
                (ed.Panel = function (e) {
                    var {
                            language: t,
                            children: n,
                            radius: r,
                            noCopy: a,
                            copyLabel: o,
                            copiedLabel: s,
                            withLineNumbers: i,
                            highlightLines: l,
                            scrollAreaComponent: u,
                            trim: c,
                            getPrismTheme: p,
                            colorScheme: d,
                            variant: g,
                        } = e,
                        f = ep(e, [
                            'language',
                            'children',
                            'radius',
                            'noCopy',
                            'copyLabel',
                            'copiedLabel',
                            'withLineNumbers',
                            'highlightLines',
                            'scrollAreaComponent',
                            'trim',
                            'getPrismTheme',
                            'colorScheme',
                            'variant',
                        ]);
                    let {classes: b} = et({radius: r});
                    return k.createElement(
                        y.m.Panel,
                        eu({}, f),
                        k.createElement(
                            ee,
                            {
                                language: t,
                                classNames: {root: b.prism, code: b.code},
                                radius: r,
                                noCopy: a,
                                copyLabel: o,
                                copiedLabel: s,
                                withLineNumbers: i,
                                highlightLines: l,
                                scrollAreaComponent: u,
                                trim: c,
                                getPrismTheme: p,
                                colorScheme: d,
                                variant: g,
                            },
                            n,
                        ),
                    );
                }));
        },
        96846: function (e, t, n) {
            'use strict';
            t.Z = void 0;
            var r = n(80461);
            t.Z = function (e) {
                var t;
                return (
                    (t = JSON.stringify(e)),
                    r.compressToBase64(t).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
                );
            };
        },
        80461: function (e, t, n) {
            var r,
                a = (function () {
                    var e = String.fromCharCode,
                        t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
                        n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
                        r = {};
                    function a(e, t) {
                        if (!r[e]) {
                            r[e] = {};
                            for (var n = 0; n < e.length; n++) r[e][e.charAt(n)] = n;
                        }
                        return r[e][t];
                    }
                    var o = {
                        compressToBase64: function (e) {
                            if (null == e) return '';
                            var n = o._compress(e, 6, function (e) {
                                return t.charAt(e);
                            });
                            switch (n.length % 4) {
                                default:
                                case 0:
                                    return n;
                                case 1:
                                    return n + '===';
                                case 2:
                                    return n + '==';
                                case 3:
                                    return n + '=';
                            }
                        },
                        decompressFromBase64: function (e) {
                            return null == e
                                ? ''
                                : '' == e
                                  ? null
                                  : o._decompress(e.length, 32, function (n) {
                                        return a(t, e.charAt(n));
                                    });
                        },
                        compressToUTF16: function (t) {
                            return null == t
                                ? ''
                                : o._compress(t, 15, function (t) {
                                      return e(t + 32);
                                  }) + ' ';
                        },
                        decompressFromUTF16: function (e) {
                            return null == e
                                ? ''
                                : '' == e
                                  ? null
                                  : o._decompress(e.length, 16384, function (t) {
                                        return e.charCodeAt(t) - 32;
                                    });
                        },
                        compressToUint8Array: function (e) {
                            for (
                                var t = o.compress(e), n = new Uint8Array(2 * t.length), r = 0, a = t.length;
                                r < a;
                                r++
                            ) {
                                var s = t.charCodeAt(r);
                                ((n[2 * r] = s >>> 8), (n[2 * r + 1] = s % 256));
                            }
                            return n;
                        },
                        decompressFromUint8Array: function (t) {
                            if (null == t) return o.decompress(t);
                            for (var n = Array(t.length / 2), r = 0, a = n.length; r < a; r++)
                                n[r] = 256 * t[2 * r] + t[2 * r + 1];
                            var s = [];
                            return (
                                n.forEach(function (t) {
                                    s.push(e(t));
                                }),
                                o.decompress(s.join(''))
                            );
                        },
                        compressToEncodedURIComponent: function (e) {
                            return null == e
                                ? ''
                                : o._compress(e, 6, function (e) {
                                      return n.charAt(e);
                                  });
                        },
                        decompressFromEncodedURIComponent: function (e) {
                            return null == e
                                ? ''
                                : '' == e
                                  ? null
                                  : ((e = e.replace(/ /g, '+')),
                                    o._decompress(e.length, 32, function (t) {
                                        return a(n, e.charAt(t));
                                    }));
                        },
                        compress: function (t) {
                            return o._compress(t, 16, function (t) {
                                return e(t);
                            });
                        },
                        _compress: function (e, t, n) {
                            if (null == e) return '';
                            var r,
                                a,
                                o,
                                s = {},
                                i = {},
                                l = '',
                                u = '',
                                c = '',
                                p = 2,
                                d = 3,
                                g = 2,
                                f = [],
                                b = 0,
                                m = 0;
                            for (o = 0; o < e.length; o += 1)
                                if (
                                    ((l = e.charAt(o)),
                                    Object.prototype.hasOwnProperty.call(s, l) || ((s[l] = d++), (i[l] = !0)),
                                    (u = c + l),
                                    Object.prototype.hasOwnProperty.call(s, u))
                                )
                                    c = u;
                                else {
                                    if (Object.prototype.hasOwnProperty.call(i, c)) {
                                        if (256 > c.charCodeAt(0)) {
                                            for (r = 0; r < g; r++)
                                                ((b <<= 1), m == t - 1 ? ((m = 0), f.push(n(b)), (b = 0)) : m++);
                                            for (r = 0, a = c.charCodeAt(0); r < 8; r++)
                                                ((b = (b << 1) | (1 & a)),
                                                    m == t - 1 ? ((m = 0), f.push(n(b)), (b = 0)) : m++,
                                                    (a >>= 1));
                                        } else {
                                            for (r = 0, a = 1; r < g; r++)
                                                ((b = (b << 1) | a),
                                                    m == t - 1 ? ((m = 0), f.push(n(b)), (b = 0)) : m++,
                                                    (a = 0));
                                            for (r = 0, a = c.charCodeAt(0); r < 16; r++)
                                                ((b = (b << 1) | (1 & a)),
                                                    m == t - 1 ? ((m = 0), f.push(n(b)), (b = 0)) : m++,
                                                    (a >>= 1));
                                        }
                                        (0 == --p && ((p = Math.pow(2, g)), g++), delete i[c]);
                                    } else
                                        for (r = 0, a = s[c]; r < g; r++)
                                            ((b = (b << 1) | (1 & a)),
                                                m == t - 1 ? ((m = 0), f.push(n(b)), (b = 0)) : m++,
                                                (a >>= 1));
                                    (0 == --p && ((p = Math.pow(2, g)), g++), (s[u] = d++), (c = String(l)));
                                }
                            if ('' !== c) {
                                if (Object.prototype.hasOwnProperty.call(i, c)) {
                                    if (256 > c.charCodeAt(0)) {
                                        for (r = 0; r < g; r++)
                                            ((b <<= 1), m == t - 1 ? ((m = 0), f.push(n(b)), (b = 0)) : m++);
                                        for (r = 0, a = c.charCodeAt(0); r < 8; r++)
                                            ((b = (b << 1) | (1 & a)),
                                                m == t - 1 ? ((m = 0), f.push(n(b)), (b = 0)) : m++,
                                                (a >>= 1));
                                    } else {
                                        for (r = 0, a = 1; r < g; r++)
                                            ((b = (b << 1) | a),
                                                m == t - 1 ? ((m = 0), f.push(n(b)), (b = 0)) : m++,
                                                (a = 0));
                                        for (r = 0, a = c.charCodeAt(0); r < 16; r++)
                                            ((b = (b << 1) | (1 & a)),
                                                m == t - 1 ? ((m = 0), f.push(n(b)), (b = 0)) : m++,
                                                (a >>= 1));
                                    }
                                    (0 == --p && ((p = Math.pow(2, g)), g++), delete i[c]);
                                } else
                                    for (r = 0, a = s[c]; r < g; r++)
                                        ((b = (b << 1) | (1 & a)),
                                            m == t - 1 ? ((m = 0), f.push(n(b)), (b = 0)) : m++,
                                            (a >>= 1));
                                0 == --p && ((p = Math.pow(2, g)), g++);
                            }
                            for (r = 0, a = 2; r < g; r++)
                                ((b = (b << 1) | (1 & a)),
                                    m == t - 1 ? ((m = 0), f.push(n(b)), (b = 0)) : m++,
                                    (a >>= 1));
                            for (;;) {
                                if (((b <<= 1), m == t - 1)) {
                                    f.push(n(b));
                                    break;
                                }
                                m++;
                            }
                            return f.join('');
                        },
                        decompress: function (e) {
                            return null == e
                                ? ''
                                : '' == e
                                  ? null
                                  : o._decompress(e.length, 32768, function (t) {
                                        return e.charCodeAt(t);
                                    });
                        },
                        _decompress: function (t, n, r) {
                            var a,
                                o,
                                s,
                                i,
                                l,
                                u,
                                c,
                                p = [],
                                d = 4,
                                g = 4,
                                f = 3,
                                b = '',
                                m = [],
                                h = {val: r(0), position: n, index: 1};
                            for (a = 0; a < 3; a += 1) p[a] = a;
                            for (s = 0, l = 4, u = 1; u != l; )
                                ((i = h.val & h.position),
                                    (h.position >>= 1),
                                    0 == h.position && ((h.position = n), (h.val = r(h.index++))),
                                    (s |= (i > 0 ? 1 : 0) * u),
                                    (u <<= 1));
                            switch (s) {
                                case 0:
                                    for (s = 0, l = 256, u = 1; u != l; )
                                        ((i = h.val & h.position),
                                            (h.position >>= 1),
                                            0 == h.position && ((h.position = n), (h.val = r(h.index++))),
                                            (s |= (i > 0 ? 1 : 0) * u),
                                            (u <<= 1));
                                    c = e(s);
                                    break;
                                case 1:
                                    for (s = 0, l = 65536, u = 1; u != l; )
                                        ((i = h.val & h.position),
                                            (h.position >>= 1),
                                            0 == h.position && ((h.position = n), (h.val = r(h.index++))),
                                            (s |= (i > 0 ? 1 : 0) * u),
                                            (u <<= 1));
                                    c = e(s);
                                    break;
                                case 2:
                                    return '';
                            }
                            for (p[3] = c, o = c, m.push(c); ; ) {
                                if (h.index > t) return '';
                                for (s = 0, l = Math.pow(2, f), u = 1; u != l; )
                                    ((i = h.val & h.position),
                                        (h.position >>= 1),
                                        0 == h.position && ((h.position = n), (h.val = r(h.index++))),
                                        (s |= (i > 0 ? 1 : 0) * u),
                                        (u <<= 1));
                                switch ((c = s)) {
                                    case 0:
                                        for (s = 0, l = 256, u = 1; u != l; )
                                            ((i = h.val & h.position),
                                                (h.position >>= 1),
                                                0 == h.position && ((h.position = n), (h.val = r(h.index++))),
                                                (s |= (i > 0 ? 1 : 0) * u),
                                                (u <<= 1));
                                        ((p[g++] = e(s)), (c = g - 1), d--);
                                        break;
                                    case 1:
                                        for (s = 0, l = 65536, u = 1; u != l; )
                                            ((i = h.val & h.position),
                                                (h.position >>= 1),
                                                0 == h.position && ((h.position = n), (h.val = r(h.index++))),
                                                (s |= (i > 0 ? 1 : 0) * u),
                                                (u <<= 1));
                                        ((p[g++] = e(s)), (c = g - 1), d--);
                                        break;
                                    case 2:
                                        return m.join('');
                                }
                                if ((0 == d && ((d = Math.pow(2, f)), f++), p[c])) b = p[c];
                                else {
                                    if (c !== g) return null;
                                    b = o + o.charAt(0);
                                }
                                (m.push(b),
                                    (p[g++] = o + b.charAt(0)),
                                    d--,
                                    (o = b),
                                    0 == d && ((d = Math.pow(2, f)), f++));
                            }
                        },
                    };
                    return o;
                })();
            void 0 !==
                (r = function () {
                    return a;
                }.call(t, n, t, e)) && (e.exports = r);
        },
        85319: function (e, t) {
            'use strict';
            t.Z = {
                plain: {color: '#9CDCFE', backgroundColor: '#1E1E1E'},
                styles: [
                    {types: ['prolog'], style: {color: 'rgb(0, 0, 128)'}},
                    {types: ['comment'], style: {color: 'rgb(106, 153, 85)'}},
                    {
                        types: ['builtin', 'changed', 'keyword', 'interpolation-punctuation'],
                        style: {color: 'rgb(86, 156, 214)'},
                    },
                    {types: ['number', 'inserted'], style: {color: 'rgb(181, 206, 168)'}},
                    {types: ['constant'], style: {color: 'rgb(100, 102, 149)'}},
                    {types: ['attr-name', 'variable'], style: {color: 'rgb(156, 220, 254)'}},
                    {
                        types: ['deleted', 'string', 'attr-value', 'template-punctuation'],
                        style: {color: 'rgb(206, 145, 120)'},
                    },
                    {types: ['selector'], style: {color: 'rgb(215, 186, 125)'}},
                    {types: ['tag'], style: {color: 'rgb(78, 201, 176)'}},
                    {types: ['tag'], languages: ['markup'], style: {color: 'rgb(86, 156, 214)'}},
                    {types: ['punctuation', 'operator'], style: {color: 'rgb(212, 212, 212)'}},
                    {types: ['punctuation'], languages: ['markup'], style: {color: '#808080'}},
                    {types: ['function'], style: {color: 'rgb(220, 220, 170)'}},
                    {types: ['class-name'], style: {color: 'rgb(78, 201, 176)'}},
                    {types: ['char'], style: {color: 'rgb(209, 105, 105)'}},
                ],
            };
        },
        25545: function (e, t) {
            'use strict';
            t.Z = {
                plain: {color: '#000000', backgroundColor: '#ffffff'},
                styles: [
                    {types: ['comment'], style: {color: 'rgb(0, 128, 0)'}},
                    {types: ['builtin'], style: {color: 'rgb(0, 112, 193)'}},
                    {types: ['number', 'variable', 'inserted'], style: {color: 'rgb(9, 134, 88)'}},
                    {types: ['operator'], style: {color: 'rgb(0, 0, 0)'}},
                    {types: ['constant', 'char'], style: {color: 'rgb(129, 31, 63)'}},
                    {types: ['tag'], style: {color: 'rgb(128, 0, 0)'}},
                    {types: ['attr-name'], style: {color: 'rgb(255, 0, 0)'}},
                    {types: ['deleted', 'string'], style: {color: 'rgb(163, 21, 21)'}},
                    {types: ['changed', 'punctuation'], style: {color: 'rgb(4, 81, 165)'}},
                    {types: ['function', 'keyword'], style: {color: 'rgb(0, 0, 255)'}},
                    {types: ['class-name'], style: {color: 'rgb(38, 127, 153)'}},
                ],
            };
        },
    },
]);
