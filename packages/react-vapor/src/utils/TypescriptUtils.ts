export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type ExampleComponentType<T = {}> = React.FunctionComponent<T> & {title?: string; description?: string};
