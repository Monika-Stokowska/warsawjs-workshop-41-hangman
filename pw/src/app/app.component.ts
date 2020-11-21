import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  // tslint:disable-next-line:typedef
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  // tslint:disable-next-line:typedef
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  // tslint:disable-next-line:typedef
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  // tslint:disable-next-line:typedef
  onButtonClick() {
    console.log(`
      About to generate a password with the following:
      Includes letters:  ${this.includeLetters} ;
     Includes numbers: ${this.includeNumbers};
     Includes symbols: ${this.includeSymbols};`);
    this.password = 'MY PASSWORD!!!';
  }
}
