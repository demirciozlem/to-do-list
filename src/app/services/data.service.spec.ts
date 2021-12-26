import {TestBed} from '@angular/core/testing';

import {DataService} from './data.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TodoModel} from "../model/ToDo.model";
import {environment} from "../../environments/environment";

describe('DataServiceService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });


  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
    // const service: DataService = TestBed.inject(DataService);
    // expect(service.getList).toBeTruthy();
    service.getList().subscribe(
      (item: TodoModel[]) => {
        expect(item).toBeDefined();
      },
      (error) => {
        fail(error.message)
      }
    );

    const testRequest = httpMock.expectOne(environment.baseURL + '/to_do');
    expect(testRequest.request.method).toBe('GET');
    testRequest.flush({id: 1, name: "buy some milk"});
  });


  it('should have getData function', (done) => {

    const item: TodoModel = {
      id: 2,
      name: "buy some milk"
    };

    service.postToDo(item).subscribe(
      (data: TodoModel) => {
        expect(data).toBeDefined();
        expect(data).toEqual(item);
        done()
      },
      (error) => {
        fail(error.message)
      }
    );

    const testRequest = httpMock.expectOne(environment.baseURL + '/to_do');
    expect(testRequest.request.method).toBe('POST');
    testRequest.flush(item);

  });

});
