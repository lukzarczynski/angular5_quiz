import {Component, OnInit} from '@angular/core';
import {TagsDataSource} from '../tags.datasource';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.css']
})
export class TagsListComponent implements OnInit {
  displayedColumns = ['id', 'name', 'type'];


  constructor(public tagsDatasource: TagsDataSource) {
  }

  ngOnInit() {
    this.tagsDatasource.loadTags();
  }
}
