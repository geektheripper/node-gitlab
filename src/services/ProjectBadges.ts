import { ResourceBadges } from '../templates';
import { BaseServiceOptions } from '../types';

class ProjectBadges extends ResourceBadges {
  constructor(options: BaseServiceOptions) {
    super('projects', options);
  }
}

export default ProjectBadges;
