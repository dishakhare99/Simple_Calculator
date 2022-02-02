import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateServiceService {
  
  //This function evalutes the expression.

  Calculate(value:string){

   let  result:string=eval(value);
   console.log("the value ",result);
  return eval(result);}
}




