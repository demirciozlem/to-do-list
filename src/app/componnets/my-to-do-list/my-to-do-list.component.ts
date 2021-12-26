import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {TodoModel} from "../../model/ToDo.model";

@Component({
  selector: 'app-my-to-do-list',
  templateUrl: './my-to-do-list.component.html',
  styleUrls: ['./my-to-do-list.component.sass']
})
export class MyToDoListComponent implements OnInit {
  title = 'My to do list';
  name: any;
  list: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getList().subscribe((resp) => {
      this.list = resp;
    })
  }

  addToList() {
    this.dataService.postToDo(new TodoModel(0, this.name)).subscribe(
      (resp) => {
        this.dataService.getList();
        this.name = '';
      },
      () => {
      });
  }
}
