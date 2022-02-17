export type Token =
    | {name: string; type: 'variable'; value: string | number}
    | {name: string; type: 'svg'; value: string}
    | {name: string; type: 'class'; value: Record<string, string | number>};
export type TokenGroup = {name: string; children: Array<Token | TokenGroup>};
export type TokenEnum = {name: string; members: string[]};
export type TokenList = Array<Token | TokenGroup | TokenEnum>;

export const isTokenGroup = (token: Token | TokenGroup | TokenEnum): token is TokenGroup =>
    (token as TokenGroup).children !== undefined;

export const isTokenEnum = (token: Token | TokenGroup | TokenEnum): token is TokenEnum =>
    (token as TokenEnum).members !== undefined;
