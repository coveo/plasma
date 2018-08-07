
export interface IFieldExpression {
    field: string;
    fieldValue: string;
}

export class ExpressionParser {
    parseFieldExpression(fieldExpression: IFieldExpression): string {
        // TODO : Better handling of exceptions...
        if (fieldExpression.field && fieldExpression.fieldValue) {
            return `@${fieldExpression.field}=${fieldExpression.fieldValue}`;
        } else {
            return null;
        }
    }
}
