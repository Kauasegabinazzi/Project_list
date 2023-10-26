import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { TodoBottonDeleteAllComponent } from './components/todo-botton-delete-all/todo-botton-delete-all.component';
import { TodosInputAddItensComponent } from './components/todos-input-add-itens/todos-input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoBottonDeleteAllComponent,
    TodosInputAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
