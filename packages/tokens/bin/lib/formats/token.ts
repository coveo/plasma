export type Token =
    | {name: string; type: 'variable'; value: string | number}
    | {name: string; type: 'svg'; value: string}
    | {name: string; type: 'class'; value: Record<string, string | number>};
export type TokenGroup = {name: string; children: Array<Token | TokenGroup>};
export type TokenList = Array<Token | TokenGroup>;

export const isTokenGroup = (token: Token | TokenGroup): token is TokenGroup =>
    (token as TokenGroup).children !== undefined;
