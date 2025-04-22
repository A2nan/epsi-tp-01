import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTitle'
})
export class FormatTitlePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
