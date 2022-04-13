import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableSort',
  pure:false,
})
export class TableSortPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
