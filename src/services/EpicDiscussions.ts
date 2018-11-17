import { ResourceDiscussions } from '../templates';
import { BaseServiceOptions } from '../types';

class EpicDiscussions extends ResourceDiscussions {
  constructor(options: BaseServiceOptions) {
    super('groups', 'epics', options);
  }
}

export default EpicDiscussions;
