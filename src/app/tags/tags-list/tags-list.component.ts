import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-tags-list",
  templateUrl: "./tags-list.component.html",
  styleUrls: ["./tags-list.component.css"]
})
export class TagsListComponent implements OnInit {
  displayedColumns = ["id", "name", "type"];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() {}

  ngOnInit() {}
}

export interface Element {
  id: number;
  name: string;
  type: string;
}

const ELEMENT_DATA: Element[] = [
  { id: 1, name: "item1", type: "type" },
  { id: 2, name: "item2", type: "type" },
  { id: 3, name: "item3", type: "type" }
];
