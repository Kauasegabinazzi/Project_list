import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoBottonDeleteAllComponent } from './todo-botton-delete-all.component';

describe('TodoBottonDeleteAllComponent', () => {
  let component: TodoBottonDeleteAllComponent;
  let fixture: ComponentFixture<TodoBottonDeleteAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoBottonDeleteAllComponent]
    });
    fixture = TestBed.createComponent(TodoBottonDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
