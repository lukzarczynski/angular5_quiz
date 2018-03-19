import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {Page, PageableData, Sort} from '../shared';
import {Tag} from './model/tag';


@Injectable()
export class TagsService {

  constructor(private http: HttpClient, public snackBar: MatSnackBar) {
  }

  getTags(page?: Page, sort?: Sort, filter?: { [k: string]: string }): Observable<PageableData<Tag>> {
    let httpParams = new HttpParams();
    if (sort) {
      httpParams = httpParams.set('sort', `${sort.active},${sort.direction}`);
    }
    if (page) {
      httpParams = httpParams
        .set('page', '' + page.page)
        .set('size', '' + page.size);
    }
    if (filter) {
      for (const k in filter) {
        if (filter.hasOwnProperty(k)) {
          httpParams = httpParams.set(k, filter[k]);
        }
      }
    }

    return this.http.get<PageableData<Tag>>('tags', {params: httpParams});
  }

  getTag(id: number): Observable<Tag> {
    return this.http.get<Tag>(`tags/${id}`);
  }

  createTag(tag: Tag): Observable<Tag> {
    return this.http.post<Tag>('tags', tag)
      .do(r => this.snackBar.open(`Tag with id ${r.id} has been created`, null, {duration: 3000}));
  }

  editTag(tag: Tag): Observable<Tag> {
    return this.http.put<Tag>(`tags/${tag.id}`, tag)
      .do(r => this.snackBar.open(`Tag with id ${r.id} has been updated`, null, {duration: 3000}));
  }

}
