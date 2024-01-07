import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculator-app-main';
  value = '';
  calculatedValue = '';
  calculateVal = 0;
  theme = 1;
  divide = false;
  theme1 = false;
  theme2 = false;
  theme3 = false;
  keys: string[] = [
    '7',
    '8',
    '9',
    'DEL',
    '4',
    '5',
    '6',
    '+',
    '1',
    '2',
    '3',
    '-',
    '.',
    '0',
    '/',
    'x',
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  onClickBtn = (key: string) => {
    if (key === 'DEL') {
      if (this.value === 'SYNTAX ERROR') {
        this.onClickReset();
      } else {
        this.value = this.value.slice(0, -1);
        this.calculatedValue = this.calculatedValue.slice(0, -1);
      }
    } else {
      if (this.value !== 'SYNTAX ERROR') {
        this.value += key;
        if (key === 'x') {
          key = '*';
        }
        this.calculatedValue += key;
      }
    }
  };

  onClickReset = () => {
    this.value = '';
    this.calculatedValue = '';
  };
  onClickEqual = () => {
    try {
      const result = eval(this.calculatedValue);
      this.value = result.toLocaleString();
    } catch (e) {
      this.value = 'SYNTAX ERROR';
    }
  };

  hasConsecutiveSymbols = (inputString: string, symbols: string): boolean => {
    const pattern = new RegExp(`[${symbols}]{2}`);
    return pattern.test(inputString);
  };

  onClickToggleBtn = () => {
    if (this.theme === 3) {
      this.theme = 1;
      this.theme2 = false;
      this.theme3 = false;
      this.theme1 = true;
    } else if (this.theme === 1) {
      this.theme = 2;
      this.theme2 = true;
      this.theme3 = false;
      this.theme1 = false;
    } else {
      this.theme = 3;
      this.theme2 = false;
      this.theme3 = true;
      this.theme1 = false;
    }
    console.log(this.theme, ' : ', this.theme1);
  };
}
