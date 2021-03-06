import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // setando o pure: false você força o pipe a atualizar em cada alteração de dados
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      item[propName] === filterString && resultArray.push(item);
    }
    return resultArray;
  }
}
