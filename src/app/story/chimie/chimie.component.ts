import { Component, OnInit } from '@angular/core';
import {TimerService} from "../../timer/timer.service";

@Component({
  selector: 'app-chimie',
  templateUrl: './chimie.component.html',
  styleUrls: ['./chimie.component.css']
})
export class ChimieComponent implements OnInit {

  input = '';
  answer = 'generation';
  goodAnswerFound: boolean = false;

  constructor(private _timer: TimerService) { }

  ngOnInit() {

  }

  goodAnswerChecker() {
    if (this.goodAnswerFound) { return true; }
    const re = /é/gi;
    const tmpInput = this.input.toString().toLowerCase().replace(re, 'e');
    if(tmpInput === this.answer) {
      this.goodAnswerFound = true;
      this._timer.nextStep('7', 2000);
      return this.goodAnswerFound;
    }
    return this.goodAnswerFound;
  }


}
