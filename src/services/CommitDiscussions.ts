import { ResourceDiscussions } from '../templates';
import { BaseServiceOptions } from '../types';

class CommitDiscussions extends ResourceDiscussions {
  constructor(options: BaseServiceOptions) {
    super('projects', 'commits', options);
  }
}

export default CommitDiscussions;
