import {Location} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';
import {Page} from '../../shared';
import {Tag} from '../model/tag';
import {TagType} from '../model/tag-type';
import {TagsService} from '../tags.service';

@Component({
  selector: 'app-tags-new',
  templateUrl: './tags-new.component.html',
  styleUrls: ['./tags-new.component.css']
})
export class TagsNewComponent implements OnInit {

  tag: Tag;
  tagTypes: typeof TagType;
  edit = false;

  private allExamTypes: Tag[] = [];
  filteredExamTypes: Subject<Tag[]> = new BehaviorSubject([]);
  parentElementSearchSubject: Subject<string> = new Subject<string>();

  constructor(private tagsService: TagsService,
              private route: ActivatedRoute,
              private router: Router,
              private _location: Location) {
    this.tag = new Tag();
    this.tagTypes = TagType;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.edit = true;
        this.tagsService.getTag(params.id).subscribe(tag => this.tag = tag);
      }
    });
    this.tagsService.getTags(new Page(0, 10000), null, {types: 'EXAM_TYPE'})
      .subscribe(r => {
        this.allExamTypes = r.content;
        this.filteredExamTypes.next(r.content);
      });
    this.parentElementSearchSubject
      .debounceTime(300)
      .subscribe(search => {
        this.filteredExamTypes.next(
          this.allExamTypes
            .filter(t => t.name.toLowerCase().indexOf(search) !== -1));
      });
  }

  onSubmit() {
    if (this.edit) {
      this.tagsService.editTag(this.tag).subscribe(() =>
        this.router.navigate(['./tags'])
      );
    } else {
      this.tagsService.createTag(this.tag).subscribe(() =>
        this.router.navigate(['./tags'])
      );
    }
  }

  onChange(arg) {
    const search = (typeof arg === 'string' ? arg : arg.name).toLowerCase();
    this.parentElementSearchSubject.next(search);
  }

  onCancel() {
    this._location.back();
  }

  displayFn(parent) {
    return parent && parent.name;
  }

}
