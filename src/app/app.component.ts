import { utf8Encode } from '@angular/compiler/src/util';
import { Component ,OnInit} from '@angular/core';
import { CalculateServiceService } from './calculate-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'Simple_Calculator';

   value: string | any;
 
   ngOnInit(): void {this.value='';}


   //this function displays the expression on event KeyPress.
  display(newvalue:String){

  this.value += newvalue;
   console.log("This is dispplay",newvalue);
  }

   //this function updates  the expression result on event onChange .
  onChangeDisplay(newResult:string){

    this.value=newResult;
  }
    //this function clears  the display on event clearClick  .
  onClickClearAll(){
    this.value=' ';
  }

}
