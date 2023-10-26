import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, DoCheck {

  ngOnInit(): void {

  }

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  constructor() {

  }

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem('list') || '[]');

  public deleteitem($event: number) {
    this.taskList.splice($event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Deseja realmente deletar tudo?")

    if (confirm == true) {
      this.taskList = [];
    }
  }

  public validationInput($event: string, index: number) {
    if (!$event.length) {
      const confirm = window.confirm('Task está vaiza, deseja deletar?');
      if (confirm) {
        this.deleteitem(index);
      }
    }
  }

  public setEmitList($event: string) {
    this.taskList.push({ task: $event, checked: false });
  }

  public setLocalStorage(){
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}
