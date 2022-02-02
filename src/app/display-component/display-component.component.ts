import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalculateServiceService } from '../calculate-service.service';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.css']
})
export class DisplayComponentComponent implements OnInit {

  @Input()
  value: String | any;

  @Output()  onModeChange : EventEmitter<string>=new EventEmitter<string>();
  
  constructor(CalculateService:CalculateServiceService) { }

  ngOnInit(): void {
    this.remove;
  }

// This function deletes one number from the  expression and returns the  result
remove() {
  this.value=this.value.slice(0,-1);

}

// This function updates  the  result
changeDisplay(newInput:string){

  this.value=newInput;
  this.onModeChange.emit(this.value);
}



}
