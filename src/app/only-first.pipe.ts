import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlyFirst'
})
export class OnlyFirstPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (Array.isArray(value)) {
      return [value[0]];
    }
    return value;
  }

}
