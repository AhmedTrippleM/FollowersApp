import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormat'
})
export class TextFormatPipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;


    let words = value.split(' ');
    for (var i = 0; i < words.length; i++) {
      if (i > 0 && this.checkpreposition(words[i])) {
        words[i] = words[i].toLowerCase();
      }
      else {
        words[i] = this.CombineWord(words[i]);
      }

    }
    return words.join(' ');


  }
  private checkpreposition(word: string): boolean {
    let preposition = [
      'of',
      'the'
    ];
    return preposition.includes(word.toLowerCase());
  }
  private CombineWord(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

}
