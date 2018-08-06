
export interface IFieldExpression {
    fieldType: string;
    value: string;
}

export class ExpressionParser {
    parseFieldExpression(fieldExpression: IFieldExpression): string {
        // TODO : Better handling of exceptions...
        if (fieldExpression.fieldType && fieldExpression.value) {
            return `@${fieldExpression.fieldType}=${fieldExpression.value}`;
        } else {
            return null;
        }
    }
}
