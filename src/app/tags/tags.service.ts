import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {ContentList} from '../content-list';
import {Tag} from './tag';


@Injectable()
export class TagsService {

  constructor(private http: HttpClient) {
  }

  getTags(): Observable<Tag[]> {
    return this.http.get<ContentList<Tag>>('tags')
      .pipe(map(data => {
        return data.content;
      }));
  }

}
