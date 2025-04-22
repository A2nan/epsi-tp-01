import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTitle',
  standalone: true
})
export class FormatTitlePipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    console.log(value);

    if (!value) return ''; // Gère les cas où value est null, undefined ou vide
    const words = value.replace(/_/g, ' ').toLowerCase().split(' ');
    
    return words.map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }
}