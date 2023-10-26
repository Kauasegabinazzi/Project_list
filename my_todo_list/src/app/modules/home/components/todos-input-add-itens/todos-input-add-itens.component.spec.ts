import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosInputAddItensComponent } from './todos-input-add-itens.component';

describe('TodosInputAddItensComponent', () => {
  let component: TodosInputAddItensComponent;
  let fixture: ComponentFixture<TodosInputAddItensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodosInputAddItensComponent]
    });
    fixture = TestBed.createComponent(TodosInputAddItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
