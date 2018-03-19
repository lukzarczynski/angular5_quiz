import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {Page, PageableData, Sort} from '../shared';
import {Tag} from './model/tag';
import {TagsService} from './tags.service';

@Injectable()
export class TagsDataSource implements DataSource<Tag> {

  private tagsSubject = new BehaviorSubject<PageableData<Tag>>(new PageableData<Tag>());

  constructor(private tagsService: TagsService) {
  }

  connect(collectionViewer: CollectionViewer): Observable<Tag[]> {
    return this.tagsSubject.asObservable().pipe(map(page => page.content));
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.tagsSubject.complete();
  }

  pageableSource(): Observable<PageableData<Tag>> {
    return this.tagsSubject.asObservable();
  }

  loadTags(page?: Page, sort?: Sort) {
    this.tagsService.getTags(page, sort)
      .subscribe(tags => this.tagsSubject.next(tags));
  }

}
