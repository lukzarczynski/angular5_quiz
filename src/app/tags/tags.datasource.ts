import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Tag} from './tag';
import {TagsService} from './tags.service';

@Injectable()
export class TagsDataSource implements DataSource<Tag> {

  private tagsSubject = new BehaviorSubject<Tag[]>([]);

  constructor(private tagsService: TagsService) {
  }

  connect(collectionViewer: CollectionViewer): Observable<Tag[]> {
    return this.tagsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.tagsSubject.complete();
  }

  loadTags() {
    this.tagsService.getTags()
      .subscribe(tags => this.tagsSubject.next(tags));
  }

}
