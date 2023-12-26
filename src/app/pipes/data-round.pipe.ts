import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataRound'
})
export class DataRoundPipe implements PipeTransform {

  transform(value: number): string {
    if (isNaN(value)) {
      return ''; // Return an empty string if value is not a number
    }
    // Use toFixed(3) to round to three decimal places and convert to string
    return value.toFixed(3);
  }
}
