import { Component, OnInit } from '@angular/core';
import {TimerService} from "../../timer/timer.service";

@Component({
  selector: 'app-encore-carre',
  templateUrl: './encore-carre.component.html',
  styleUrls: ['./encore-carre.component.css']
})
export class EncoreCarreComponent implements OnInit {

  input = '';
  answer = 'sapin';
  goodAnswerFound: boolean = false;

  constructor(private _timer: TimerService) { }

  ngOnInit() {

  }

  goodAnswerChecker() {
    if (this.goodAnswerFound) { return true; }
    if(this.input.toString().toLowerCase() === this.answer) {
      this.goodAnswerFound = true;
      this._timer.nextStep('8', 2000);
      return this.goodAnswerFound;
    }
    return this.goodAnswerFound;
  }

}
