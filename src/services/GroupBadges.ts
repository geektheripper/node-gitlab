import { ResourceBadges } from '../templates';
import { BaseServiceOptions } from '../types';

class GroupBadges extends ResourceBadges {
  constructor(options: BaseServiceOptions) {
    super('groups', options);
  }
}

export default GroupBadges;
