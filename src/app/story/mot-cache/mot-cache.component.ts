import { Component, OnInit } from '@angular/core';
import {TimerService} from "../../timer/timer.service";

@Component({
  selector: 'app-mot-cache',
  templateUrl: './mot-cache.component.html',
  styleUrls: ['./mot-cache.component.css']
})
export class MotCacheComponent implements OnInit {

  input = '';
  answer = 'fringant';
  goodAnswerFound: boolean = false;

  constructor(private _timer: TimerService) { }

  ngOnInit() {

  }

  goodAnswerChecker() {
    if (this.goodAnswerFound) { return true; }
    if(this.input.toString().toLowerCase() === this.answer) {
      this.goodAnswerFound = true;
      this._timer.nextStep('3', 2000);
      return this.goodAnswerFound;
    }
    return this.goodAnswerFound;
  }


}
