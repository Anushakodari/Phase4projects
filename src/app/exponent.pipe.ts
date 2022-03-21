import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponent'
})
export class ExponentPipe implements PipeTransform {

  transform(value: number, power?:number): number {
    console.log(value);
    console.log(power);
    if(power=== undefined)
      power=2;
    return Math.pow(value,power);
  }
}
