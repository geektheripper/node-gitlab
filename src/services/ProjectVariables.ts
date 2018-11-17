import { ResourceVariables } from '../templates';
import { BaseServiceOptions } from '../types';

class ProjectVariables extends ResourceVariables {
  constructor(options: BaseServiceOptions) {
    super('projects', null, options);
  }
}

export default ProjectVariables;
