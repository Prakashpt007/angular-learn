import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFileSize'
})
export class CustomFileSizePipe implements PipeTransform {

  transform(size: number, extension:string) {
    return (size * 1024).toFixed(0) + ' '+ extension;
  }

}
