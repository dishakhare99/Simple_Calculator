import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CalculateServiceService } from '../calculate-service.service';

@Component({
  selector: 'app-keypad-component',
  templateUrl: './keypad-component.component.html',
  styleUrls: ['./keypad-component.component.css']
})
export class KeypadComponentComponent implements OnInit {


  @Output()  keyPressEvent : EventEmitter<string> = new EventEmitter<string>();

  @Output() onChange: EventEmitter<string>= new EventEmitter<string>();

  @Output() clearClick: EventEmitter<string>= new EventEmitter<string>();

  value: string | any;
 
  constructor(public calculateService:CalculateServiceService ) {}

   public expression: string | any ;
   public newDisplay:string |any;

  ngOnInit() {
  
    
    this.clearScreen;
    this.expression="";
    this.newDisplay="";
   
    
  }

//This function gets value pressed on key
  onClick(num: string){
  
  this.keyPressEvent.emit(num);
  this.expression+=num;
  console.log("This is the expression",+this.expression);
  
  console.log("prints th element");
   console.log(num);
   
    
  }
//This function evalutes the expression result from calculator service.
  onClickEqual(){

    this.newDisplay = this.calculateService.Calculate(this.expression);
    console.log("This is a expression");
    console.log(this.newDisplay);
    this.onChange.emit(this.newDisplay);

  }

  //This function emits the event for clear screen.
  clearScreen() :void {
  
  this.clearClick.emit();
}



}



