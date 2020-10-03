import { Component } from '@angular/core';
import { Char } from './char.interface';

@Component({
  selector: 'app-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Technologie frontendowe';
  public shouldComponentExist = true;
  public chosenLetter = '';

  public char: Char = {
    letter: 'B',
    id: 1
  };


  public letters: Char[] = [
    { letter: 'A', id: 1 },
    { letter: 'S', id: 2 },
    { letter: 'D', id: 3 },
    { letter: 'F', id: 4 }
  ];

  public onLetterClicked(letter: string): void {
    console.log('Kliknięto:', letter);
  }

  public changeLetter(): void {
    this.char = {
      letter: 'A',
      id: 2
    };
  }

  public toggleComponentVisibility(): void {
    this.shouldComponentExist = !this.shouldComponentExist;
  }

  public chooseLetter(letter: string): void {
    this.chosenLetter = letter;
  }

  public getClasses(letter: string): { 'clicked-button': boolean } {
    return { 'clicked-button': this.chosenLetter === letter };
  }
}
