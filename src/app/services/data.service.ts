import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {TodoModel} from "../model/ToDo.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  getList() {
    return this.httpClient.get<TodoModel[]>(environment.baseURL + '/to_do');
  }

  postToDo(toDo: TodoModel) {
    return this.httpClient.post<TodoModel>(environment.baseURL + '/to_do', toDo);
  }

}
