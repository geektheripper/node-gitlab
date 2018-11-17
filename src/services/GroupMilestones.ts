import { ResourceMilestones } from '../templates';
import { BaseServiceOptions } from '../types';

class GroupMilestones extends ResourceMilestones {
  constructor(options: BaseServiceOptions) {
    super('groups', options);
  }
}

export default GroupMilestones;
