import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value.length > args ? value.substr(0, args) + ' ...' : value;
  }
}
