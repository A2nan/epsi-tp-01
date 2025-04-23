import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTitle'
})
export class FormatTitlePipe implements PipeTransform {

  transform(value: string | null | undefined): string {
    if (!value) return '';

    const words = value.replace(/_/g, ' ').toLowerCase().split(' ');

    return words.map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

}
