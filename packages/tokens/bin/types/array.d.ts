type Falsy = false | 0 | '' | null | undefined;

interface Array<T> {
    filter<S extends T>(predicate: BooleanConstructor, thisArg?: any): Array<Exclude<S, Falsy>>;
}

interface ReadonlyArray<T> {
    filter<S extends T>(predicate: BooleanConstructor, thisArg?: any): Array<Exclude<S, Falsy>>;
}
