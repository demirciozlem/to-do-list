import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyToDoListComponent } from './my-to-do-list.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('MyToDoListComponent', () => {
  let component: MyToDoListComponent;
  let fixture: ComponentFixture<MyToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ MyToDoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as title 'My to do list'`, () => {
    const fixture = TestBed.createComponent(MyToDoListComponent);
    const list = fixture.componentInstance;
    expect(list.title).toEqual('My to do list');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Add button', () => {
    const fixture = TestBed.createComponent(MyToDoListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toContain('Add');

  });
});
