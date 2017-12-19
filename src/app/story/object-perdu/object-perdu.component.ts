import { Component, OnInit } from '@angular/core';
import {TimerService} from "../../timer/timer.service";

@Component({
  selector: 'app-object-perdu',
  templateUrl: './object-perdu.component.html',
  styleUrls: ['./object-perdu.component.css']
})
export class ObjectPerduComponent implements OnInit {

  input = '';
  answer = 'risk';
  goodAnswerFound: boolean = false;

  constructor(private _timer: TimerService) { }

  ngOnInit() {

  }

  goodAnswerChecker() {
    if (this.goodAnswerFound) { return true; }
    if(this.input.toString().toLowerCase() === this.answer) {
      this.goodAnswerFound = true;
      this._timer.nextStep('4', 2000);
      return this.goodAnswerFound;
    }
    return this.goodAnswerFound;
  }



}
