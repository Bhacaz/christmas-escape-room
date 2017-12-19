import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  input = '';
  wrongPassword: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.input === 'sapin') {
      return this.router.navigate(['/end']);
    }
    this.input = '';
    this.wrongPassword = true;
  }

}
