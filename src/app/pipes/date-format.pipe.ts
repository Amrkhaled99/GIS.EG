import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

    transform(value: any, format: string = 'dd MMM yyyy'): string {
      const datePipe = new DatePipe('en-US');
      return datePipe.transform(value, format)+"";
    }
  }


