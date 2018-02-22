import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  val = 0;
  message : string;
  constructor() { }

  ngOnInit() {
  }
   

//increment function
  increment(){
    if(this.val <15)
    {
      this.val += 1;
      this.message = '';
    }
    else
    {
      this.message = 'Maximum limit Reached';
    }
  }
  //decrement function
  decrement(){
    if(this.val > 0)
    {
      this.val -= 1;
      this.message = '';
    }
    else
    {
      this.message = 'Minimum limit Reached';
    }
  }

}
