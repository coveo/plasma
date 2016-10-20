import { Model as BackboneModel } from 'backbone';

export interface IMemberModelAttributes {
  email?: string;
  sendEmail?: boolean;
  id?: string;
}

export interface IMemberModelOptions {
  newlyCreated?: boolean;
}

export class MemberModel extends BackboneModel {
  newlyCreated: boolean;

  get email(): string { return this.get('email'); }

  get sendEmail(): boolean { return this.get('sendEmail'); }

  constructor(attributes?: IMemberModelAttributes, options: IMemberModelOptions = {}) {
    super(attributes, options);

    this.newlyCreated = !!options.newlyCreated;
  }

  defaults(): IMemberModelAttributes {
    return {
      email: '',
      sendEmail: false
    };
  }

  isNew() {
    return this.newlyCreated;
  }
}
