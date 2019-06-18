import * as _ from 'underscore';
export type ClassNameTypes = string | string[] | {[key: string]: boolean};

/**
 * Type to use when typing a property or variable that will be used with
 * the "classname" library (https://www.npmjs.com/package/classnames)
 */
export type IClassName = ClassNameTypes | ClassNameTypes[];

export interface IAdditionalClass {
    className: string;
    condition?: (data: any) => boolean;
}

export const getAdditionalClasses = (additionalClasses: IAdditionalClass[], dataToUse: any): IClassName => {
    return _.map(additionalClasses, (additionalClass: IAdditionalClass) =>
        additionalClass.condition
            ? {
                  [additionalClass.className]: additionalClass.condition(dataToUse),
              }
            : additionalClass.className
    );
};
