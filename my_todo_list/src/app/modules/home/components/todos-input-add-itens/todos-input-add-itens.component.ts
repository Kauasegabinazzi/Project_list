import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todos-input-add-itens',
  templateUrl: './todos-input-add-itens.component.html',
  styleUrls: ['./todos-input-add-itens.component.scss']
})
export class TodosInputAddItensComponent implements OnInit {

  @Output() public emitItem = new EventEmitter();
  public addIntemList: string = '';

  constructor() {

  }

  ngOnInit(): void {

  }

  public subItemLista(){
    // console.log(this.addIntemList);
    this.addIntemList = this.addIntemList.trim(); // remove os espaços
    if(this.addIntemList){
      this.emitItem.emit(this.addIntemList);
      this.addIntemList = "";
    }
  }

}
