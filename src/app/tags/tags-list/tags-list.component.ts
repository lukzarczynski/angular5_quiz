import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Page, PageableData, Sort} from '../../shared';
import {Tag} from '../model/tag';
import {TagsDataSource} from '../tags.datasource';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.css']
})
export class TagsListComponent implements OnInit {
  displayedColumns = ['id', 'name',  'parentTag', 'type','actions'];
  pageableOptions = {
    length: 0,
    pageIndex: 0,
    pageSize: 10,
  };
  pageableSource: Observable<PageableData<Tag>>;
  sort: Sort = new Sort();
  page: Page = new Page(0, this.pageableOptions.pageSize);


  constructor(public tagsDatasource: TagsDataSource) {
    this.pageableSource = tagsDatasource.pageableSource();
    this.pageableSource.subscribe(page => {
      this.pageableOptions.length = page.totalElements;
      this.pageableOptions.pageIndex = page.number;
    })
  }

  ngOnInit() {
    this.tagsDatasource.loadTags(this.page, null);
  }

  sortData(sort: Sort) {
    Object.assign(this.sort, sort);
    this.page = null;
    this.tagsDatasource.loadTags(this.page, this.sort);
  }

  pageChange(event) {
    this.page.page = event.pageIndex;
    this.tagsDatasource.loadTags(this.page, this.sort);
  }
}
