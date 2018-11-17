import { ResourceNotes } from '../templates';
import { BaseServiceOptions } from '../types';

class EpicNotes extends ResourceNotes {
  constructor(options: BaseServiceOptions) {
    super('groups', 'epics', options);
  }
}

export default EpicNotes;
