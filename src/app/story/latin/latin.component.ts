import { Component, OnInit } from '@angular/core';
import {TimerService} from "../../timer/timer.service";

@Component({
  selector: 'app-latin',
  templateUrl: './latin.component.html',
  styleUrls: ['./latin.component.css']
})
export class LatinComponent implements OnInit {

  constructor(private _timer: TimerService) { }

  ngOnInit() {

  }


}
