import {TagType} from './tag-type';

export class Tag {
  id: number;
  name: string;
  type: TagType;
  parentTag: TagType = null;
}

