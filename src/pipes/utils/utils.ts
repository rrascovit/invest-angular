import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the UtilsPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'utils',
})
export class UtilsPipe implements PipeTransform {
  constructor() {}
  transform(value: any, arg: string) {
    let _return = null;
    switch (arg) {
      case 'money':
        let valueToString = '' + value;
        if (valueToString.includes('.')) {
          let splitString = valueToString.split('.');
          if (splitString[1].length == 2) {
            _return = valueToString.replace('.', ',');
            _return = numberWithCommas(splitString[0]) + ',' + splitString[1];
          } else {
            _return =
              numberWithCommas(splitString[0]) + ',' + splitString[1] + '0';
          }
        } else {
          _return = numberWithCommas(valueToString) + ',00';
        }
        _return = 'R$ ' + _return;
        break;
    }
    return _return;
  }
}

function numberWithCommas(value: any) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
