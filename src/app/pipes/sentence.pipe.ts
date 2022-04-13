import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentence',
})
export class SentencePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();
  }
}
