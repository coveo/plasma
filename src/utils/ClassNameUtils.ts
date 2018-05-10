export type ClassNameTypes = string | string[] | {[key: string]: boolean};

/**
 * Type to use when typing a property or variable that will be used with
 * the "classname" library (https://www.npmjs.com/package/classnames)
 */
export type IClassName = ClassNameTypes | ClassNameTypes[];
