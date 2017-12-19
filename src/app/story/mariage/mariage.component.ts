import {Component, OnInit} from '@angular/core';
import {TimerService} from "../../timer/timer.service";

@Component({
  selector: 'app-mariage',
  templateUrl: './mariage.component.html',
  styleUrls: ['./mariage.component.css']
})
export class MariageComponent implements OnInit {

  input = '';
  answer = '1674';
  goodAnswerFound: boolean = false;

  constructor(private _timer: TimerService) { }

  ngOnInit() {
  }

  goodAnswerChecker() {
    if (this.goodAnswerFound) { return true; }
    if(this.input.toString() === this.answer) {
      this.goodAnswerFound = true;
      this._timer.nextStep('intro', 1500);
      return this.goodAnswerFound;
    }
    return this.goodAnswerFound;
  }

}
