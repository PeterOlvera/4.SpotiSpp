import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sininformacion'
})
export class SininformacionPipe implements PipeTransform {

  transform(value: any): string {

    let resultado = "";

    if( !value ){
      resultado = "Sin Información";
    }else{
      resultado = value;
    }

    return resultado;

  }

}
