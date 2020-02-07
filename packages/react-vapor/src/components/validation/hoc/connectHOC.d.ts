/*
 Fixes a typing issue when using connect inside a HOC component: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31363
 The definition was picked from @types/react-redux@5.0.8

 Without this, we get a "non-assignable type" with the following detail:
 Argument of type 'FunctionComponent<T & { ... }>' is not assignable to parameter of type 'ComponentType<Matching<{ ... }, T & { setIsDirty: (id: string, isDirty: boolean) => { type: string; payload: { ...; }; }; }>>'.
  Type 'FunctionComponent<T & { ... }>' is not assignable to type 'FunctionComponent<Matching<{ ... }, T & { setIsDirty: (id: string, isDirty: boolean) => { type: string; payload: { ...; }; }; }>>'.
    Types of property 'propTypes' are incompatible.
      Type 'WeakValidationMap<T & { ... }>' is not assignable to type 'WeakValidationMap<Matching<{ ... }, T & { setIsDirty: (id: string, isDirty: boolean) => { type: string; payload: { ...; }; }; }>>'.
        Type 'null extends (T & { ... })[K] ? Validator<(T & { setIsDirty: (id: string, isDirty: boolean) => { ...; }; })[K]> : undefined extends (T & { ...; })[K] ? Validator<...> : Validator<...>' is not assignable to type 'null extends Matching<{ ... }, T & { setIsDirty: (id: string, isDirty: boolean) => { type: string; payload: { ...; }; }; }>[K] ? Validator<...> : undefined extends Matching<...>[K] ? Validator<...> :...'.ts(2345)
*/
import {ComponentClass, ComponentType} from 'react';

export type InferableComponentEnhancer<TInjectedProps> = InferableComponentEnhancerWithProps<TInjectedProps, {}>;

export interface InferableComponentEnhancerWithProps<TInjectedProps, TNeedsProps> {
    <P extends TInjectedProps>(component: ComponentType<P>): ComponentClass<
        Omit<P, keyof TInjectedProps> & TNeedsProps
    > & {WrappedComponent: Component<P>};
}
