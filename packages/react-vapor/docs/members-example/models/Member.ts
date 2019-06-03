export interface IMemberAttributes {
    email?: string;
    sendEmail?: boolean;
}

export const defaultMemberAttributes: IMemberAttributes = {
    email: '',
    sendEmail: false,
};
