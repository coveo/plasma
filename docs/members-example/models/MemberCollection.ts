import * as _ from 'underscore';
import { Collection as BackboneCollection } from 'backbone';
import { IMemberModelAttributes, MemberModel } from './MemberModel';

export class MemberCollection extends BackboneCollection<MemberModel> {

  constructor(members?: IMemberModelAttributes[], options?: any) {
    super(members, _.extend(options || {}, {
      model: MemberModel
    }));
  }
}
