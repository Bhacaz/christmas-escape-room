import { Component, OnInit } from '@angular/core';
import {TimerService} from "../../timer/timer.service";

@Component({
  selector: 'app-carre-parfait',
  templateUrl: './carre-parfait.component.html',
  styleUrls: ['./carre-parfait.component.css']
})
export class CarreParfaitComponent implements OnInit {


  input = '';
  answer = 'lapin';
  goodAnswerFound: boolean = false;

  constructor(private _timer: TimerService) { }

  ngOnInit() {

  }

  goodAnswerChecker() {
    if (this.goodAnswerFound) { return true; }
    if(this.input.toString().toLowerCase() === this.answer) {
      this.goodAnswerFound = true;
      this._timer.nextStep('5', 2000);
      return this.goodAnswerFound;
    }
    return this.goodAnswerFound;
  }


}
