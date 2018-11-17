import { ResourceTemplates } from '../templates';
import { BaseServiceOptions } from '../types';

class LicenceTemplates extends ResourceTemplates {
  constructor(options: BaseServiceOptions) {
    super('licences', options);
  }
}

export default LicenceTemplates;
