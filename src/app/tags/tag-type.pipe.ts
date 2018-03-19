import {Pipe, PipeTransform} from '@angular/core';
import {TagType} from './model/tag-type';

@Pipe({
  name: 'tagType'
})
export class TagTypePipe implements PipeTransform {

  transform(value: TagType): string {
    return TagType[value];
  }

}
