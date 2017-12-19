import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";

@Injectable()
export class TimerService {

  constructor(private router: Router,
              private snackBar: MatSnackBar) {

  }

  nextStep(step: string, delay: number) {
    this.snackBar.open('Bien joué !!!', '',  {
      duration: delay - 100,
    });
    setTimeout(() => { this.router.navigate(['/' + step.toString()]); }, delay);
  }

}
