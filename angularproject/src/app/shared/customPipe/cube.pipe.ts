import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cube',
  standalone: true
})
export class CubePipe implements PipeTransform {

  transform(value:any) {
    return value**3;
  }

}
